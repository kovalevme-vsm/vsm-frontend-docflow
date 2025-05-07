import axios from 'axios';
import { useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router';

import { ROUTES } from 'shared/const';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
  xsrfHeaderName: 'X-CSRFToken',
  xsrfCookieName: 'csrftoken',
  withXSRFToken: true,
});

apiClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken') || null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const setupResponseInterceptor = (navigate: NavigateFunction) => {
  return apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (
        error.response?.status !== 401 ||
        originalRequest._retry ||
        window.location.pathname === ROUTES.LOGIN
      ) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) throw new Error('No refresh token');

        const { data } = await axios.post(
          'users/auth/refresh',
          { refresh: refreshToken },
          {
            withCredentials: true,
            baseURL: import.meta.env.VITE_API_URL,
          }
        );

        sessionStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);

        originalRequest.headers.Authorization = `Bearer ${data.access}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token failed:', refreshError);
        sessionStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');

        // Используем navigate вместо window.location.href
        navigate(ROUTES.LOGIN);
        return Promise.reject(refreshError);
      }
    }
  );
};

export const useApiInterceptor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = setupResponseInterceptor(navigate);

    return () => {
      // Очистка интерцептора при размонтировании
      apiClient.interceptors.response.eject(interceptor);
    };
  }, [navigate]);
};

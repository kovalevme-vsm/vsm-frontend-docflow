import axios from 'axios';

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

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const location = window.location.pathname;
    // Если ошибка 401 и это не запрос на /refresh
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      location !== ROUTES.LOGIN
    ) {
      originalRequest._retry = true;

      try {
        // Запрашиваем новый accessToken через refreshToken
        const token = localStorage.getItem('refreshToken') || null;
        const { data } = await axios.post(
          'users/auth/refresh',
          { refresh: token },
          { withCredentials: true, baseURL: import.meta.env.VITE_API_URL } // Куки (refreshToken) отправится автоматически
        );
        // Сохраняем новый accessToken
        const newAccessToken = data.access;
        sessionStorage.setItem('accessToken', data.access);
        localStorage.setItem('refreshToken', data.refresh);

        // Повторяем исходный запрос с новым токеном
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Если refreshToken невалиден - разлогиниваем пользователя
        console.error('Refresh token failed', refreshError);
        window.location.href = ROUTES.LOGIN; // Редирект на логин
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

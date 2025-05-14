import { Rule } from 'antd/es/form';

interface FormRules {
  [key: string]: Rule[];
}

export const formRules: FormRules = {
  userName: [
    {
      required: true,
      message: 'Пожалуйста, введите имя пользователя',
    },
    {
      pattern: /^[a-zA-z]+$/,
      message: 'Имя пользователя должно содержать только латинские символы',
    },
    {
      min: 5,
      type: 'string',
      message: 'Имя пользователя должно содержать минимум 5 символов',
    },
  ],
  email: [
    {
      required: true,
      message: 'Пожалуйста, введите E-mail',
    },
    {
      type: 'email',
      message: 'Введен некорректный E-mail',
    },
  ],
  firstName: [
    {
      required: true,
      message: 'Пожалуйста, введите Имя',
    },
  ],
  lastName: [
    {
      required: true,
      message: 'Пожалуйста, введите Фамилию',
    },
  ],
  departmentId: [
    {
      required: true,
      message: 'Пожалуйста, выберите Отдел',
    },
  ],
  jobTitleId: [
    {
      required: true,
      message: 'Пожалуйста, выберите Должность',
    },
  ],
} as const;

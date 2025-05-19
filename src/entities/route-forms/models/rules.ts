import { Rule } from 'antd/es/form';

interface FormRules {
  [key: string]: Rule[];
}

export const routeBaseFormRules: FormRules = {
  name: [
    {
      required: true,
      message: 'Пожалуйста укажите имя маршрута',
    },
  ],
  document_type: [
    {
      required: true,
      message: 'Пожалуйста укажите тип документа',
    },
  ],
};

export const routeStepFormRules: FormRules = {
  name: [
    {
      required: true,
      message: 'Пожалуйста укажите имя шага',
    },
  ],
  step_type: [
    {
      required: true,
      message: 'Пожалуйста укажите тип шага',
    },
  ],
};

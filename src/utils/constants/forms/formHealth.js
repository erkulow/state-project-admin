import { REGEXP_EMAIL } from '../general'

export const FORM_HEALTHCARE = {
   style: '100px 100px 200px 1fr',
   forms: [
      {
         label: 'Оорукананын аты',
         styles: { gridArea: '1 / 1 / 3 / 3' },
         requestName: 'hospitalName',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Директордун аты-жону',
         styles: { gridArea: '1 / 3 / 2 / 5' },
         requestName: 'directorHospital',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Адрес',
         styles: { gridArea: '2 / 1 / 2 / 3' },
         requestName: 'address',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Байланыш телефону',
         styles: { gridArea: '2 / 3 / 3 / 4' },
         requestName: 'phoneNumber',
         type: 'number',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Электрондук почтасы',
         styles: { gridArea: '2 / 4 / 3 / 5' },
         requestName: 'email',
         required: {
            required: 'Поляны бош жонотууго болбойт',
            pattern: {
               value: REGEXP_EMAIL,
               message: 'Электрондук почта форматында болуу керек',
            },
         },
      },
      {
         label: 'Оорукана жонундо маалымат',
         styles: { gridArea: '4 / 1 / 4 / 5' },
         type: 'textarea',
         requestName: 'info',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Add photo',
         styles: { gridArea: '3 / 1 / 3 / 5' },
         requestName: 'text',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}

export const FORM_FAPS = {
   style: '100px 200px 1fr',
   forms: [
      {
         label: 'ФАПтын аты',
         styles: { gridArea: '1 / 1 / 3 / 2' },
         requestName: 'hospitalName',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'ФАПтын жетекчиси',
         styles: { gridArea: '1 / 2 / 3 / 3' },
         requestName: 'directorHospital',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Адрес',
         styles: { gridArea: '1 / 3 / 2 / 4' },
         requestName: 'address',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Байланыш телефону',
         styles: { gridArea: '1/ 4 / 3 / 5' },
         requestName: 'phoneNumber',
         type: 'number',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'ФАП жонундо маалымат',
         styles: { gridArea: '3 / 1 / 3 / 5' },
         requestName: 'info',
         type: 'textarea',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Add photo',
         styles: { gridArea: '2 / 1 / 3 / 5' },
         requestName: 'text',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}

export const FORM_OMS = {
   style: '100px 200px 1fr',
   forms: [
      {
         label: ' ОМСтин аты',
         styles: { gridArea: '1 / 1 / 3 / 3' },
         requestName: 'hospitalName',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Байланыш телефону',
         styles: { gridArea: '1 / 5/ 5 / 3' },
         requestName: 'phoneNumber',
         type: 'number',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Маалымат',
         styles: { gridArea: '3 / 1/ 5 / 5' },
         requestName: 'info',
         type: 'textarea',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Add photo',
         styles: { gridArea: '2 / 1 / 3 / 5' },
         requestName: 'text',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}

export const FORM_DOCTORS_ADVICE = {
   style: '100px 200px 1fr',
   forms: [
      {
         label: ' Доктордун аты',
         styles: { gridArea: '1 / 1 / 2 / 3' },
         requestName: 'nameDoctors',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Кенештер',
         styles: { gridArea: '3 / 1 / 5 / 5' },
         requestName: 'info',
         type: 'textarea',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Байланыш телефону',
         styles: { gridArea: '1 / 3 / 3 / 5' },
         requestName: 'phone',
         type: 'number',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Add photo',
         styles: { gridArea: '2 / 1 / 3 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}

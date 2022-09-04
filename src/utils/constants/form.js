import { REGEXP_EMAIL } from './general'

export const FORM_LEADERSHIP = [
   {
      label: 'Аты',
      styles: { gridArea: '1 / 1 / 3 / 3' },
      requestName: 'firstName',
      required: {
         required: 'Поляны бош жонотууго болбойт',
      },
   },
   {
      label: 'Фамилиясы',
      styles: { gridArea: '1 / 3 / 2 / 4' },
      requestName: 'lastName',
      required: {
         required: 'Поляны бош жонотууго болбойт',
      },
   },
   {
      label: 'Атасынын аты',
      styles: { gridArea: '1 / 4 / 2 / 5' },
      requestName: 'patronymic',
      required: {
         required: 'Поляны бош жонотууго болбойт',
      },
   },
   {
      label: 'Туулган куну',
      styles: { gridArea: '2 / 3 / 3 / 5' },
      requestName: 'birthDay',
      type: 'date',
      required: {
         required: 'Поляны бош жонотууго болбойт',
      },
   },
   {
      label: 'Макамы',
      styles: { gridArea: '3 / 3 / 5 / 5' },
      requestName: 'positions',
      type: 'select',
      options: [
         '',
         'Айыл окмот башчысы',
         'Айыл окмотунун орун басары',
         'Айылдык кенешинин торагасы',
         'Айылдык кенешинин депутаты',
      ],
      required: {
         required: 'Поляны бош жонотууго болбойт',
      },
   },
   {
      label: 'Электрондук почтасы',
      styles: { gridArea: '2 / 1 / 3 / 3' },
      requestName: 'email',
      required: {
         required: 'Поляны бош жонотууго болбойт',
         pattern: {
            value: REGEXP_EMAIL,
            message: 'Электрондук почта форматында болушу керек',
         },
      },
   },
   {
      label: 'Байланыш телефону',
      styles: { gridArea: '3 / 1 / 4 / 3' },
      type: 'number',
      requestName: 'phoneNumber',
      required: {
         required: 'Поляны бош жонотууго болбойт',
      },
   },
]
export const FORM_EDUCATION = [
   {
      label: 'Мектептин аты',
      styles: { gridArea: '1 / 1 / 3 / 2' },
      requestName: 'schoolName',
      required: {
         required: 'Поляны бош жонотууго болбойт',
      },
   },
   {
      label: 'Директордун аты-жону',
      styles: { gridArea: '1 / 2 / 2 / 3' },
      requestName: 'directorFullName',
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
      styles: { gridArea: '1 / 4 / 3 / 5' },
      requestName: 'phoneNumber',
      type: 'number',
      required: {
         required: 'Поляны бош жонотууго болбойт',
      },
   },
   {
      label: 'Мектеп жонундо маалымат',
      styles: { gridArea: '2 / 1 / 5 / 5' },
      requestName: 'text',
      required: {
         required: 'Поляны бош жонотууго болбойт',
      },
   },
   // {
   //    label: 'Электрондук почтасы',
   //    styles: { gridArea: '2 / 1 / 3 / 3' },
   //    requestName: 'email',
   //    required: {
   //       required: 'Поляны бош жонотууго болбойт',
   //       pattern: {
   //          value: REGEXP_EMAIL,
   //          message: 'Электрондук почта форматында болушу керек',
   //       },
   //    },
   // },
   // {
   //    label: 'Байланыш телефону',
   //    styles: { gridArea: '3 / 1 / 4 / 3' },
   //    type: 'number',
   //    requestName: 'phoneNumber',
   //    required: {
   //       required: 'Поляны бош жонотууго болбойт',
   //    },
   // },
]

export const FORM_HEALTHCARE = [
   {
      label: 'Оорукананын аты',
      styles: { gridArea: '1 / 1 / 3 / 2' },
      requestName: 'hospitalName',
      required: {
         required: 'Поляны бош жонотууго болбойт',
      },
   },
   {
      label: 'Директордун аты-жону',
      styles: { gridArea: '1 / 2 / 2 / 3' },
      requestName: 'directorFullName',
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
      styles: { gridArea: '1 / 4 / 3 / 5' },
      requestName: 'phoneNumber',
      type: 'number',
      required: {
         required: 'Поляны бош жонотууго болбойт',
      },
   },
   {
      label: 'Оорукана жонундо маалымат',
      styles: { gridArea: '2 / 1 / 3 / 3' },
      requestName: 'infoAboutHospital',
      required: {
         required: 'Поляны бош жонотууго болбойт',
      },
   },
]

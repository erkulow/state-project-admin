import { REGEXP_EMAIL } from './general'

export const FORM_LEADERSHIP = [
   {
      label: 'Аты',
      styles: { gridArea: '1 / 1 / 3 / 3' },
      requestName: 'firstName',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Фамилиясы',
      styles: { gridArea: '1 / 3 / 2 / 4' },
      requestName: 'lastName',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Атасынын аты',
      styles: { gridArea: '1 / 4 / 2 / 5' },
      requestName: 'patronymic',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Туулган күнү',
      styles: { gridArea: '2 / 3 / 3 / 5' },
      requestName: 'birthDay',
      type: 'date',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Макамы',
      styles: { gridArea: '3 / 3 / 5 / 5' },
      requestName: 'positions',
      type: 'select',
      options: [
         '',
         'Айыл өкмөт башчысы',
         'Айыл өкмөтүнүн орун басары',
         'Айылдык кеңешинин төрагасы',
         'Айылдык кеңешинин депутаты',
      ],
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Электрондук почтасы',
      styles: { gridArea: '2 / 1 / 3 / 3' },
      requestName: 'email',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
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
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
]
export const FORM_EDUCATION = [
   {
      label: 'Мектептин аты',
      styles: { gridArea: '1 / 1 / 3 / 2' },
      requestName: 'schoolName',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Директордун аты-жонү',
      styles: { gridArea: '1 / 2 / 2 / 3' },
      requestName: 'directorFullName',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Дареги',
      styles: { gridArea: '1 / 3 / 2 / 4' },
      requestName: 'address',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Байланыш телефону',
      styles: { gridArea: '1 / 4 / 3 / 5' },
      requestName: 'phoneNumber',
      type: 'number',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Мектеп жөнүндө маалымат',
      styles: { gridArea: '2 / 1 / 5 / 5' },
      requestName: 'text',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
]
export const FORM_KINGERGARTENS = [
   {
      label: 'Бала бакчанын аты',
      styles: { gridArea: '1 / 1 / 3 / 3' },
      requestName: 'kindergartensName',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Директордун аты-жонү',
      styles: { gridArea: '1 / 3 / 2 / 4' },
      requestName: 'directorFullName',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Дареги',
      styles: { gridArea: '2 / 1 / 2 / 2' },
      requestName: 'address',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Байланыш телефону',
      styles: { gridArea: '1 / 4 / 3 / 5' },
      requestName: 'phoneNumber',
      type: 'number',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Электрондук почтасы',
      styles: { gridArea: '2 / 2 / 3 / 3' },
      requestName: 'email',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         pattern: {
            value: REGEXP_EMAIL,
            message: 'Электрондук почта форматында болушу керек',
         },
      },
   },
   {
      label: 'Бала бакчанын тили',
      styles: { gridArea: '2 / 3 / 5 / 5' },
      requestName: 'language',
      type: 'select',
      options: ['Кыргыз тили', 'Орус тили', 'Англис тили'],
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
]
export const FORM_CIRCLES = [
   {
      label: 'Ийримдин аты',
      styles: { gridArea: '1 / 1 / 3 / 3' },
      requestName: 'courseName',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Ийрим жетекчиси',
      styles: { gridArea: '1 / 3 / 2 / 4' },
      requestName: 'courseTeacher',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Маалымат',
      styles: { gridArea: '2 / 1 / 2 / 2' },
      requestName: 'info',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Байланыш телефону',
      styles: { gridArea: '1 / 4 / 3 / 5' },
      requestName: 'phoneNumber',
      type: 'number',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
]
export const FORM_EVENTS = [
   {
      label: 'Маалымат',
      styles: { gridArea: '1 / 1 / 3 / 5' },
      requestName: 'text',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         minLength: {
            value: 100,
            message: '100 белгиден аз болбосун',
         },
      },
   },
]
export const FORM_OLYMPIADS = [
   {
      label: 'Маалымат',
      styles: { gridArea: '1 / 1 / 3 / 5' },
      requestName: 'text',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         minLength: {
            value: 100,
            message: '100 белгиден аз болбосун',
         },
      },
   },
]
export const FORM_GRT = [
   {
      label: 'Маалымат',
      styles: { gridArea: '1 / 1 / 3 / 5' },
      requestName: 'text',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         minLength: {
            value: 100,
            message: '100 белгиден аз болбосун',
         },
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

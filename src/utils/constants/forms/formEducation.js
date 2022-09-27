import { REGEXP_EMAIL } from '../general'

export const FORM_SCHOOLS = {
   style: '100px 1fr 150px',
   forms: [
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
         styles: { gridArea: '3 / 1 / 5 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
            minLength: {
               value: 80,
               message: 'Символдордун саны 80ден кем болбошу керек',
            },
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '2 / 1 / 3 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}
export const FORM_DRIVING_SCHOOLS = {
   style: '100px 1fr 150px',
   forms: [
      {
         label: 'Авто мектептин аты',
         styles: { gridArea: '1 / 1 / 3 / 2' },
         requestName: 'drivingCourseName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Директордун аты-жонү',
         styles: { gridArea: '1 / 2 / 2 / 3' },
         requestName: 'director',
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
         styles: { gridArea: '3 / 1 / 5 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
            minLength: {
               value: 80,
               message: 'Символдордун саны 80ден кем болбошу керек',
            },
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '2 / 1 / 3 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}
export const FORM_KINGERGARTENS = {
   style: '100px 100px 150px 1fr',
   forms: [
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
         options: ['', 'Кыргыз тили', 'Орус тили', 'Англис тили'],
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '3 / 1 / 5 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Бала-бакча жонундо маалымат',
         styles: { gridArea: '5 / 1 / 5 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
            minLength: {
               value: 100,
               message: '100 белгиден аз болбосун',
            },
         },
      },
   ],
}
export const FORM_CIRCLES = {
   style: '100px 1fr 150px',
   forms: [
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
         styles: { gridArea: '3 / 1 / 5 / 5' },
         requestName: 'info',
         type: 'textarea',
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
export const FORM_EVENTS = {
   style: '100px 170px 1fr',
   forms: [
      {
         label: 'Иш-чаранын аталышы',
         styles: { gridArea: '1 / 1 / 3 / 5' },
         requestName: 'title',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Маалымат',
         styles: { gridArea: '3 / 1 / 3 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
            minLength: {
               value: 100,
               message: '100 белгиден аз болбосун',
            },
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '2 / 1 / 3 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}
export const FORM_OLYMPIADS = {
   style: '170px 1fr',
   forms: [
      {
         label: 'Маалымат',
         styles: { gridArea: '2 / 1 / 3 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
            minLength: {
               value: 100,
               message: '100 белгиден аз болбосун',
            },
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '1 / 1 / 3 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}
export const FORM_GRT = {
   style: '170px 1fr',
   forms: [
      {
         label: 'Маалымат',
         styles: { gridArea: '2 / 1 / 3 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
            minLength: {
               value: 100,
               message: '100 белгиден аз болбосун',
            },
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '1 / 1 / 3 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}

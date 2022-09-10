import { REGEXP_EMAIL } from '../general'

export const FORM_SCHOOLS = {
   style: 'repeat(2,1fr)',
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
         styles: { gridArea: '2 / 1 / 5 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
   ],
}
export const FORM_KINGERGARTENS = {
   style: 'repeat(2,1fr)',
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
         options: ['Кыргыз тили', 'Орус тили', 'Англис тили'],
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
   ],
}
export const FORM_CIRCLES = {
   style: 'repeat(2, 0.5fr)',
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
         styles: { gridArea: '2 / 1 / 2 / 5' },
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
   ],
}
export const FORM_EVENTS = {
   style: '1fr',
   forms: [
      {
         label: 'Маалымат',
         styles: { gridArea: '1 / 1 / 3 / 5' },
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
export const FORM_OLYMPIADS = {
   style: 'repeat(1,1fr)',
   forms: [
      {
         label: 'Маалымат',
         styles: { gridArea: '1 / 1 / 3 / 5' },
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
export const FORM_GRT = {
   style: '90px 0.5fr',
   forms: [
      {
         label: 'Маалымат',
         type: 'textarea',
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
   ],
}

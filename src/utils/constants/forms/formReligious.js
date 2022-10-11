import { REGEXP_EMAIL } from '../general'

export const FORM_MOSQUES = {
   style: '100px 100px 200px 1fr',
   forms: [
      {
         label: 'Мечиттин аты',
         styles: { gridArea: '1 / 1 / 3 / 3' },
         requestName: 'mosqueName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Имамдын аты-жонү',
         styles: { gridArea: '1 / 3 / 2 / 4' },
         requestName: 'imamName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Курулган куну',
         styles: { gridArea: '1 / 4 / 4 / 5' },
         requestName: 'birthDay',
         type: 'date',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Дареги',
         styles: { gridArea: '2 / 1 / 2 / 3' },
         requestName: 'address',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Электрондук почтасы',
         styles: { gridArea: '2 / 4 / 3 / 5' },
         requestName: 'email',
         type: 'email',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
            pattern: {
               value: REGEXP_EMAIL,
               message: 'Электрондук почта форматында болуу керек',
            },
         },
      },
      {
         label: 'Байланыш телефону',
         styles: { gridArea: '2 / 3 / 3 / 4' },
         requestName: 'phone',
         type: 'number',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Мечит жөнүндө маалымат',
         styles: { gridArea: '4 / 1 / 4 / 5' },
         requestName: 'positions',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '3 / 1 / 3 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}
export const FORM_MADRASAS = {
   style: '100px 100px 200px 1fr',
   forms: [
      {
         label: 'Медресенин аты',
         styles: { gridArea: '1 / 1 / 3 / 3' },
         requestName: 'schoolName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Директордун аты-жону',
         styles: { gridArea: '1 / 3 / 2 / 4' },
         requestName: 'director',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Курулган куну',
         styles: { gridArea: '1 / 4 / 3 / 5' },
         requestName: 'directorBirthDay',
         type: 'date',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Дареги',
         styles: { gridArea: '2 / 1 / 2 / 3' },
         requestName: 'address',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Байланыш телефону',
         styles: { gridArea: '2 / 3 / 3 / 4' },
         requestName: 'phone',
         type: 'number',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Электрондук почтасы',
         styles: { gridArea: '2 / 4 / 3 / 5' },
         requestName: 'email',
         type: 'email',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
            pattern: {
               value: REGEXP_EMAIL,
               message: 'Электрондук почта форматында болуу керек',
            },
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '3 / 1 / 3 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Медресе жөнүндө маалымат',
         styles: { gridArea: '4 / 1 / 4 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
   ],
}
export const FORM_PILGRIMAGE = {
   style: '70px 200px  1fr',
   forms: [
      {
         label: 'Ажынын аты-жонү',
         styles: { gridArea: '1 / 1 / 3 / 5' },
         requestName: 'fullName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Ажылык жөнүндө маалымат',
         styles: { gridArea: '3 / 1 / 4 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '2 / 1 / 2 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}
export const FORM_AIT = {
   style: '200px 1fr',
   forms: [
      {
         label: 'Айт жөнүндө маалымат',
         styles: { gridArea: '2 / 1 / 4 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '1 / 1 / 2 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}
export const FORM_RAMADAN = {
   style: '200px 1fr',
   forms: [
      {
         label: 'Рамазан жөнүндө маалымат',
         styles: { gridArea: '2 / 1 / 4 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '1 / 1 / 2 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}
export const FORM_NAMAZ = {
   style: '200px 1fr',
   forms: [
      {
         label: 'Намаз жөнүндө маалымат',
         styles: { gridArea: '2 / 1 / 5 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
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
export const FORM_MORALITY = {
   style: 'repeat(2,1fr)',
   forms: [
      {
         label: 'Адеп-ахлак жөнүндө маалымат',
         styles: { gridArea: '2 / 1 / 4 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '1 / 1 / 2 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}
export const FORM_RELIGIOUS_ACTIVITIES = {
   style: '200px 1fr',
   forms: [
      {
         label: 'Диний иш-чаралар жөнүндө маалымат',
         styles: { gridArea: '2 / 1 / 5 / 5' },
         requestName: 'info',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
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

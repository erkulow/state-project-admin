import { REGEXP_EMAIL } from './general'

export const FORM_HOSPITALS = [
   {
      label: 'Оорукананын аты',
      styles: { gridArea: '1 / 1 / 3 / 3' },
      requestName: 'hospitalName',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Директордун аты-жонү',
      styles: { gridArea: '1 / 3 / 2 / 4' },
      requestName: 'directorHospital',
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
      styles: { gridArea: '1 / 4 / 3 / 5' },
      requestName: 'phoneNumber',
      type: 'number',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Электрондук почтасы',
      styles: { gridArea: '2 / 3 / 3 / 5' },
      requestName: 'email',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         pattern: {
            value: REGEXP_EMAIL,
            message: 'Электрондук почта форматында болушу керек',
         },
      },
   },
]
export const FORM_PARAMEDIC_POINT = [
   {
      label: 'Оорукананын аты',
      styles: { gridArea: '1 / 1 / 3 / 3' },
      requestName: 'hospitalName',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Директордун аты-жонү',
      styles: { gridArea: '1 / 3 / 2 / 4' },
      requestName: 'directorHospital',
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
      styles: { gridArea: '1 / 4 / 3 / 5' },
      requestName: 'phoneNumber',
      type: 'number',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
      },
   },
   {
      label: 'Электрондук почтасы',
      styles: { gridArea: '2 / 3 / 3 / 5' },
      requestName: 'email',
      required: {
         required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         pattern: {
            value: REGEXP_EMAIL,
            message: 'Электрондук почта форматында болушу керек',
         },
      },
   },
]

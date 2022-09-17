export const FORM_ACTIVE_YOUTH = {
   style: '100px 100px 1fr',
   forms: [
      {
         label: 'Аты-жонү',
         styles: { gridArea: '1 / 1 / 3 / 3' },
         requestName: 'imamFullName',
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
         label: 'Маалымат',
         styles: { gridArea: '2 / 1 / 5 / 5' },
         requestName: 'text',
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
export const FORM_HEAD_OF_COMMITTEE = {
   style: 'repeat(2,1fr)',
   forms: [
      {
         label: 'Комитеттин аты',
         styles: { gridArea: '1 / 1 / 3 / 2' },
         requestName: 'committeName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Комитет башчынын аты-жону',
         styles: { gridArea: '1 / 2 / 3 / 3' },
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
         label: 'Комитет жөнүндө маалымат',
         styles: { gridArea: '2 / 1 / 5 / 5' },
         requestName: 'text',
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
export const FORM_INITIATIVIES = {
   style: 'repeat(2,1fr)',
   forms: [
      {
         label: 'Демилгенин аты',
         styles: { gridArea: '1 / 1 / 3 / 2' },
         requestName: 'initiaiveName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Демилге башчысынын аты-жонү',
         styles: { gridArea: '1 / 2 / 2 / 3' },
         requestName: 'initiaiveFullName',
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
         label: 'Демилге жөнүндө маалымат',
         styles: { gridArea: '2 / 1 / 5 / 5' },
         requestName: 'text',
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
export const FORM_OFFER_FOR_YOUTH = {
   style: 'repeat(2,1fr)',
   forms: [
      {
         label: 'Сунуштун аты',
         styles: { gridArea: '1 / 1 / 3 / 2' },
         requestName: 'offeriveName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Жаштар учун сунуштар жөнүндө маалымат',
         styles: { gridArea: '2 / 1 / 5 / 5' },
         requestName: 'text',
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
export const FORM_SPORT_ACTIVITIES = {
   style: 'repeat(2,1fr)',
   forms: [
      {
         label: 'Спорт иш-чаранын аталышы',
         styles: { gridArea: '1 / 1 / 2 / 3' },
         requestName: 'activitiFullName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Спорт иш-чара жөнүндө маалымат',
         styles: { gridArea: '2 / 1 / 5 / 5' },
         requestName: 'text',
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

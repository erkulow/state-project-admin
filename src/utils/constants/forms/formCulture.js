export const FORM_CULTURE_HOUSES = {
   style: '100px 100px 1fr',
   forms: [
      {
         label: 'Маданият уйунун аталышы',
         styles: { gridArea: '1 / 1 / 3 / 3' },
         requestName: 'houseName',
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
export const FORM_MUSEUMS = {
   style: '100px 100px 1fr',
   forms: [
      {
         label: 'Музейдин аты',
         styles: { gridArea: '1 / 1 / 3 / 2' },
         requestName: 'museumName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Музей башчысынын аты-жону',
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
         label: 'Музей жөнүндө маалымат',
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
export const FORM_CULTURAL_WORKERS = {
   style: '100px 200px 1fr',
   forms: [
      {
         label: 'Маданият жумушчунун аты-жону',
         styles: { gridArea: '1 / 1 / 3 / 5' },
         requestName: 'fullName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Маданият жумушчу жөнүндө маалымат',
         styles: { gridArea: '3 / 1 / 5 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
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
export const FORM_CULTURAL_COMPETITIONS = {
   style: '100px 100px 1fr',
   forms: [
      {
         label: 'Маданий сынактын аталышы',
         styles: { gridArea: '1 / 1 / 3 / 3 ' },
         requestName: 'competitionName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Жетектоочунун аты-жонү',
         styles: { gridArea: '1 / 3 / 2 / 5' },
         requestName: 'offersFullName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Сынак жөнүндө маалымат',
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
export const FORM_CULTURAL_ACTIVITIES = {
   style: '200px 1fr',
   forms: [
      {
         label: 'Иш-чара жөнүндө маалымат',
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

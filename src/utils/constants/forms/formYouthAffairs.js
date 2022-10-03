export const FORM_ACTIVE_YOUTH = {
   style: '100px 200px 1fr',
   forms: [
      {
         label: 'Аты-жонү',
         styles: { gridArea: '1 / 1 / 3 / 3' },
         requestName: 'fullName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Жаш-курагы',
         styles: { gridArea: '1 / 3 / 2 / 4' },
         requestName: 'age',
         type: 'date',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Тармагы',
         styles: { gridArea: '1 / 4 / 3 / 5' },
         requestName: 'direction',
         type: 'text',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Кошумча маалымат(Жетишкендиктери)',
         styles: { gridArea: '3 / 1 / 5 / 5' },
         requestName: 'result',
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
export const FORM_HEAD_OF_COMMITTEE = {
   style: '100px 200px 1fr',
   forms: [
      {
         label: 'Комитеттин аты',
         styles: { gridArea: '1 / 1 / 3 / 2' },
         requestName: 'managerName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Комитет башчынын аты-жону',
         styles: { gridArea: '1 / 2 / 3 / 3' },
         requestName: 'managerDirectorName',
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
         requestName: 'phone',
         type: 'number',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Комитет жөнүндө маалымат',
         styles: { gridArea: '3 / 1 / 5 / 5' },
         requestName: 'info',
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
export const FORM_INITIATIVIES = {
   style: '100px 200px 1fr',
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
         label: 'Жетекчинин аты-жонү',
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
export const FORM_OFFER_FOR_YOUTH = {
   style: '100px 200px 1fr',
   forms: [
      {
         label: 'Сунуштун аталышы',
         styles: { gridArea: '1 / 1 / 3 / 3 ' },
         requestName: 'offer',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Сунуштоочунун аты-жонү',
         styles: { gridArea: '1 / 3 / 2 / 4' },
         requestName: 'offersFullName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Байланыш телефону',
         styles: { gridArea: '1 / 4 / 2 / 5' },
         type: 'number',
         requestName: 'offersFullName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Сунуш жөнүндө маалымат',
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
export const FORM_SPORT_ACTIVITIES = {
   style: '100px 200px 1fr',
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
         label: 'Дареги',
         styles: { gridArea: '1 / 3 / 3 / 4' },
         requestName: 'address',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Убактысы',
         styles: { gridArea: '1 / 4 / 4 / 5' },
         requestName: 'time',
         type: 'date',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Спорт иш-чара жөнүндө маалымат',
         styles: { gridArea: '3 / 1 / 5 / 5' },
         requestName: 'infoSportEvents',
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

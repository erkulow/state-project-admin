export const FORM_NEWS_AND_ANNOUNCMENT = {
   style: '100px 180px 100px  1fr',
   forms: [
      {
         label: 'Аталышы',
         styles: { gridArea: '1 / 1 / 3 / 3' },
         requestName: 'title',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Убактысы',
         styles: { gridArea: '1 / 3 / 3 / 5' },
         requestName: 'dateOfNewAnnouncement',
         type: 'date',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Жанылыктардын тибин танданыз',
         styles: { gridArea: '3 / 1 / 3 / 3' },
         requestName: 'enumType',
         type: 'select',
         options: [
            { path: '', label: '' },
            { path: 'NEWSOFTHEWORLD', label: 'Дуйнолук жанылыктар' },
            { path: 'STATENEWS', label: 'Мамлекеттик жанылыктар' },
         ],

         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Жанылык/куулакттандыруу жөнүндө маалымат',
         styles: { gridArea: '4 / 1 / 4 / 5' },
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

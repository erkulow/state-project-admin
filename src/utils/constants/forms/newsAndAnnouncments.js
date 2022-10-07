export const FORM_NEWS_AND_ANNOUNCMENT = {
   style: '70px 180px  1fr',
   forms: [
      {
         label: 'Убактысы',
         styles: { gridArea: '1 / 1 / 3 / 5' },
         requestName: 'dateOfNewAnnouncement',
         type: 'date',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Жанылык/куулакттандыруу жөнүндө маалымат',
         styles: { gridArea: '3 / 1 / 3 / 5' },
         requestName: 'text',
         type: 'textarea',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Сурот кошуу',
         styles: { gridArea: '2 / 1 / 5 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
   ],
}

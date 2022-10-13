export const FORM_CELEBRITIES = {
   style: '100px 170px 200px 1fr',
   forms: [
      {
         label: 'Аты-жону',
         styles: { gridArea: '1 / 1 / 3 / 3' },
         requestName: 'fullName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Туулган куну',
         styles: { gridArea: '1 / 3 / 5/ 5' },
         requestName: 'birthday',
         type: 'date',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Толук маалымат',
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

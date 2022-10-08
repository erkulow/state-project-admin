import { REGEXP_EMAIL } from '../general'

export const FORM_OKM = {
   style: '100px 100px 200px 1fr',
   forms: [
      {
         label: 'ӨКМ кызматкеринин аты жону',
         styles: { gridArea: '1 / 1 / 3 / 3' },
         requestName: 'fullName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Туулган куну',
         styles: { gridArea: '1 / 3 / 5 / 5' },
         requestName: 'birthDay',
         type: 'date',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Электрондук почтасы',
         styles: { gridArea: '2 / 1 / 3 / 3' },
         requestName: 'email',
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
         styles: { gridArea: '2 / 3 / 5 / 5' },
         requestName: 'phone',
         type: 'number',
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

import { REGEXP_EMAIL } from '../general'

export const FORM_LEADERSHIP = {
   style: '100px 100px 100px 200px 1fr',
   styleBtn: '5 / 1 / 5 / 5',
   forms: [
      {
         label: 'Аты',
         styles: { gridArea: '1 / 1 / 3 / 3' },
         requestName: 'firstName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Фамилиясы',
         styles: { gridArea: '1 / 3 / 2 / 4' },
         requestName: 'lastName',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Атасынын аты',
         styles: { gridArea: '1 / 4 / 2 / 5' },
         requestName: 'patronymic',
      },
      {
         label: 'Туулган күнү',
         styles: { gridArea: '2 / 3 / 3 / 5' },
         requestName: 'birthDay',
         type: 'date',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Макамы',
         styles: { gridArea: '3 / 3 / 5 / 5' },
         requestName: 'positions',
         type: 'select',
         optisons: [
            '',
            'Айыл өкмөт башчысы',
            'Айыл өкмөтүнүн орун басары',
            'Айылдык кеңешинин төрагасы',
            'Айылдык кеңешинин депутаты',
            'Айылдык өкмөтүнүн катчысы',
         ],
         options: [
            { path: '', label: '' },
            { path: 'Айыл өкмөт башчысы', label: 'Айыл өкмөт башчысы' },
            {
               path: 'Айыл өкмөтүнүн орун басары',
               label: 'Айыл өкмөтүнүн орун басары',
            },
            {
               path: 'Айыл өкмөтүнүн катчысы',
               label: 'Айыл өкмөтүнүн катчысы',
            },
            {
               path: 'Айылдык кеңешинин төрагасы',
               label: 'Айылдык кеңешинин төрагасы',
            },
            {
               path: 'Айылдык кеңешинин депутаты',
               label: 'Айылдык кеңешинин депутаты',
            },
         ],
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
               message: 'Электрондук почта форматында болушу керек',
            },
         },
      },
      {
         label: 'Байланыш телефону',
         styles: { gridArea: '3 / 1 / 4 / 3' },
         type: 'number',
         requestName: 'phoneNumber',
         required: {
            required: 'Жазуу талаасын бош жөнөтүүгө болбойт',
         },
      },
      {
         label: 'Кызматкердин суроту',
         styles: { gridArea: '4 / 1 / 4 / 5' },
         requestName: 'galery',
         type: 'file',
         required: {
            required: 'Поляны бош жонотууго болбойт',
         },
      },
      {
         label: 'Кызматкер жонундо маалымат',
         styles: { gridArea: '5 / 1 / 5 / 5' },
         requestName: 'text',
         type: 'textarea',
         // required: {
         //    required: 'Поляны бош жонотууго болбойт',
         // },
      },
   ],
}

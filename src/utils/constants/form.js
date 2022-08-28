import { REGEXP_EMAIL } from "./general";

export const FORM_LEADERSHIP = [
  {
    label: "Аты",
    styles: { gridArea: "1 / 1 / 3 / 3" },
    requestName: "firstName",
    required: {
      required: "Поляны бош жонотууго болбойт",
    },
  },
  {
    label: "Фамилиясы",
    styles: { gridArea: "1 / 3 / 2 / 4" },
    requestName: "lastName",
    required: {
      required: "Поляны бош жонотууго болбойт",
    },
  },
  {
    label: "Атасынын аты",
    styles: { gridArea: "1 / 4 / 2 / 5" },
    requestName: "patronymic",
    required: {
      required: "Поляны бош жонотууго болбойт",
    },
  },
  {
    label: "Туулган куну",
    styles: { gridArea: "2 / 3 / 3 / 5" },
    requestName: "birthDay",
    type: "date",
    required: {
      required: "Поляны бош жонотууго болбойт",
    },
  },
  {
    label: "Макамы",
    styles: { gridArea: "3 / 3 / 5 / 5" },
    requestName: "positions",
	type : 'select',
	options : ['','Айыл окмот башчысы',"Айыл окмотунун орун басары",],
    required: {
      required: "Поляны бош жонотууго болбойт",
    },
  },
  {
    label: "Электрондук почтасы",
    styles: { gridArea: "2 / 1 / 3 / 3" },
    requestName: "email",
    required: {
      required: "Поляны бош жонотууго болбойт",
      pattern: {
        value: REGEXP_EMAIL,
        message: "Электрондук почта форматында болушу керек",
      },
    },
  },
  {
    label: "Байланыш телефону",
    styles: { gridArea: "3 / 1 / 4 / 3" },
    requestName: "phoneNumber",
    required: {
      required: "Поляны бош жонотууго болбойт",
    },
  },
];

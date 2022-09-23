const colors = ['red', 'green', 'blue', 'orange', 'violet', 'white']
const formats = [
   [
      { className: 'ql-bold' },
      { className: 'ql-italic' },
      { className: 'ql-underline' },
      { className: 'ql-strike' },
   ],
   [
      {
         className: 'ql-color',
         options: colors,
      },
      {
         className: 'ql-background',
         options: colors,
      },
   ],
   [
      {
         className: 'ql-script',
         value: 'sub',
      },
      {
         className: 'ql-script',
         value: 'super',
      },
   ],
   [
      {
         className: 'ql-header',
         value: '1',
      },
      {
         className: 'ql-header',
         value: '2',
      },
   ],
   [
      {
         className: 'ql-list',
         value: 'ordered',
      },
      {
         className: 'ql-list',
         value: 'bullet',
      },
   ],
   [
      {
         className: 'ql-align',
         options: ['right', 'center', 'justify'],
      },
   ],
   [{ className: 'ql-link' }],
]

export default formats

export const ROUTES = {
   INDEX: '/',
   SIGN_UP: '/sign-up',
   SIGN_IN: '/sign-in',
   NOT_FOUND_PAGE: '*',
}
export const ADMIN_ROUTES = {
   INDEX: {
      path: '/',
   },
   TESTS: {
      path: '/tests',
      label: 'TESTS',
   },
   ADD_NEW_TEST: {
      path: '/test',
      label: 'Add new test',
   },
   ADD_QUESTION: {
      path: '/test/:id/*',
      label: 'Questions',
   },
   EDIT_TEST: {
      path: 'test-edit/:id',
      label: 'Question',
   },
   EDIT_QUESTION: {
      path: 'test/:id/edit/:id',
      label: 'Question',
   },
   NEW_QUESTION: {
      path: '/test/:id/question',
      label: 'Question',
   },
   SUBMITTED_RESULTS: {
      path: '/submitted-results',
      label: 'SUBMITTED RESULTS',
   },
   RESULTS_DETAIL: {
      path: '/results-details/:id',
      label: 'SUBMITTED RESULTS',
   },
   RESULTS_EVALUTE: {
      path: '/results-evaluate/:id',
      label: 'EVALUATE RESULTS',
   },
}
export const CLIENT_ROUTES = {
   INDEX: {
      path: '/',
   },
   MY_RESULTS: {
      path: '/my-results',
      label: 'MY RESULTS',
   },
   CLIENT_TESTS: {
      path: '/client-tests',
      label: 'TESTS',
   },
   START_TESTING: {
      path: '/start-testing',
      label: 'Start testing',
   },
   TESTING: {
      path: '/testing/:id',
      label: 'Testing',
   },
   FINISH_TESTING: {
      path: '/finish-testing',
      label: 'Finish testing',
   },
}

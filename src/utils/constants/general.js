export const SERVER_BASE_URL =
   'http://bilingualbatch4-env.eba-3jzkk2xp.eu-west-2.elasticbeanstalk.com/api'
export const LOCALSTORAGE_KEY_USER = 'billingual_user_information'
export const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'CLIENT',
}
export const REGEXP_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
export const REGEXP_PASSWORD = /(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{6,32}/g
export const OPTIONS_TO_SELECT_TYPE = [
   {
      id: 1,
      type: 'Select real English words',
      OPTION_KEY: 'SELECT_THE_ENGLISH_WORD',
   },
   {
      id: 2,
      type: 'Listen and select word',
   },
   {
      id: 3,
      type: 'Type what you hear',
   },
   {
      id: 4,
      type: 'Record saying statement',
   },
   {
      id: 5,
      type: 'Describe Image',
   },
   {
      id: 6,
      type: 'Respond in at least N words',
   },
   {
      id: 7,
      type: 'Highlight the answer',
   },
   {
      id: 8,
      type: 'Select main idea',
   },
   {
      id: 9,
      type: 'Select the best title',
   },
]
export const TYPES_OF_QUESTION = {
   SELECT_REAL_ENGLISH_WORD: {
      TYPE_TITLE: 'Select real English words',
      OPTION_KEY: 'SELECT_REAL_ENGLISH_WORD',
   },
   LISTEN_AND_SELECT_WORD: {
      TYPE_TITLE: 'Listen and select word',
      OPTION_KEY: 'LISTEN_AND_SELECT_WORD',
   },
   TYPE_WHAT_YOU_HEAR: {
      TYPE_TITLE: 'Type what you hear',
      OPTION_KEY: 'TYPE_WHAT_YOU_HEAR',
   },
   RECORD_SAYING: {
      TYPE_TITLE: 'Record saying statement',
      OPTION_KEY: 'RECORD_SAYING',
   },
   DESCRIBE_IMAGE: {
      TYPE_TITLE: 'Describe Image',
      OPTION_KEY: 'DESCRIBE_IMAGE',
   },
   RESPOND_IN_AT_LEAST_N_WORDS: {
      TYPE_TITLE: 'Respond in at least N words',
      OPTION_KEY: 'RESPOND_IN_AT_LEAST_N_WORDS',
   },
   HIGHLIGHTS_THE_ANSWER: {
      TYPE_TITLE: 'Highlight the answer',
      OPTION_KEY: 'HIGHLIGHTS_THE_ANSWER',
   },
   SELECT_MAIN_IDEA: {
      TYPE_TITLE: 'Select main idea',
      OPTION_KEY: 'SELECT_MAIN_IDEA',
   },
   SELECT_THE_BEST_TITLE: {
      TYPE_TITLE: 'Select the best title',
      OPTION_KEY: 'SELECT_THE_BEST_TITLE',
   },
   TEST_COMPLETE_PAGE: {
      TYPE_TITLE: 'Select the best title',
      OPTION_KEY: 'SELECT_THE_BEST_TITLE',
   },
}
export const ACCEPT_FILES = {
   AUDIO: 'audio/*',
   IMAGE: 'image/*',
}

export const FORMAT_CHARS_FOR_TIME_INPUT = {
   1: '[0-5]',
   2: '[0-9]',
   3: '[0-5]',
   4: '[0-9]',
}

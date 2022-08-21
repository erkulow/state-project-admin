export const SERVER_BASE_URL = 'https://mady-application.herokuapp.com/api'

export const _KEY_AUTH = 'STATE_PROJECT_'

export const ROLES = {
	ADMIN: 'ADMIN',
	USER: 'CLIENT',
}
export const REGEXP_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
export const REGEXP_PASSWORD = /(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{6,32}/g

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

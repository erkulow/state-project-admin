/* eslint-disable no-use-before-define */
import { SERVER_BASE_URL } from '../utils/constants/general'

export const baseFetch = async (options) => {
	try {
		const { path, body, method, params } = options
		const requestOptions = {
			method: method || 'GET',
			headers: { 'Content-Type': 'application/json' },
		}
		if (method !== 'GET') {
			requestOptions.body = JSON.stringify(body || {})
		}
		if (params) {
			const queryParamsStringValue = Object.keys(params)
				.map((paramKey) => `${paramKey}=${params[paramKey]}`)
				.join('&')
			const path = `${path}?${queryParamsStringValue}`
		}
		const response = await fetch(
			`${SERVER_BASE_URL}/${path}`,
			requestOptions,
		)
		const result = await response.json()
		if (!response.ok) {
			console.log(result?.errors[0]?.defaultMessage)
			console.log(result?.errors[0])
			let errorMessage = 'Some thing went wrong'
			if (result && result.message) {
				errorMessage = result.errors[0].defaultMessage || result.message
			}
			throw new Error(errorMessage)
		}
		if (response.ok && result.status === 'UNAUTHORIZED') {
			throw new Error('Неправильный логин или пароль!!!')
		}
		return result
	} catch (e) {
		throw new Error(e)
	}
}

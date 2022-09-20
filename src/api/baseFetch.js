/* eslint-disable no-use-before-define */
import { SERVER_BASE_URL } from '../utils/constants/general'

import store from '../store'

export const baseFetch = async (options) => {
   const { token } = store.getState().auth
   try {
      const { path, body, method, params } = options
      const requestOptions = {
         method: options.method || 'GET',
         headers: token
            ? {
                 'Content-Type': 'application/json',
                 Authorization: `Bearer ${token}`,
              }
            : { 'Content-Type': 'application/json' },
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
      const response = await fetch(`${SERVER_BASE_URL}/${path}`, requestOptions)
      if (!options.isDelete) {
         const result = await response.json()
         if (!response.ok) {
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
      }
      const result = response.text()
      return result
   } catch (e) {
      throw new Error(e)
   }
}

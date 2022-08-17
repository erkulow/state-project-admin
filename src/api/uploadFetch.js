import { getJwt } from '../utils/helpers/general'
import { SERVER_BASE_URL } from '../utils/constants/general'

export const uploadFetch = async (options) => {
   const token = getJwt()
   try {
      const { path, body, method } = options
      const requestOptions = {
         method: method || 'GET',
         headers: {
            Authorization: `Bearer ${token}`,
         },
      }
      if (method !== 'GET') {
         requestOptions.body = body || {}
      }
      const response = await fetch(`${SERVER_BASE_URL}/${path}`, requestOptions)
      const result = await response.json()
      if (!response.ok) {
         let errorMessage = 'Some thing went wrong'
         if (result && result.message) {
            errorMessage = result.message
         }
         throw new Error(errorMessage)
      }
      return result
   } catch (error) {
      throw new Error(error.message)
   }
}

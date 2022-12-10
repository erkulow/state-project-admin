import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../components/UI/notification/Notification'
import { baseFetch } from '../api/baseFetch'
import { _KEY_AUTH } from '../utils/constants/general'
import { checkOnlineState } from '../utils/helpers/general'

export const loginAsAdmin = createAsyncThunk(
   'loginAsAdmin/admin',
   async ({ data, reset }, { rejectWithValue }) => {
      try {
         const result = await baseFetch({
            path: 'sign-in/auth',
            method: 'POST',
            body: data,
         })
         showSuccessMessage({
            title: 'Success!',
            message: 'Успешно:)',
         })
         reset()
         return result
      } catch (error) {
         if (!checkOnlineState()) {
            showErrorMessage({
               title: 'Error',
               message: 'Интернет узгултукко учурады окшойт :(',
            })
            window.location.href = '/not_connect:('
         } else {
            showErrorMessage({
               title: ':(',
               message: error.message,
            })
         }
         return rejectWithValue(error)
      }
   }
)
const localData = JSON.parse(sessionStorage.getItem(_KEY_AUTH)) || {}

const initialState = {
   token: localData?.token || null,
   isAuthorized: localData?.isAuthorized || false,
   isLoading: false,
   error: null,
   role: localData?.role || null,
}

const adminslice = createSlice({
   name: 'admin',
   initialState,
   reducers: {
      logout(state) {
         state.token = null
         state.isAuthorized = false
         state.role = null
      },
   },
   extraReducers: {
      [loginAsAdmin.pending]: (state) => {
         state.isLoading = true
         state.error = null
      },
      [loginAsAdmin.fulfilled]: (state, action) => {
         state.isLoading = false
         state.error = null
         state.token = action?.payload?.token
         state.isAuthorized = action?.payload?.token && true
         state.role = action?.payload?.role
      },
      [loginAsAdmin.rejected]: (state, action) => {
         state.isLoading = false
         state.error = action.payload
      },
   },
})

export const adminAction = adminslice.actions
export default adminslice

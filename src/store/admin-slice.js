import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
	showErrorMessage,
	showSuccessMessage,
} from '../components/UI/notification/Notification'
import { baseFetch } from '../api/baseFetch'
import { getDataFromLocalStorage } from '../utils/helpers/general'
import { _KEY_AUTH } from '../utils/constants/general'

export const loginAsAdmin = createAsyncThunk(
	'loginAsAdmin/admin',
	async ({ data, reset }, { rejectWithValue }) => {
		try {
			const result = await baseFetch({
				path: 'auth/sign-in',
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
			showErrorMessage({
				title: 'Error!!!',
				message: error.message,
			})
			rejectWithValue(error)
		}
	},
)
const localData = getDataFromLocalStorage(_KEY_AUTH) || {}
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
	reducers: {},
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

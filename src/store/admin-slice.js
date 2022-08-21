import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
	showErrorMessage,
	showSuccessMessage,
} from '../components/UI/notification/Notification'
import { baseFetch } from '../api/baseFetch'

export const loginAsAdmin = createAsyncThunk(
	'loginAsAdmin/admin',
	async ({ data, reset}, { rejectWithValue }) => {
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
			console.log(error.message)
			showErrorMessage({
				title: 'Error!!!',
				message: error.message,
			})
			rejectWithValue(error)
		}
	},
)
const initialState = {
	token: null,
	user: null,
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
			state.user = action.payload
		},
		[loginAsAdmin.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const adminAction = adminslice.actions
export default adminslice

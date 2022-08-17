import { configureStore } from '@reduxjs/toolkit'
import adminslice from './admin-slice'

export const store = configureStore({
	reducer: {
		admin: adminslice.reducer,
	},
})

import { configureStore } from '@reduxjs/toolkit'
import adminslice from './admin-slice'

const store = configureStore({
   reducer: {
      auth: adminslice.reducer,
   },
})
export default store

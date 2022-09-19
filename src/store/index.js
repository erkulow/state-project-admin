import { configureStore } from '@reduxjs/toolkit'
import adminslice from './admin-slice'
import leadershipSlice from './leadership-slice'

const store = configureStore({
   reducer: {
      auth: adminslice.reducer,
      leadership: leadershipSlice.reducer,
   },
})
export default store

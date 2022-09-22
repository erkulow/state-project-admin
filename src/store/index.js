import { configureStore } from '@reduxjs/toolkit'
import adminslice from './admin-slice'
import editSlice from './edit-slice'
import leadershipSlice from './leadership-slice'
import tabsSlice from './tab-slice'

const store = configureStore({
   reducer: {
      auth: adminslice.reducer,
      leadership: leadershipSlice.reducer,
      tab: tabsSlice.reducer,
      edit: editSlice.reducer,
   },
})
export default store

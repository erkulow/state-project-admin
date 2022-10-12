import { configureStore } from '@reduxjs/toolkit'
import adminslice from './admin-slice'
import editSlice from './edit-slice'
import crudSlice from './crud-slice'
import tabsSlice from './tab-slice'
import newsSlice from './news-slice'

const store = configureStore({
   reducer: {
      auth: adminslice.reducer,
      crud: crudSlice.reducer,
      tab: tabsSlice.reducer,
      edit: editSlice.reducer,
      news: newsSlice.reducer,
   },
})
export default store

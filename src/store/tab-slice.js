import { createSlice } from '@reduxjs/toolkit'

const tabsSlice = createSlice({
   name: 'tab',
   initialState: { tabValue: 0 },
   reducers: {
      tabChange(state, action) {
         state.tabValue = action.payload
      },
   },
})
export const tabActions = tabsSlice.actions
export default tabsSlice

import { createSlice } from '@reduxjs/toolkit'

const editSlice = createSlice({
   name: 'edit',
   initialState: { changingObj: null, isEdit: false },
   reducers: {
      isEditHandler(state, action) {
         state.isEdit = action.payload.isEdit
         state.changingObj = action.payload.data
      },
   },
})
export const { isEditHandler } = editSlice.actions
export default editSlice

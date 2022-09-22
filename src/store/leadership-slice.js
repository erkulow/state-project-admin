/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { fetchFile } from '../api/uploadFetch'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../components/UI/notification/Notification'

export const saveLeaderships = createAsyncThunk(
   'saveLeaderships/leadership',
   async ({ data, image, reset }, { rejectWithValue, dispatch }) => {
      if (data.positions === 'Айыл өкмөт башчысы') data.type = '1'
      if (data.positions === 'Айыл өкмөтүнүн орун басары') data.type = '2'
      if (data.positions === 'Айылдык өкмөтүнүн катчысы') data.type = '2'
      if (data.positions === 'Айылдык кеңешинин төрагасы') data.type = '3'
      if (data.positions === 'Айылдык кеңешинин депутаты') data.type = '3'
      try {
         const result = await baseFetch({
            path: 'homePage/employees/save',
            method: 'POST',
            body: data,
         })
         await dispatch(
            uploadImage({ image, idLeadershipData: result.id, reset })
         )
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const editLeadership = createAsyncThunk(
   'saveLeaderships/leadership',
   async ({ data, image, clear }, { rejectWithValue, dispatch }) => {
      try {
         const result = await baseFetch({
            path: `homePage/employees/${data.id}`,
            method: 'PATCH',
            body: data,
         })
         if (image.length) {
            await dispatch(
               uploadImage({
                  image,
                  idLeadershipData: data.id,
                  reset: clear,
               })
            )
         } else {
            showSuccessMessage({
               title: 'Ура',
               message: 'Кызматкер ийгиликтуу кошулду:)',
            })
            clear()
         }

         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const uploadImage = createAsyncThunk(
   'uploadImage/leadership',
   async ({ image, idLeadershipData, reset }, { rejectWithValue }) => {
      const formData = new FormData()
      formData.append('firstPhoto', image[0].file)
      try {
         const result = await fetchFile({
            path: `homePage/employees/upload-file/${idLeadershipData}`,
            method: 'POST',
            body: formData,
         })
         reset()
         showSuccessMessage({
            title: 'Ура',
            message: 'Кызматкер ийгиликтуу кошулду:)',
         })
         return result
      } catch (error) {
         showErrorMessage({
            title: ':(',
            message: 'Бир жерден ката кетти:(',
         })
         return rejectWithValue(error.message)
      }
   }
)
export const getLeaderships = createAsyncThunk(
   'getLeadership/leadership',
   async (_, { rejectWithValue }) => {
      try {
         const result = baseFetch({
            path: 'agriculture/acEvent/employees',
            method: 'GET',
         })
         return result
      } catch (error) {
         showErrorMessage({ title: 'Error', message: 'Что то пошло не так:(' })
         return rejectWithValue(error.message)
      }
   }
)
export const deleteLeaderships = createAsyncThunk(
   'deleteLeadership/leadership',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const result = await baseFetch({
            path: `homePage/employees/${id}`,
            method: 'DELETE',
            isDelete: true,
         })
         if (result) {
            showSuccessMessage({
               title: 'Ура!',
               message: 'Ийгиликтуу очурулду',
            })
            dispatch(getLeaderships())
         }
         return result
      } catch (error) {
         showErrorMessage({ title: 'Error', message: 'Что то пошло не так:(' })
         return rejectWithValue(error.message)
      }
   }
)
const initialState = {
   isLoading: null,
   error: null,
   government: [],
   governmentApparatus: [],
   villageCouncil: [],
   oneLeadership: null,
   isEdit: false,
}

const leadershipSlice = createSlice({
   name: 'leadership',
   initialState,
   reducers: {
      isEdit(state, action) {
         state.isEdit = action.payload.isEdit
         state.oneLeadership = action.payload.data
      },
   },
   extraReducers: {
      [saveLeaderships.pending]: (state) => {
         state.isLoading = true
      },
      [saveLeaderships.fulfilled]: (state) => {
         state.isLoading = false
      },
      [saveLeaderships.rejected]: (state) => {
         state.isLoading = false
      },
      [getLeaderships.pending]: (state) => {
         state.isLoading = true
      },
      [getLeaderships.fulfilled]: (state, { payload }) => {
         state.isLoading = false
         state.government = payload.filter((item) => item.type === '1')
         state.governmentApparatus = payload.filter((item) => item.type === '2')
         state.villageCouncil = payload.filter((item) => item.type === '3')
      },
      [getLeaderships.rejected]: (state) => {
         state.isLoading = false
      },
      [uploadImage.pending]: (state) => {
         state.isLoadingUpload = true
      },
      [uploadImage.fulfilled]: (state) => {
         state.isLoadingUpload = false
      },
      [uploadImage.rejected]: (state) => {
         state.isLoadingUpload = false
      },
      [deleteLeaderships.pending]: (state) => {
         state.isLoading = true
      },
      [deleteLeaderships.fulfilled]: (state) => {
         state.isLoading = false
      },
      [deleteLeaderships.rejected]: (state) => {
         state.isLoading = false
      },
   },
})
export const leadershipActions = leadershipSlice.actions
export default leadershipSlice

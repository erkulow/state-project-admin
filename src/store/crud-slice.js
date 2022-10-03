/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { fetchFile } from '../api/uploadFetch'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../components/UI/notification/Notification'
import {
   API_ROUTES_DELETE,
   API_ROUTES_EDIT,
   API_ROUTES_GET,
   API_ROUTES_SAVE,
   API_ROUTES_UPLOAD,
} from '../utils/constants/api-routes/general'

export const saveDataToServer = createAsyncThunk(
   'saveDataToServer/crud',
   async (
      { data, image, reset, category, notFile },
      { rejectWithValue, dispatch }
   ) => {
      if (category === 'leadership') {
         if (data.positions === 'Айыл өкмөт башчысы') data.type = '1'
         if (data.positions === 'Айыл өкмөтүнүн орун басары') data.type = '2'
         if (data.positions === 'Айылдык өкмөтүнүн катчысы') data.type = '2'
         if (data.positions === 'Айылдык кеңешинин төрагасы') data.type = '3'
         if (data.positions === 'Айылдык кеңешинин депутаты') data.type = '3'
      }

      try {
         const result = await baseFetch({
            path: `${API_ROUTES_SAVE[category].path}`,
            method: 'POST',
            body: data,
         })
         if (!notFile) {
            await dispatch(
               uploadImage({
                  image,
                  idLeadershipData: result.id,
                  reset,
                  category,
               })
            )
         } else {
            reset()
            showSuccessMessage({
               title: 'Ура',
               message: 'ийгиликтуу кошулду:)',
            })
         }

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
export const editData = createAsyncThunk(
   'editData/crud',
   async ({ data, image, clear, category }, { rejectWithValue, dispatch }) => {
      if (category === 'leadership') {
         if (data.positions === 'Айыл өкмөт башчысы') data.type = '1'
         if (data.positions === 'Айыл өкмөтүнүн орун басары') data.type = '2'
         if (data.positions === 'Айылдык өкмөтүнүн катчысы') data.type = '2'
         if (data.positions === 'Айылдык кеңешинин төрагасы') data.type = '3'
         if (data.positions === 'Айылдык кеңешинин депутаты') data.type = '3'
      }
      try {
         const result = await baseFetch({
            path: `${API_ROUTES_EDIT[category].path}/${data.id}`,
            method: 'PATCH',
            body: data,
         })
         if (image.length) {
            await dispatch(
               uploadImage({
                  image,
                  idLeadershipData: data.id,
                  reset: clear,
                  category,
               })
            )
         } else {
            showSuccessMessage({
               title: 'Ура',
               message: 'ийгиликтуу озгорду:)',
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
   'uploadImage/crud',
   async (
      { image, idLeadershipData, reset, category },
      { rejectWithValue }
   ) => {
      const formData = new FormData()
      formData.append('firstPhoto', image[0].file)
      try {
         const result = await fetchFile({
            path: `${API_ROUTES_UPLOAD[category].path}/${idLeadershipData}`,
            method: 'POST',
            body: formData,
         })
         reset()
         showSuccessMessage({
            title: 'Ура',
            message: 'ийгиликтуу кошулду:)',
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
export const getData = createAsyncThunk(
   'getData/crud',
   async (category, { rejectWithValue }) => {
      try {
         const result = await baseFetch({
            path: `${API_ROUTES_GET[category].path}`,
            method: 'GET',
         })
         return { result, category }
      } catch (error) {
         showErrorMessage({ title: 'Error', message: 'Что то пошло не так:(' })
         return rejectWithValue(error.message)
      }
   }
)
export const deleteData = createAsyncThunk(
   'deleteData/crud',
   async ({ id, category }, { rejectWithValue, dispatch }) => {
      try {
         const result = await baseFetch({
            path: `${API_ROUTES_DELETE[category].path}/${id}`,
            method: 'DELETE',
            isDelete: true,
         })
         if (result) {
            showSuccessMessage({
               title: 'Ура!',
               message: 'Ийгиликтуу очурулду',
            })
            dispatch(getData(category))
         }
         return result
      } catch (error) {
         showErrorMessage({ title: 'Ката', message: 'Что то пошло не так:(' })
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
   datas: [],
   editorValue: null,
}

const crudSlice = createSlice({
   name: 'crud',
   initialState,
   reducers: {
      changeTextEditor(state, action) {
         state.editorValue = action.payload
      },
   },
   extraReducers: {
      [saveDataToServer.pending]: (state) => {
         state.isLoading = true
      },
      [saveDataToServer.fulfilled]: (state) => {
         state.isLoading = false
      },
      [saveDataToServer.rejected]: (state) => {
         state.isLoading = false
      },
      [getData.pending]: (state) => {
         state.isLoading = true
      },
      [getData.fulfilled]: (state, { payload: { result, category } }) => {
         state.isLoading = false
         if (category === 'leadership') {
            state.government = result.filter((item) => item.type === '1')
            state.governmentApparatus = result.filter(
               (item) => item.type === '2'
            )
            state.villageCouncil = result.filter((item) => item.type === '3')
         } else {
            state.datas = result
         }
      },
      [getData.rejected]: (state) => {
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
      [deleteData.pending]: (state) => {
         state.isLoading = true
      },
      [deleteData.fulfilled]: (state) => {
         state.isLoading = false
      },
      [deleteData.rejected]: (state) => {
         state.isLoading = false
      },
   },
})
export const crudActions = crudSlice.actions
export default crudSlice

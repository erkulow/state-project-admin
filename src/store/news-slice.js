/* eslint-disable default-param-last */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../components/UI/notification/Notification'
import {
   API_ROUTES_DELETE,
   API_ROUTES_GET,
} from '../utils/constants/api-routes/general'
import { checkOnlineState } from '../utils/helpers/general'

export const getCountOfNews = createAsyncThunk(
   'getCountOfNews/news',
   async (_, { rejectWithValue }) => {
      try {
         const result = await baseFetch({
            path: 'agriculture/acEvent/count-page',
            method: 'GET',
         })
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const getNewsState = createAsyncThunk(
   'getNewsState/news',
   async (offset = 1, { rejectWithValue }) => {
      try {
         const result = await baseFetch({
            path: `${API_ROUTES_GET.newsState.path}/${offset}`,
            method: 'GET',
         })
         return { result }
      } catch (error) {
         if (!checkOnlineState()) {
            showErrorMessage({
               title: 'Error',
               message: 'Интернет узгултукко учурады окшойт :(',
            })
            window.location.href = '/not_connect:('
         } else {
            showErrorMessage({
               title: ':(',
               message: 'Бир жерден ката кетти:(',
            })
         }
         return rejectWithValue(error.message)
      }
   }
)
export const getNewsWorld = createAsyncThunk(
   'getNewsWorld/news',
   async (offset = 1, { rejectWithValue }) => {
      try {
         const result = await baseFetch({
            path: `${API_ROUTES_GET.newsWorld.path}/${offset}`,
            method: 'GET',
         })
         return { result }
      } catch (error) {
         if (!checkOnlineState()) {
            showErrorMessage({
               title: 'Error',
               message: 'Интернет узгултукко учурады окшойт :(',
            })
            window.location.href = '/not_connect:('
         } else {
            showErrorMessage({
               title: ':(',
               message: 'Бир жерден ката кетти:(',
            })
         }
         return rejectWithValue(error.message)
      }
   }
)
export const deleteData = createAsyncThunk(
   'deleteData/news',
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
         }
         return { id, category }
      } catch (error) {
         if (!checkOnlineState()) {
            showErrorMessage({
               title: 'Error',
               message: 'Интернет узгултукко учурады окшойт :(',
            })
            window.location.href = '/not_connect:('
         } else {
            showErrorMessage({
               title: ':(',
               message: 'Бир жерден ката кетти:(',
            })
         }
         return rejectWithValue(error.message)
      }
   }
)

const initialState = {
   isLoading: false,
   newsState: [],
   newsWorld: [],
   oneNewsState: null,
   oneNewsWorld: null,
   countOfState: 0,
   countOfWorld: 0,
}

const newsSlice = createSlice({
   name: 'news',
   initialState,
   reducers: {
      clearOneData(state) {
         state.oneNews = null
      },
   },
   extraReducers: {
      [getCountOfNews.pending]: (state) => {
         state.isLoading = true
      },
      [getCountOfNews.fulfilled]: (state, { payload }) => {
         state.isLoading = false
         state.countOfState = Math.ceil(+payload.state / 8)
         state.countOfWorld = Math.ceil(+payload.world / 8)
      },
      [getCountOfNews.rejected]: (state) => {
         state.isLoading = false
      },
      [getNewsState.pending]: (state) => {
         state.isLoading = true
      },
      [getNewsState.fulfilled]: (state, { payload: { result } }) => {
         state.isLoading = false
         state.newsState = result
      },
      [getNewsState.rejected]: (state) => {
         state.isLoading = false
      },
      [getNewsWorld.pending]: (state) => {
         state.isLoading = true
      },
      [getNewsWorld.fulfilled]: (state, { payload: { result } }) => {
         state.isLoading = false
         state.newsWorld = result
      },
      [getNewsWorld.rejected]: (state) => {
         state.isLoading = false
      },
      ///
      [deleteData.pending]: (state) => {
         state.isLoading = true
      },
      [deleteData.fulfilled]: (state, { payload: { id, category } }) => {
         state.isLoading = false
         state[category] = state[category].filter((el) => el.id !== id)
      },
      [deleteData.rejected]: (state) => {
         state.isLoading = false
      },
   },
})
export const newsActions = newsSlice.actions
export default newsSlice

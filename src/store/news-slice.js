/* eslint-disable default-param-last */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { baseFetch } from '../api/baseFetch'
import { API_ROUTES_GET } from '../utils/constants/api-routes/general'

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
   },
})
export const newsActions = newsSlice.actions
export default newsSlice

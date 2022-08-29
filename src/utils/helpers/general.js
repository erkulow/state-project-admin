/* eslint-disable no-alert */

export const saveToLocalStorage = (key, data) => {
   try {
      localStorage.setItem(key, JSON.stringify(data))
   } catch (error) {
      window.alert(error.message)
   }
}
export const getDataFromLocalStorage = (key) => {
   try {
      return JSON.parse(localStorage.getItem(key))
   } catch (error) {
      return window.alert(error.message)
   }
}
export const removeWithKeyFromLocalStorage = (key) => {
   localStorage.removeItem(key)
}

export const paramsSet = (value, key, setParams, params) => {
   params.set(key, value)
   setParams(params)
   if (value === '') {
      params.delete(key)
      setParams(params)
   }
}
export const getParams = (key, mode = 'get') => {
   const url = new URLSearchParams(window.location.search)
   if (mode === 'values') {
      const value = url.values()
      return value
   }
   if (mode === 'get') {
      const value = url.get(key)
      return value
   }
   return null
}
export function getNumberOfDays(start, end) {
   const startDate = new Date(start)
   const endDate = new Date(end)

   const oneDay = 1000 * 60 * 60 * 24

   const diffInTime = endDate.getTime() - startDate.getTime()

   const diffInDays = Math.round(diffInTime / oneDay)

   return diffInDays
}

export const convertDateInToString = (date) => {
   const month = date.toLocaleString('en-US', { month: 'long' })
   const day = date.toLocaleString('en-US', { day: '2-digit' })
   const year = date.getFullYear()
   const dateString = `${month} ${day} ${year}`

   return dateString
}

export function compareTwoDate(currentDate, date) {
   return new Date(currentDate) < new Date(date)
}

export const padTo2Digits = (value) => {
   return value.toString().padStart(2, '0')
}
export const formatDate = {
   DD_MM_YYYY: (date) => {
      const newDate = new Date(date)
      return [
         padTo2Digits(newDate.getDate()),
         padTo2Digits(newDate.getMonth() + 1),
         newDate.getFullYear(),
      ].join('/')
   },
   MM_DD_YYYY: (date) => {
      const newDate = new Date(date)
      return [
         padTo2Digits(newDate.getMonth() + 1),
         padTo2Digits(newDate.getDate()),
         newDate.getFullYear(),
      ].join('/')
   },
   YYYY_MM_DD: (date) => {
      const newDate = new Date(date)
      return [
         newDate.getFullYear(),
         padTo2Digits(newDate.getMonth() + 1),
         padTo2Digits(newDate.getDate()),
      ].join('-')
   },
   MONTH_DD_YYYY: (date) => {
      const newDate = new Date(date)
      const month = newDate.toLocaleString('en-US', { month: 'long' })
      const day = newDate.toLocaleString('en-US', { day: '2-digit' })
      const year = newDate.getFullYear()
      const dateString = `${month} ${day} ${year}`

      return dateString
   },
}

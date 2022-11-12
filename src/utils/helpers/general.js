/* eslint-disable no-alert */
import { CATEGORYES } from '../constants/categoryes'
import { tabActions } from '../../store/tab-slice'
import { crudActions, editData, saveDataToServer } from '../../store/crud-slice'

import store from '../../store'

export const saveToSessionStorage = (key, data) => {
   try {
      sessionStorage.setItem(key, JSON.stringify(data))
   } catch (error) {
      window.alert(error.message)
   }
}
export const getDataFromSessionStorage = (key) => {
   try {
      return JSON.parse(sessionStorage.getItem(key))
   } catch (error) {
      return window.alert(error.message)
   }
}
export const removeWithKeyFromSessionStorage = (key) => {
   sessionStorage.removeItem(key)
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

export const findOneCategory = (pathname) => {
   let oneCategory = null
   CATEGORYES.forEach((category) =>
      category.innerList.forEach((item) => {
         if (item.path === pathname) {
            oneCategory = category
         }
         return category
      })
   )
   return oneCategory
}

const clear = (reset) => {
   reset()
   store.dispatch(tabActions.tabChange(1))
}

export const sendOrEditData = ({
   reset,
   data,
   image,
   category,
   isEdit,
   changingObj,
   notFile,
}) => {
   if (isEdit) {
      const editingData = {
         data: { ...data, id: changingObj.id },
         clear: clear.bind(null, reset),
         category,
         image,
      }
      store.dispatch(editData(editingData))
   } else {
      store.dispatch(
         saveDataToServer({
            data,
            image,
            reset: clear.bind(null, reset),
            category,
            notFile,
         })
      )
   }
}

export const putInDataForm = ({
   setValue,
   setImages,
   dataForm,
   template = 'text',
   isEdit,
   changingObj,
}) => {
   if (changingObj && isEdit) {
      dataForm.forms.map((item) => {
         setValue(item.requestName, changingObj[item.requestName])
         return null
      })
      store.dispatch(crudActions.changeTextEditor(changingObj[template]))
      setImages({
         images: [{ img: changingObj?.fileInformation?.photo, id: '1' }],
         files: [],
      })
   }
}

export function checkOnlineState() {
   if (navigator.onLine) {
      return true
   }
   return false
}

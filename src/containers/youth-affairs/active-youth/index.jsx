import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../../components/forms/Form'
import { TabPanel } from '../../../components/tabs/TabPanel'
import FullWidthTabs from '../../../components/tabs'
import { FORM_ACTIVE_YOUTH } from '../../../utils/constants/forms/formYouthAffairs'
import { tabActions } from '../../../store/tab-slice'
import Panel from './Panel'
import { putInDataForm, sendOrEditData } from '../../../utils/helpers/general'

const ActiveYouth = () => {
   const dispatch = useDispatch()
   const value = useSelector((state) => state.tab.tabValue)
   const { isEdit, changingObj } = useSelector((state) => state.edit)
   const { isLoading, isLoadingUpload } = useSelector((state) => state.crud)

   const handleChange = (_, newValue) => {
      dispatch(tabActions.tabChange(newValue))
   }

   const getDataHandler = (data, image, reset) => {
      sendOrEditData({
         isEdit,
         changingObj,
         reset,
         data,
         image,
         category: 'youthAffairsAY',
      })
   }

   return (
      <FullWidthTabs value={value} onChange={handleChange}>
         <TabPanel index={0} value={value}>
            <Form
               dataForm={FORM_ACTIVE_YOUTH}
               isEdit={isEdit}
               isLoading={isLoading || isLoadingUpload}
               onGetData={getDataHandler}
               onGetSetValue={({ setValue, setImages }) =>
                  putInDataForm({
                     dataForm: FORM_ACTIVE_YOUTH,
                     setImages,
                     setValue,
                     isEdit,
                     changingObj,
                     template: 'info',
                  })
               }
            />
         </TabPanel>
         <TabPanel index={1} value={value}>
            <Panel />
         </TabPanel>
      </FullWidthTabs>
   )
}

export default ActiveYouth

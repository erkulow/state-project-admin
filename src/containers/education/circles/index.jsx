import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../../components/forms/Form'
import FullWidthTabs from '../../../components/tabs'
import { FORM_CIRCLES } from '../../../utils/constants/forms/formEducation'
import { TabPanel } from '../../../components/tabs/TabPanel'
import { tabActions } from '../../../store/tab-slice'
import Panel from './Panel'
import { putInDataForm, sendOrEditData } from '../../../utils/helpers/general'

const Circles = () => {
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
         category: 'educationCircles',
      })
   }

   return (
      <FullWidthTabs value={value} onChange={handleChange}>
         <TabPanel index={0} value={value}>
            <Form
               dataForm={FORM_CIRCLES}
               onGetSetValue={({ setValue, setImages }) =>
                  putInDataForm({
                     dataForm: FORM_CIRCLES,
                     template: 'info',
                     setImages,
                     setValue,
                     isEdit,
                     changingObj,
                  })
               }
               isEdit={isEdit}
               isLoading={isLoading || isLoadingUpload}
               onGetData={getDataHandler}
            />
         </TabPanel>
         <TabPanel index={1} value={value}>
            <Panel />
         </TabPanel>
      </FullWidthTabs>
   )
}

export default Circles

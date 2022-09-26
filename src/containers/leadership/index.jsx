import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/forms/Form'
import FullWidthTabs from '../../components/tabs'
import { TabPanel } from '../../components/tabs/TabPanel'
import { tabActions } from '../../store/tab-slice'
import { FORM_LEADERSHIP } from '../../utils/constants/forms/formLeadership'
import { putInDataForm, sendOrEditData } from '../../utils/helpers/general'
import Panel from './Panel'

const Employees = () => {
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
         category: 'leadership',
      })
   }

   return (
      <FullWidthTabs value={value} onChange={handleChange}>
         <TabPanel index={0} value={value}>
            <Form
               isLoading={isLoading || isLoadingUpload}
               onGetData={getDataHandler}
               dataForm={FORM_LEADERSHIP}
               isEdit={isEdit}
               onGetSetValue={({ setValue, setImages }) =>
                  putInDataForm({
                     dataForm: FORM_LEADERSHIP,
                     setImages,
                     setValue,
                     isEdit,
                     changingObj,
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

export default Employees

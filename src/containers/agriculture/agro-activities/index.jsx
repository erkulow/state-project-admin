import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FullWidthTabs from '../../../components/tabs'
import Form from '../../../components/forms/Form'
import { FORM_AGRO_ACTIVITIES } from '../../../utils/constants/forms/formAgriculture'
import { TabPanel } from '../../../components/tabs/TabPanel'
import { tabActions } from '../../../store/tab-slice'
import { putInDataForm, sendOrEditData } from '../../../utils/helpers/general'
import Panel from './Panel'

const AgroActivities = () => {
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
         category: 'agroActivites',
      })
   }

   return (
      <FullWidthTabs value={value} onChange={handleChange}>
         <TabPanel index={0} value={value}>
            <Form
               dataForm={FORM_AGRO_ACTIVITIES}
               isEdit={isEdit}
               isLoading={isLoading || isLoadingUpload}
               onGetData={getDataHandler}
               onGetSetValue={({ setValue, setImages }) =>
                  putInDataForm({
                     dataForm: FORM_AGRO_ACTIVITIES,
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

export default AgroActivities

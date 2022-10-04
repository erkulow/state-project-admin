import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TabPanel } from '../../../components/tabs/TabPanel'
import FullWidthTabs from '../../../components/tabs'
import Form from '../../../components/forms/Form'
import { tabActions } from '../../../store/tab-slice'
import { FORM_CULTURAL_WORKERS } from '../../../utils/constants/forms/formCulture'
import { putInDataForm, sendOrEditData } from '../../../utils/helpers/general'
import Panel from './Panel'

const CulturalWorkers = () => {
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
         category: 'cultureWorkers',
      })
   }

   return (
      <FullWidthTabs value={value} onChange={handleChange}>
         <TabPanel index={0} value={value}>
            <Form
               dataForm={FORM_CULTURAL_WORKERS}
               isEdit={isEdit}
               isLoading={isLoading || isLoadingUpload}
               onGetData={getDataHandler}
               onGetSetValue={({ setValue, setImages }) =>
                  putInDataForm({
                     dataForm: FORM_CULTURAL_WORKERS,
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

export default CulturalWorkers

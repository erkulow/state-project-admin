import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../../components/forms/Form'
import FullWidthTabs from '../../../components/tabs'
import {
   FORM_DRIVING_SCHOOLS,
   FORM_SCHOOLS,
} from '../../../utils/constants/forms/formEducation'
import { TabPanel } from '../../../components/tabs/TabPanel'
import { tabActions } from '../../../store/tab-slice'
import {
   crudActions,
   editData,
   saveDataToServer,
} from '../../../store/crud-slice'
import Panel from './Panel'

const DrivingSchools = () => {
   const dispatch = useDispatch()
   const value = useSelector((state) => state.tab.tabValue)
   const { isEdit, changingObj } = useSelector((state) => state.edit)
   const { isLoading, isLoadingUpload } = useSelector((state) => state.crud)

   const handleChange = (_, newValue) => {
      dispatch(tabActions.tabChange(newValue))
   }

   const clear = (reset) => {
      reset()
      dispatch(tabActions.tabChange(1))
   }

   const getDataHandler = (data, image, reset) => {
      if (isEdit) {
         const editingData = {
            data: { ...data, id: changingObj.id },
            clear: clear.bind(null, reset),
            category: 'educationDrivingSC',
            image,
         }
         dispatch(editData(editingData))
      } else {
         dispatch(
            saveDataToServer({
               data,
               image,
               reset: clear.bind(null, reset),
               category: 'educationDrivingSC',
            })
         )
      }
   }

   const putInDataForm = (setValue, setImages) => {
      if (changingObj && isEdit) {
         FORM_SCHOOLS.forms.map((item) => {
            setValue(item.requestName, changingObj[item.requestName])
            return null
         })
         dispatch(crudActions.changeTextEditor(changingObj.text))
         setImages({
            images: [{ img: changingObj.fileInformation.photo, id: '1' }],
            files: [],
         })
      }
   }

   return (
      <FullWidthTabs value={value} onChange={handleChange}>
         <TabPanel index={0} value={value}>
            <Form
               dataForm={FORM_DRIVING_SCHOOLS}
               onGetSetValue={putInDataForm}
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

export default DrivingSchools

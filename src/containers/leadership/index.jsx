import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/forms/Form'
import FullWidthTabs from '../../components/tabs'
import { TabPanel } from '../../components/tabs/TabPanel'
import { editLeadership, saveLeaderships } from '../../store/leadership-slice'
import { tabActions } from '../../store/tab-slice'
import { FORM_LEADERSHIP } from '../../utils/constants/forms/formLeadership'
import Panel from './Panel'

const Employees = () => {
   const dispatch = useDispatch()
   const value = useSelector((state) => state.tab.tabValue)
   const { isEdit, changingObj } = useSelector((state) => state.edit)
   const { isLoading, isLoadingUpload } = useSelector(
      (state) => state.leadership
   )

   const handleChange = (event, newValue) => {
      dispatch(tabActions.tabChange(newValue))
   }

   const getDataHandler = (data, image, reset) => {
      const clear = () => {
         reset()
         dispatch(tabActions.tabChange(1))
      }
      if (isEdit) {
         const { id, type } = changingObj && changingObj
         dispatch(editLeadership({ data: { ...data, id, type }, image, clear }))
      } else {
         dispatch(saveLeaderships({ data, image, reset }))
      }
   }

   const putInDataForm = (setValue, setImages) => {
      if (changingObj && isEdit) {
         FORM_LEADERSHIP.forms.map((item) => {
            setValue(item.requestName, changingObj[item.requestName])
            return null
         })
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
               isLoading={isLoading || isLoadingUpload}
               onGetData={getDataHandler}
               dataForm={FORM_LEADERSHIP}
               onGetSetValue={putInDataForm}
            />
         </TabPanel>
         <TabPanel index={1} value={value}>
            <Panel />
         </TabPanel>
      </FullWidthTabs>
   )
}

export default Employees

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/forms/Form'
import FullWidthTabs from '../../components/tabs'
import { TabPanel } from '../../components/tabs/TabPanel'
import { saveLeaderships } from '../../store/leadership-slice'
import { FORM_LEADERSHIP } from '../../utils/constants/forms/formLeadership'

const Employees = () => {
   const dispatch = useDispatch()
   const { isLoading, isLoadingUpload } = useSelector(
      (state) => state.leadership
   )
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => setValue(newValue)

   const getDataHandler = (data, image, reset) =>
      dispatch(saveLeaderships({ data, image, reset }))

   return (
      <FullWidthTabs value={value} onChange={handleChange}>
         <TabPanel index={0} value={value}>
            <Form
               isLoading={isLoading || isLoadingUpload}
               onGetData={getDataHandler}
               dataForm={FORM_LEADERSHIP}
            />
         </TabPanel>
         <TabPanel index={1} value={value}>
            <div>asdfasdfasdfasd</div>
         </TabPanel>
      </FullWidthTabs>
   )
}

export default Employees

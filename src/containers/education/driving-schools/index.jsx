import React from 'react'
import Form from '../../../components/forms/Form'
import FullWidthTabs from '../../../components/tabs'
import { FORM_SCHOOLS } from '../../../utils/constants/forms/formEducation'
import { TabPanel } from '../../../components/tabs/TabPanel'

const DrivingSchools = () => {
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => setValue(newValue)

   return (
      <FullWidthTabs value={value} onChange={handleChange}>
         <TabPanel index={0} value={value}>
            <Form dataForm={FORM_SCHOOLS} />
         </TabPanel>
         <TabPanel index={1} value={value}>
            <div>asdfasdfasdfasd</div>
         </TabPanel>
      </FullWidthTabs>
   )
}

export default DrivingSchools

import React from 'react'
import Form from '../../../components/forms/Form'
import FullWidthTabs from '../../../components/tabs'
import { TabPanel } from '../../../components/tabs/TabPanel'
import { FORM_GRT } from '../../../utils/constants/forms/formEducation'

const GRT = () => {
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => setValue(newValue)

   return (
      <FullWidthTabs value={value} onChange={handleChange}>
         <TabPanel index={0} value={value}>
            <Form dataForm={FORM_GRT} />
         </TabPanel>
         <TabPanel index={1} value={value}>
            <div>asdfasdfasdfasd</div>
         </TabPanel>
      </FullWidthTabs>
   )
}

export default GRT

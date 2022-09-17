import React from 'react'
import Form from '../../../components/forms/Form'
import { TabPanel } from '../../../components/tabs/TabPanel'
import FullWidthTabs from '../../../components/tabs'
import { FORM_ACTIVE_YOUTH } from '../../../utils/constants/forms/formYouthAffairs'

const ActiveYouth = () => {
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => setValue(newValue)

   return (
      <FullWidthTabs value={value} onChange={handleChange}>
         <TabPanel index={0} value={value}>
            <Form dataForm={FORM_ACTIVE_YOUTH} />
         </TabPanel>
         <TabPanel index={1} value={value}>
            <div>asdfasdfasdfasd</div>
         </TabPanel>
      </FullWidthTabs>
   )
}

export default ActiveYouth

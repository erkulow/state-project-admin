import React from 'react'
import Form from '../../components/forms/Form'
import FullWidthTabs from '../../components/tabs'
import { TabPanel } from '../../components/tabs/TabPanel'
import { FORM_CELEBRITIES } from '../../utils/constants/forms/formCelebrities'

const Celebrities = () => {
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => setValue(newValue)

   return (
      <FullWidthTabs value={value} onChange={handleChange}>
         <TabPanel index={0} value={value}>
            <Form dataForm={FORM_CELEBRITIES} />
         </TabPanel>
         <TabPanel index={1} value={value}>
            <div>asdfasdfasdfasd</div>
         </TabPanel>
      </FullWidthTabs>
   )
}

export default Celebrities

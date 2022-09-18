import React from 'react'
import FullWidthTabs from '../../../components/tabs'
import Form from '../../../components/forms/Form'
import { FORM_AGRO_ACTIVITIES } from '../../../utils/constants/forms/formAgriculture'
import { TabPanel } from '../../../components/tabs/TabPanel'

const AgroActivities = () => {
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => setValue(newValue)

   return (
      <FullWidthTabs value={value} onChange={handleChange}>
         <TabPanel index={0} value={value}>
            <Form dataForm={FORM_AGRO_ACTIVITIES} />
         </TabPanel>
         <TabPanel index={1} value={value}>
            <div>asdfasdfasdfasd</div>
         </TabPanel>
      </FullWidthTabs>
   )
}

export default AgroActivities

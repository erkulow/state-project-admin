import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

function a11yProps(index) {
   return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
   }
}

export default function FullWidthTabs({ value, onChange, children }) {
   return (
      <Box sx={{ width: '100%' }}>
         <AppBar position="static">
            <Tabs
               value={value}
               onChange={onChange}
               indicatorColor="red"
               textColor="inherit"
               variant="fullWidth"
               aria-label="full width tabs example"
            >
               <Tab
                  style={{ backgroundColor: '#111520' }}
                  label="Форма"
                  {...a11yProps(0)}
               />
               <Tab
                  style={{ backgroundColor: '#111520' }}
                  label="Киргизилген маалыматар"
                  {...a11yProps(1)}
               />
            </Tabs>
         </AppBar>
         <SwipeableViews index={value}>{children}</SwipeableViews>
      </Box>
   )
}

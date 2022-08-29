import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import styled from '@emotion/styled'
import { VscExport } from 'react-icons/vsc'
import { CATEGORYES } from '../../utils/constants/categoryes'
import { Flex } from '../../styles/style-for-positions/style'

const SideBarNav = () => {
   return (
      <Menu>
         {CATEGORYES.map((navigation) => (
            <Accordion style={{ padding: '0' }} key={navigation.id}>
               <AccordionSummary
                  style={{ background: '#d7dce2' }}
                  id="panel1-header"
                  aria-controls="panel1-content"
                  expandIcon={<VscExport />}
               >
                  <h5>{navigation.title}</h5>
               </AccordionSummary>
               <AccordionDetails
                  style={{ background: '#101520', padding: '10px 2px 2px 2px' }}
               >
                  <Flex direction="column" width="100%">
                     {navigation.innerList.map((detail) => (
                        <Item key={detail.id} size="11px" width="100%">
                           {detail.title}
                        </Item>
                     ))}
                  </Flex>
               </AccordionDetails>
            </Accordion>
         ))}
      </Menu>
   )
}

const Menu = styled.div`
   width: 100%;
   background-color: #101520;
   max-height: 80vh;
   overflow-y: auto;
   ::-webkit-scrollbar {
      display: none;
   }
`
const Item = styled.div`
   width: 100%;
   padding: 0.5em;
   background: #24292f;
   border-radius: 5px;
   color: #a4a4a7;
   margin-bottom: 3px;
   cursor: pointer;
   :hover {
      background-color: #0d1013;
   }
`

export default SideBarNav

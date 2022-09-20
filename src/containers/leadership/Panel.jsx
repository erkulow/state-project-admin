import styled from '@emotion/styled'
import { Alert } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLeaderships } from '../../store/leadership-slice'
import { Flex } from '../../styles/style-for-positions/style'
import LeadershipList from './LeadershipList'

const Panel = () => {
   const dispatch = useDispatch()
   const { government, governmentApparatus, villageCouncil } = useSelector(
      (state) => state.leadership
   )
   useEffect(() => {
      dispatch(getLeaderships())
   }, [])

   return (
      <Container>
         <Flex width="100%" direction="column" gap="20px">
            <div>
               <SectionTitle>Окмот</SectionTitle>
               {(!!government.length &&
                  government.map((item) => (
                     <LeadershipList key={item.id} item={item} />
                  ))) || (
                  <Alert severity="info">
                     Айыл окмот боюнча маалымат табылган жок:(
                  </Alert>
               )}
            </div>
            <div>
               <SectionTitle>Окмот аппараты</SectionTitle>
               {(!!governmentApparatus.length &&
                  governmentApparatus.map((item) => (
                     <LeadershipList key={item.id} item={item} />
                  ))) || (
                  <Alert severity="info">
                     Айыл окмоттун аппараты боюнча маалымат табылган жок:(
                  </Alert>
               )}
            </div>
            <div>
               <SectionTitle>Айылдык кенеш</SectionTitle>
               {(!!villageCouncil.length &&
                  villageCouncil.map((item) => (
                     <LeadershipList key={item.id} item={item} />
                  ))) || (
                  <Alert severity="info">
                     Айылдык кенеш боюнча маалымат табылган жок:(
                  </Alert>
               )}
            </div>
         </Flex>
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   margin: 0 auto;
`

const SectionTitle = styled.h3`
   color: #766d6f;
`

export default Panel

import styled from '@emotion/styled'
import { Alert } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEditHandler } from '../../store/edit-slice'
import { getData } from '../../store/crud-slice'
import { Flex } from '../../styles/style-for-positions/style'
import LeadershipList from './LeadershipList'
import Loader from '../../components/UI/loader/Loader'

const Panel = () => {
   const dispatch = useDispatch()
   const { government, governmentApparatus, villageCouncil, isLoading } =
      useSelector((state) => state.crud)
   useEffect(() => {
      dispatch(getData('leadership'))
      dispatch(isEditHandler({ data: null, isEdit: false }))
   }, [])

   return (
      <Container>
         {isLoading && <Loader />}
         {!isLoading && (
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
         )}
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   margin: 0 auto;
   position: relative;
   min-height: 200px;
`

const SectionTitle = styled.h3`
   color: #766d6f;
`

export default Panel

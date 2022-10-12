import styled from '@emotion/styled'
import { Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEditHandler } from '../../store/edit-slice'
import { crudActions, getData } from '../../store/crud-slice'
import { Flex } from '../../styles/style-for-positions/style'
import NewsList from './NewsList'
import { getNewsState, getNewsWorld } from '../../store/news-slice'

const Panel = () => {
   const dispatch = useDispatch()
   const { newsState, newsWorld } = useSelector((state) => state.news)
   const [pagination, setPagination] = useState({ state: 1, world: 1 })

   useEffect(() => {
      dispatch(isEditHandler({ data: null, isEdit: false }))
      dispatch(crudActions.changeTextEditor(null))
   }, [])

   useEffect(() => {
      dispatch(getNewsState(pagination.state))
      dispatch(getNewsWorld(pagination.world))
   }, [pagination])

   return (
      <Container>
         <Flex width="100%" direction="column" gap="20px">
            <div>
               <SectionTitle>
                  Жаңылыктар жана кулактандыруулар (Мамлекет ичиндеги){' '}
               </SectionTitle>
               {(!!newsState.length &&
                  newsState.map((item) => (
                     <NewsList key={item.id} item={item} />
                  ))) || (
                  <Alert severity="info">
                     Жаңылыктар жана кулактандыруулар боюнча кенештер табылган
                     жок:(
                  </Alert>
               )}
               <br />
               <SectionTitle>
                  Жаңылыктар жана кулактандыруулар (Дуйно жузу боюнча)
               </SectionTitle>
               {(!!newsWorld.length &&
                  newsWorld.map((item) => (
                     <NewsList key={item.id} item={item} />
                  ))) || (
                  <Alert severity="info">
                     Жаңылыктар жана кулактандыруулар боюнча кенештер табылган
                     жок:(
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

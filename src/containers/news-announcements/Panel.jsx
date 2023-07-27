import styled from '@emotion/styled'
import { Alert } from '@mui/material'
import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEditHandler } from '../../store/edit-slice'
import { crudActions } from '../../store/crud-slice'
import { Flex } from '../../styles/style-for-positions/style'
import NewsList from './NewsList'
import {
   getCountOfNews,
   getNewsState,
   getNewsWorld,
} from '../../store/news-slice'
import Pagination from '../../components/UI/pagination/Pagination'
import {
   getDataFromSessionStorage,
   saveToSessionStorage,
} from '../../utils/helpers/general'
import Loader from '../../components/UI/loader/Loader'

const Panel = () => {
   const dispatch = useDispatch()
   const { newsState, newsWorld, countOfState, countOfWorld, isLoading } =
      useSelector((state) => state.news)

   const localData = useMemo(() => getDataFromSessionStorage('page')) || {}

   const [pagination, setPagination] = useState({
      state: localData.state || 1,
      world: localData.world || 1,
   })

   const paginationWorldHandler = (event, value) => {
      setPagination({ ...pagination, world: value })
   }

   const paginationStateHandler = (event, value) => {
      setPagination({ ...pagination, state: value })
   }

   useEffect(() => {
      dispatch(isEditHandler({ data: null, isEdit: false }))
      dispatch(crudActions.changeTextEditor(null))
   }, [])

   useEffect(() => {
      saveToSessionStorage('page', pagination)
      dispatch(getNewsState(pagination.state))
      dispatch(getNewsWorld(pagination.world))
      dispatch(getCountOfNews())
   }, [pagination])

   return (
      <Container>
         {isLoading && <Loader />}
         {!isLoading && (
            <Flex width="100%" direction="column" gap="20px">
               <div>
                  <SectionTitle>Мыйзамдар жана токтомдор</SectionTitle>
                  {(!!newsState.length &&
                     newsState.map((item) => (
                        <NewsList
                           category="newsState"
                           key={item.id}
                           item={item}
                        />
                     ))) || (
                     <Alert severity="info">
                        Мыйзамдар жана токтомдор боюнча маалымат табылган жок:(
                     </Alert>
                  )}
                  {countOfState > 1 && (
                     <Flex width="100%" justify="center">
                        <Pagination
                           onChange={paginationStateHandler}
                           count={countOfState}
                           page={pagination.state}
                        />
                     </Flex>
                  )}
                  <br />
                  <SectionTitle>Жаңылыктар жана кулактандыруулар</SectionTitle>
                  {(!!newsWorld.length &&
                     newsWorld.map((item) => (
                        <NewsList
                           category="newsWorld"
                           key={item.id}
                           item={item}
                        />
                     ))) || (
                     <Alert severity="info">
                        Жаңылыктар жана кулактандыруулар боюнча маалымат
                        табылган жок:(
                     </Alert>
                  )}
                  {countOfWorld > 1 && (
                     <Flex width="100%" justify="start">
                        <Pagination
                           onChange={paginationWorldHandler}
                           count={countOfWorld}
                           page={pagination.world}
                        />
                     </Flex>
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
   min-height: 200px;
`

const SectionTitle = styled.h3`
   color: #766d6f;
`

export default Panel

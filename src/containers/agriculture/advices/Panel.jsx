import styled from '@emotion/styled'
import { Alert } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEditHandler } from '../../../store/edit-slice'
import { crudActions, getData } from '../../../store/crud-slice'
import { Flex } from '../../../styles/style-for-positions/style'
import AdviceList from './AdviceList'
import Loader from '../../../components/UI/loader/Loader'

const Panel = () => {
   const dispatch = useDispatch()
   const { datas, isLoading } = useSelector((state) => state.crud)
   useEffect(() => {
      dispatch(getData('agroAdvice'))
      dispatch(isEditHandler({ data: null, isEdit: false }))
      dispatch(crudActions.changeTextEditor(null))
   }, [])
   return (
      <Container>
         {isLoading && <Loader />}
         {!isLoading && (
            <Flex width="100%" direction="column" gap="20px">
               <div>
                  <SectionTitle>Айыл-чарба боюнча кенештер</SectionTitle>
                  {(!!datas.length &&
                     datas.map((item) => (
                        <AdviceList key={item.id} item={item} />
                     ))) || (
                     <Alert severity="info">
                        Айыл-чарба боюнча кенештер табылган жок:(
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
   min-height: 200px;
`

const SectionTitle = styled.h3`
   color: #766d6f;
`

export default Panel

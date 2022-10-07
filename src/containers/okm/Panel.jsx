import styled from '@emotion/styled'
import { Alert } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEditHandler } from '../../store/edit-slice'
import { crudActions, getData } from '../../store/crud-slice'
import { Flex } from '../../styles/style-for-positions/style'
import CleanlinesList from './OKMList'

const Panel = () => {
   const dispatch = useDispatch()
   const { datas } = useSelector((state) => state.crud)
   useEffect(() => {
      dispatch(getData('OKM'))
      dispatch(isEditHandler({ data: null, isEdit: false }))
      dispatch(crudActions.changeTextEditor(null))
   }, [])
   return (
      <Container>
         <Flex width="100%" direction="column" gap="20px">
            <div>
               <SectionTitle>Озгочо кырдаалдар</SectionTitle>
               {(!!datas.length &&
                  datas.map((item) => (
                     <CleanlinesList key={item.id} item={item} />
                  ))) || (
                  <Alert severity="info">
                     Озгочо кырдаалдар боюнча кенештер табылган жок:(
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

import styled from '@emotion/styled'
import { Alert } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isEditHandler } from '../../../store/edit-slice'
import { crudActions, getData } from '../../../store/crud-slice'
import { Flex } from '../../../styles/style-for-positions/style'
import SeedsFarmList from './SeedsFarmList'
import Loader from '../../../components/UI/loader/Loader'

const Panel = () => {
   const dispatch = useDispatch()
   const { datas, isLoading } = useSelector((state) => state.crud)
   useEffect(() => {
      dispatch(getData('agroGrainGrowing'))
      dispatch(isEditHandler({ data: null, isEdit: false }))
      dispatch(crudActions.changeTextEditor(null))
   }, [])
   return (
      <Container>
         {isLoading && <Loader />}
         {!isLoading && (
            <Flex width="100%" direction="column" gap="20px">
               <div>
                  <SectionTitle>Урон-чарбасы </SectionTitle>
                  {(!!datas.length &&
                     datas.map((item) => (
                        <SeedsFarmList key={item.id} item={item} />
                     ))) || (
                     <Alert severity="info">
                        Урон-чарбасы боюнча маалымат табылган жок:(
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

import styled from '@emotion/styled'
import React, { useRef, useEffect } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { Flex } from '../../../styles/style-for-positions/style'
import { ButtonDelete, ButtonEdit, H2, Li } from '../../styles'

const DetailEvent = ({ data, setShowDeleteModal, editHandler }) => {
   const refText = useRef()

   useEffect(() => {
      refText.current.innerHTML = data.text
   }, [data])

   return (
      <div>
         <Flex gap="30px" align="start">
            <Flex width="100%" justify="center" direction="column" gap="30px">
               <List>
                  <H2>Айыл-чарба мыйзамы</H2>
                  <Li>
                     <span ref={refText} />
                  </Li>
               </List>
               <Flex width="100%" justify="end" gap="20px">
                  <ButtonEdit onClick={editHandler}>
                     <MdModeEditOutline /> Озгортуу
                  </ButtonEdit>
                  <ButtonDelete
                     onClick={(e) => {
                        e.stopPropagation()
                        setShowDeleteModal(true)
                     }}
                  >
                     <AiFillDelete /> Очуруп салуу
                  </ButtonDelete>
               </Flex>
            </Flex>
         </Flex>
      </div>
   )
}

const List = styled.ul`
   list-style: none;
   color: #89919e;
   max-height: 500px;
   overflow-y: auto;
`

export default DetailEvent

import React, { useRef, useEffect } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { Flex } from '../../../styles/style-for-positions/style'
import {
   ButtonDelete,
   ButtonEdit,
   H2,
   Img,
   Li,
   List,
   Wrapper,
   WrapperButton,
   WrapperImage,
} from '../../styles'

const DetailHeadOfCommittee = ({ data, setShowDeleteModal, editHandler }) => {
   const refText = useRef()

   useEffect(() => {
      refText.current.innerHTML = data?.info
   }, [data])
   return (
      <Flex width="100%" direction="column">
         <Flex gap="20px" align="start">
            <WrapperImage>
               <Img src={data.fileInformation.photo} alt="Сурот" />
            </WrapperImage>
            <Wrapper>
               <List>
                  <H2>Комитет жонундо маалымат</H2>
                  <Li>
                     <b>Комитеттин аталышы:</b> {data.managerName}
                  </Li>
                  <Li>
                     <b>Аты-жону:</b> {data.managerDirectorName}
                  </Li>
                  <Li>
                     <b>Дареги:</b> {data?.address}
                  </Li>
                  <Li>
                     <b>Байланыш телефону:</b> {data?.phone}
                  </Li>
                  <Li>
                     <b>Комитет жонундо жонундо маалымат:</b>
                     <span ref={refText} />
                  </Li>
               </List>
            </Wrapper>
         </Flex>
         <WrapperButton>
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
         </WrapperButton>
      </Flex>
   )
}

export default DetailHeadOfCommittee

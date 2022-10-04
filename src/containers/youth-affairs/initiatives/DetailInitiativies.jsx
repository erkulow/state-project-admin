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

const DetailInitiativies = ({ data, setShowDeleteModal, editHandler }) => {
   const refText = useRef()

   useEffect(() => {
      refText.current.innerHTML = data?.info
   }, [data])

   return (
      <div>
         <Flex gap="30px" align="start">
            <WrapperImage>
               <Img src={data.fileInformation.photo} alt="Сурот" />
            </WrapperImage>
            <Wrapper>
               <List>
                  <H2>Демилге жонундо маалымат</H2>
                  <Li>
                     <b>Демилгенин аталышы:</b> {data.initiativesName}
                  </Li>
                  <Li>
                     <b>Аты-жону:</b> {data.initiativesDirectorName}
                  </Li>
                  <Li>
                     <b>Дареги:</b> {data?.address}
                  </Li>
                  <Li>
                     <b>Байланыш телефону:</b> {data?.phone}
                  </Li>
                  <Li>
                     <b>Демилге жонундо маалымат:</b>
                     <span ref={refText} />
                  </Li>
               </List>
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
            </Wrapper>
         </Flex>
      </div>
   )
}

export default DetailInitiativies

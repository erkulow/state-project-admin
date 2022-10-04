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

const DetailKindergartens = ({ data, setShowDeleteModal, editHandler }) => {
   const refText = useRef()

   useEffect(() => {
      refText.current.innerHTML = data.text
   }, [data])
   return (
      <div>
         <Flex gap="30px" align="start">
            <WrapperImage>
               <Img src={data.fileInformation.photo} alt="Сурот" />
            </WrapperImage>
            <Wrapper>
               <List>
                  <H2>Бала-бакча жонундо маалымат</H2>
                  <Li>
                     <b>Бала-бакчанын аталышы:</b> {data.kindergartensName}
                  </Li>
                  <Li>
                     <b>Диретордун аты-жону:</b> {data.directorFullName}
                  </Li>
                  <Li>
                     <b>Бала бакчанын тили:</b> {data.language}
                  </Li>
                  <Li>
                     <b>Адрес:</b> {data.address}
                  </Li>
                  <Li>
                     <b>Электрондук почтасы:</b> {data.email}
                  </Li>
                  <Li>
                     <b>Байланыш телефону:</b> {data.phoneNumber}
                  </Li>
                  <Li>
                     <b>Бала-бакча жонундо маалымат:</b> <span ref={refText} />
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

export default DetailKindergartens

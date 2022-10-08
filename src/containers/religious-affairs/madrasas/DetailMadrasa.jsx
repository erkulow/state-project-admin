/* eslint-disable jsx-a11y/alt-text */
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

const DetailMadrasa = ({ data, setShowDeleteModal, editHandler }) => {
   return (
      <div>
         <Flex gap="30px" align="start">
            <WrapperImage>
               <Img src={data.fileInformation.photo} alt="Сурот" />
            </WrapperImage>
            <Wrapper>
               <List>
                  <H2>Медресе жонундо маалымат</H2>
                  <Li>
                     <b>Медресенин аталышы:</b> {data.schoolName}
                  </Li>
                  <Li>
                     <b>Директордун аты-жону:</b> {data.director}
                  </Li>
                  <Li>
                     <b>Туулган куну:</b> {data.directorBirthDay}
                  </Li>
                  <Li>
                     <b>Адрес:</b> {data.address}
                  </Li>
                  <Li>
                     <b>Байланыш телефону:</b> {data.phone}
                  </Li>
                  <Li>
                     <b>Электрондук почтасы:</b> {data.email}
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

export default DetailMadrasa

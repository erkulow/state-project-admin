/* eslint-disable jsx-a11y/alt-text */
import styled from '@emotion/styled'
import { Alert, Button } from '@mui/material'
import React, { useRef, useEffect } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import Title from '../../../components/UI/typography/Title'
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

const DetailMosques = ({ data, setShowDeleteModal, editHandler }) => {
   const refText = useRef()

   useEffect(() => {
      refText.current.innerHTML = data.positions
   }, [data])
   return (
      <div>
         <Flex gap="30px" align="start">
            <WrapperImage>
               <Img src={data.fileInformation.photo} alt="Сурот" />
            </WrapperImage>
            <Wrapper>
               <List>
                  <H2>Мечит жонундо маалымат</H2>
                  <Li>
                     <b>Мечиттин аталышы:</b> {data.mosqueName}
                  </Li>
                  <Li>
                     <b>Имамдын аты:</b> {data.imamName}
                  </Li>
                  <Li>
                     <b>Имамдын фамилиясы:</b> {data.imamLastName}
                  </Li>
                  <Li>
                     <b>Туулган куну:</b> {data.birthDay}
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
                  <Li>
                     <b>Мечит жонундо маалымат:</b> <span ref={refText} />
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

export default DetailMosques

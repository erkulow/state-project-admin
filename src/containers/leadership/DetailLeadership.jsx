/* eslint-disable jsx-a11y/alt-text */
import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import Title from '../../components/UI/typography/Title'
import { Flex } from '../../styles/style-for-positions/style'
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
} from '../styles'

const DetailLeadership = ({ data, setShowDeleteModal, editHandler }) => {
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
                  <H2>Кызматкер жонундо маалымат</H2>
                  <Li>
                     <b>Аты-жону:</b> {data.firstName} {data.lastName}{' '}
                     {data.patronymic}
                  </Li>
                  <Li>
                     <b>Позициясы:</b>
                     {data.positions}
                  </Li>
                  <Li>
                     <b>Туулган датасы:</b> {data.birthDay}
                  </Li>
                  <Li>
                     <b>Байланыш телефону:</b> {data.phoneNumber}
                  </Li>
                  <Li>
                     <b>Электрондук почтасы:</b> {data.email}
                  </Li>
                  <Li>
                     <b>Кызматкер жонундо маалымат:</b> <span ref={refText} />
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

export default DetailLeadership

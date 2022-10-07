/* eslint-disable jsx-a11y/alt-text */
import styled from '@emotion/styled'
import { Button } from '@mui/material'
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

const DetailNamaz = ({ data, setShowDeleteModal, editHandler }) => {
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
                  <H2>Намаз жонундо маалымат</H2>
                  <Li>
                     <b>Толук маалымат:</b> <span ref={refText} />
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
const TitlePosition = styled(Title)`
   width: 100%;
   color: #2c2e38;
   padding: 1em;
   box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
   background-color: rgba(255, 255, 255, 0.4);
   -webkit-backdrop-filter: blur(5px);
   backdrop-filter: blur(5px);
   text-align: center;
`

export default DetailNamaz

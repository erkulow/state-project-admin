/* eslint-disable jsx-a11y/alt-text */
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { useRef, useEffect } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import Title from '../../../components/UI/typography/Title'
import { Flex } from '../../../styles/style-for-positions/style'

const DetailHeadOfCommittee = ({ data, setShowDeleteModal, editHandler }) => {
   const refText = useRef()

   useEffect(() => {
      refText.current.innerHTML = data?.infoManager
   }, [data])
   return (
      <div>
         <Flex gap="30px" align="start">
            <Flex direction="column" align="center" width="50%" gap="10px">
               <Img src={data.fileInformation.photo} alt="Сурот" />
            </Flex>
            <Flex width="100%" justify="center" direction="column" gap="30px">
               <List>
                  <H2>Комитеттер жонундо маалымат</H2>
                  <Li>
                     <b>Аты-жону:</b> {data.commitetName}
                  </Li>
                  <Li>
                     <b>Дареги:</b> {data?.address}
                  </Li>
                  <Li>
                     <b>Байланыш телефону:</b> {data?.phoneNumber}
                  </Li>
                  <Li>
                     <b>Комитеттер жонундо жонундо маалымат:</b>
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
const ButtonEdit = styled(Button)`
   color: green;
   display: flex;
   align-items: center;
   gap: 4px;

   :hover {
      background-color: #27c36a25;
      border: none;
   }
`
const ButtonDelete = styled(Button)`
   color: tomato;
   display: flex;
   align-items: center;
   gap: 4px;
   :hover {
      background-color: #ff634729;
   }
`
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
const List = styled.ul`
   list-style: none;
   color: #89919e;
`
const Li = styled.li`
   width: 100%;
   padding: 1em;
   background-color: #0e1117;
   text-transform: uppercase;
   margin-bottom: 10px;
   box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
   border-radius: 5px;
   b {
      color: #94a0aa;
   }
   span {
      ul {
         margin-left: 25px;
      }
   }
`
const H2 = styled.h2`
   text-align: center;
   margin-bottom: 10px;
   width: 100%;
   padding: 1em;
   background-color: #21262c;
   text-transform: uppercase;
   margin-bottom: 10px;
   box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
   border-radius: 5px;
`
const Img = styled.img`
   width: 100%;
   border-radius: 5px;
   height: 100%;
`

export default DetailHeadOfCommittee

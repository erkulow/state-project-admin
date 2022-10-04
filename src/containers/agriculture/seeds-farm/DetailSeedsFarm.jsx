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
   WrapperButton,
   WrapperImage,
} from '../../styles'

const DetailEvent = ({ data, setShowDeleteModal, editHandler }) => {
   const refText = useRef()

   useEffect(() => {
      refText.current.innerHTML = data.text
   }, [data])

   return (
      <div>
         <Flex gap="20px" align="start">
            <WrapperImage>
               <Img src={data.fileInformation.photo} alt="Сурот" />
            </WrapperImage>
            <Flex width="100%" justify="center" direction="column" gap="30px">
               <List>
                  <H2>Урон-чарбасы жонундо маалымат</H2>
                  <Li>
                     <b>Урон-чарбасы жонундо маалымат:</b>{' '}
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
            </Flex>
         </Flex>
      </div>
   )
}

export default DetailEvent

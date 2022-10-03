import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import Title from '../../../components/UI/typography/Title'
import { Flex } from '../../../styles/style-for-positions/style'
import ModalDelete from '../../../components/UI/modals/modalDelete'
import { deleteData } from '../../../store/crud-slice'
import Modal from '../../../components/UI/modals/modal-container/Modal'
import { tabActions } from '../../../store/tab-slice'
import { isEditHandler } from '../../../store/edit-slice'
import DetailLaws from './DetailLaws'

const EventsList = ({ item }) => {
   const dispatch = useDispatch()
   const [showDeleteModal, setShowDeleteModal] = useState(false)
   const [showDetail, setShowDetail] = useState(false)
   const refText = useRef()

   const showDetailHandler = (e) => {
      e.stopPropagation()
      setShowDetail(true)
   }

   const editLeadershipHandler = (e) => {
      e.stopPropagation()
      dispatch(tabActions.tabChange(0))
      dispatch(isEditHandler({ isEdit: true, data: item }))
   }

   useEffect(() => {
      refText.current.innerHTML = item.text
   }, [item])

   return (
      <>
         <Modal
            isVisible={showDetail}
            onClose={() => setShowDetail(false)}
            width="1000px"
         >
            <DetailLaws
               editHandler={editLeadershipHandler}
               setShowDeleteModal={setShowDeleteModal}
               data={item}
            />
         </Modal>
         <Section onClick={showDetailHandler}>
            <Flex width="100%" align="center" justify="space-between">
               <Flex
                  style={{ overflow: 'hidden' }}
                  direction="column"
                  align="flex-start"
                  width="65%"
               >
                  <TitleAdvice ref={refText} size="13px" color="#7d97b8" />
               </Flex>
               <Flex gap="20px">
                  <ButtonEdit onClick={editLeadershipHandler}>
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
         </Section>
         <ModalDelete
            open={showDeleteModal}
            action={() =>
               dispatch(deleteData({ id: item.id, category: 'agroLaws' }))
            }
            setShowModal={setShowDeleteModal}
            title="Сиз чындап эле очуруп салууну каалайсызбы?"
         />
      </>
   )
}
const TitleAdvice = styled(Title)`
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   ul,
   ol {
      margin-left: 25px;
   }
`
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
const Section = styled.div`
   width: 100%;
   padding: 0.7rem;
   background-color: #21262b;
   margin: 10px 0;
   box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.3);
   cursor: pointer;
   :hover {
      background-color: #141c25;
   }
   :active {
      opacity: 0.5;
   }
`
const Image = styled.img`
   width: 100%;
   height: 100px;
   object-fit: cover;
   border-radius: 4px;
`

export default EventsList

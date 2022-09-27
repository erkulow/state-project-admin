import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import Text from '../../components/UI/typography/Text'
import Title from '../../components/UI/typography/Title'
import { Flex } from '../../styles/style-for-positions/style'
import ModalDelete from '../../components/UI/modals/modalDelete'
import { deleteData } from '../../store/crud-slice'
import Modal from '../../components/UI/modals/modal-container/Modal'
import DetailLeadership from './DetailLeadership'
import { tabActions } from '../../store/tab-slice'
import { isEditHandler } from '../../store/edit-slice'

const LeadershipList = ({ item }) => {
   const dispatch = useDispatch()
   const [showDeleteModal, setShowDeleteModal] = useState(false)
   const [showDetail, setShowDetail] = useState(false)

   const showDetailHandler = (e) => {
      e.stopPropagation()
      setShowDetail(true)
   }

   const editLeadershipHandler = (e) => {
      e.stopPropagation()
      dispatch(tabActions.tabChange(0))
      dispatch(isEditHandler({ isEdit: true, data: item }))
   }

   return (
      <>
         <Modal
            isVisible={showDetail}
            onClose={() => setShowDetail(false)}
            width="1000px"
         >
            <DetailLeadership
               editHandler={editLeadershipHandler}
               setShowDeleteModal={setShowDeleteModal}
               data={item}
            />
         </Modal>
         <Section onClick={showDetailHandler}>
            <ContainerFlex width="100%" gap="20px" align="center">
               <WrapperImage width="10%">
                  <Image src={item?.fileInformation?.photo} />
               </WrapperImage>
               <WrapperText
                  width="50%"
                  direction="column"
                  gap="10px"
                  align="flex-start"
               >
                  <TitleLead uppercase size="20px" color="#7d97b8">
                     {item?.firstName} {item?.lastName} {item?.patronymic}
                  </TitleLead>
                  <TextLead size="16px">{item?.positions}</TextLead>
               </WrapperText>
               <WrapperButtons width="40%" justify="center" gap="20px">
                  <ButtonEdit onClick={editLeadershipHandler}>
                     <MdModeEditOutline /> <span>Озгортуу</span>
                  </ButtonEdit>
                  <ButtonDelete
                     onClick={(e) => {
                        e.stopPropagation()
                        setShowDeleteModal(true)
                     }}
                  >
                     <AiFillDelete /> <span>Очуруп салуу</span>
                  </ButtonDelete>
               </WrapperButtons>
            </ContainerFlex>
         </Section>
         <ModalDelete
            open={showDeleteModal}
            action={() =>
               dispatch(deleteData({ id: item.id, category: 'leadership' }))
            }
            setShowModal={setShowDeleteModal}
            title="Сиз чындап эле очуруп салууну каалайсызбы?"
         />
      </>
   )
}
const ContainerFlex = styled(Flex)`
   @media screen and (max-width: 550px) {
      justify-content: space-between;
      gap: 5px;
   }
`
const WrapperText = styled(Flex)`
   @media screen and (max-width: 550px) {
      width: 60%;
   }
`
const WrapperImage = styled(Flex)`
   @media screen and (max-width: 550px) {
      width: 25%;
   }
`
const WrapperButtons = styled(Flex)`
   @media screen and (max-width: 550px) {
      flex-direction: column;
      width: 15%;
      span {
         display: none;
      }
   }
`
const TitleLead = styled(Title)`
   @media screen and (max-width: 550px) {
      font-size: 12px;
   }
`
const TextLead = styled(Text)`
   @media screen and (max-width: 550px) {
      font-size: 10px;
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
   @media screen and (max-width: 550px) {
      font-size: 10px;
      width: 20px !important;
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
   @media screen and (max-width: 550px) {
      font-size: 10px;
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

   @media screen and (max-width: 550px) {
      padding: 0.4rem;
   }
`
const Image = styled.img`
   width: 100%;
   height: 100px;
   object-fit: cover;
   border-radius: 4px;
`

export default LeadershipList

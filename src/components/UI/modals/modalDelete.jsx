import { Button } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Flex } from '../../../styles/style-for-positions/style'

const ModalDelete = ({ action, open, setShowModal, title }) => {
   return (
      open &&
      ReactDOM.createPortal(
         <ModalWrapper>
            <Modal>
               <Flex width="100%" justify="center" margin="10px 0">
                  <Message>{title}</Message>
               </Flex>
               <Flex align="center" justify="center" width="100%" gap="30px">
                  <Button onClick={() => setShowModal(false)}>
                     Артка кайтуу
                  </Button>
                  <ConfirmButton
                     onClick={() => {
                        action()
                        setShowModal(false)
                     }}
                  >
                     Очуруп салуу
                  </ConfirmButton>
               </Flex>
            </Modal>
            <Backdrop onClick={() => setShowModal(false)} />
         </ModalWrapper>,
         document.getElementById('modal-delete')
      )
   )
}
const ModalWrapper = styled.div`
   width: 100%;
   min-height: ${`${window.innerHeight}px`};
   position: fixed;
   top: 0;
   height: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 20;
   @media (max-width: 500px) {
      align-items: flex-end;
   }
`

const Message = styled.h3`
   color: #434f5e;
   text-align: center;
`
const ConfirmButton = styled(Button)`
   color: tomato !important;
   :hover {
      background-color: #ff634737 !important;
   }
`
const Modal = styled.div`
   padding: 1rem;
   background-color: #1c1e21;
   z-index: 1000;
   width: 400px;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   gap: 20px;
   box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.9);
   animation: alert 0.4s linear;
   @keyframes alert {
      0% {
         transform: scale(0.4);
      }
      10% {
         transform: scale(0.9);
      }
      30% {
         transform: scale(1.1);
      }
      100% {
         transform: scale(1);
      }
   }
`
const Backdrop = styled.div`
   background-color: rgba(0, 0, 0, 0.8);
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 900;
   width: 100%;
   height: 100%;
`

export default ModalDelete

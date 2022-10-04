import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import BackDrop from './Backdrop'

const ModalOverly = (props) => {
   return (
      <ModalStyle {...props}>
         {props.children}
         <Close onClick={props.onClose}>
            <IoMdClose fontSize={20} color="#50607f" />
         </Close>
      </ModalStyle>
   )
}
const Modal = (props) => {
   return (
      <>
         {props.isVisible &&
            ReactDOM.createPortal(
               <ModalOverly {...props} />,
               document.getElementById('modal-root')
            )}
         {props.isVisible && <BackDrop onClose={props.onClose} />}
      </>
   )
}

const ModalStyle = styled.div`
   max-width: ${({ width }) => width || ''};
   width: 100%;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border-radius: 2px;
   z-index: 11;
   background-color: #1c1e21;
   box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.9);
   animation: MODAL linear 0.2s;
   @keyframes MODAL {
      0% {
         opacity: 0;
         top: 40%;
      }
      100% {
         opacity: 1;
         top: 50%;
      }
   }
   z-index: 11;
   @media (max-width: 425px) {
      width: 95%;
   }
`
const Close = styled.button`
   padding: 0.2rem;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rgba(255, 255, 255, 0.854);
   border: none;
   position: absolute;
   top: 0;
   right: -35px;
   cursor: pointer;
   @media (max-width: 525px) {
      top: 10px;
      right: 10px;
   }
`
export default Modal

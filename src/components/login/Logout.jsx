import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import React from 'react'
import { useDispatch } from 'react-redux'
import { adminAction } from '../../store/admin-slice'
import { Flex } from '../../styles/style-for-positions/style'

const Logout = () => {
   const [isLogout, setIsLogout] = React.useState(false)
   const dispatch = useDispatch()

   const logoutHandler = () => dispatch(adminAction.logout())

   return (
      <>
         <LogoutButton onClick={() => setIsLogout(true)}>Чыгуу</LogoutButton>
         {isLogout && (
            <>
               <Modal>
                  <Flex width="100%" justify="center" margin="10px 0">
                     <Message>Are you sure ?</Message>
                  </Flex>
                  <Flex align="center" justify="center" width="100%" gap="30px">
                     <CancelButton onClick={() => setIsLogout(false)}>
                        Жокко чыгаруу
                     </CancelButton>
                     <Button onClick={logoutHandler}>Чыгуу</Button>
                  </Flex>
               </Modal>
               <Backdrop onClick={() => setIsLogout(false)} />
            </>
         )}
      </>
   )
}

const LogoutButton = styled(Button)``

const Message = styled.h3`
   color: #434f5e;
`
const CancelButton = styled(Button)`
   color: tomato;
   :hover {
      background-color: #ff634737;
   }
`
const Modal = styled.div`
   padding: 1rem;
   background-color: #1c1e21;
   position: fixed;
   top: 40%;
   left: 38%;
   z-index: 1000;
   width: 400px;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   gap: 20px;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
   animation: alert 0.4s linear;
   @keyframes alert {
      0% {
         opacity: 0;
         transform: scale(0.4);
      }
      10% {
         transform: scale(0.9);
      }
      30% {
         transform: scale(1.1);
      }
      50% {
         transform: scale(1.35);
      }
      100% {
         opacity: 1;
         transform: scale(1);
      }
   }
`
const Backdrop = styled.div`
   background-color: rgba(0, 0, 0, 0.4);
   -webkit-backdrop-filter: blur(5px);
   backdrop-filter: blur(5px);
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 900;
   width: 100%;
   height: 100%;
`

export default Logout

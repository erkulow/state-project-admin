import styled from 'styled-components'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Title from '../typography/Title'
import Text from '../typography/Text'

export const showSuccessMessage = (msg) => {
   toast.success(
      <div>
         <Title color="white">{msg.title}</Title>
         <Text color="#224a83">{msg.message}</Text>
      </div>
   )
}

export const showErrorMessage = (msg) =>
   toast.error(
      <div>
         <Title color="white">{msg.title}</Title>
         <Text color="#e24c43">{msg.message}</Text>
      </div>
   )
const Notification = () => {
   return <StyledToastContainer autoClose={2000} position="top-right" />
}

const StyledToastContainer = styled(ToastContainer)`
   width: 612px;
   color: white;
   @media (max-width: 430px) {
      max-width: 612px;
      width: 100%;
      padding: 1rem;
   }
   .Toastify__toast--success {
      background: #21262b;
      border-radius: 5px;
      box-sizing: 3px 3px 10px rgba(0, 0, 0, 0.3);
   }
   .Toastify__toast--error {
      background: #21262b;
      border-radius: 5px;
      box-sizing: 3px 3px 10px rgba(0, 0, 0, 0.3);
   }
   .Toastify__toast-icon {
      width: 0;
      height: 0;
   }
   .Toastify__progress-bar--success {
      background: #224a83;
   }
   svg {
      path {
         fill: white;
      }
   }
`

export default Notification

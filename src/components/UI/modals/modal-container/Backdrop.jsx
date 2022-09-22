import styled from 'styled-components'
import ReactDOM from 'react-dom'

const BackDrop = (props) => {
   return (
      <>
         {ReactDOM.createPortal(
            <BackDropStyle {...props} onClick={props.onClose} />,
            document.getElementById('backdrop-root')
         )}
      </>
   )
}

const BackDropStyle = styled.div`
   background-color: rgba(0, 0, 0, 0.5);
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 2;
   width: 100%;
   height: 100%;
   animation: BACKDROP ease-in 0.4s;
   @keyframes BACKDROP {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
   }
`
export default BackDrop

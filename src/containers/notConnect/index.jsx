import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Title } from '../../styles/typography/typography'

const NotConnect = () => {
   const navigate = useNavigate()

   function checkOnlineState() {
      if (navigator.onLine) {
         navigate(-1)
      }
   }
   window.addEventListener('online', checkOnlineState)

   useEffect(() => {
      checkOnlineState()
   }, [])

   return (
      <Container>
         <Title color="lightgray" size="34px">
            Интернет байланышы жок!
         </Title>
         <br />
         <br />
         <Title color="lightgray" size="22px">
            Төмөнкүлөрдү жасап көрүңүз:
         </Title>
         <ol>
            <li>Тармактык кабелдерди, модемди жана роутерди текшериңиз.</li>
            <li>Wi-Fi тармагына кайра туташыңыз.</li>
         </ol>
      </Container>
   )
}

const Container = styled.div`
   max-width: 1100px;
   margin: 0 auto;
   margin-top: 100px;
   ol {
      color: whitesmoke;
      gap: 10px;
      margin-left: 20px;
      margin-top: 20px;
      li {
         margin-bottom: 5px;
      }
   }
`

export default NotConnect

//     Интернет байланышы жок
// Төмөнкүлөрдү жасап көрүңүз:

// Тармактык кабелдерди, модемди жана роутерди текшериңиз.
// Wi-Fi тармагына кайра туташыңыз.
// ERR_INTERNET_DISCONNECTED

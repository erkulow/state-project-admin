import React from 'react'
import styled from 'styled-components'
import Back from '../../assets/images/nasa-1lfI7wkGWZ4-unsplash.jpg'

const LeftContentLogin = () => {
   return <Container />
}
const Container = styled.div`
   width: 50%;
   height: 100vh;
   background: url(${Back});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   @media screen and (max-width: 700px) {
      display: none;
   }
`

export default LeftContentLogin

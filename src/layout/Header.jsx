import styled from '@emotion/styled'
import React from 'react'
import logo from '../assets/images/2022-09-18_18.16.46-removebg-preview.png'
import Logout from '../components/login/Logout'

const Header = () => {
   return (
      <HeaderStyled>
         <ContainerHeader>
            <Logo logo={logo} />
            <Logout />
         </ContainerHeader>
      </HeaderStyled>
   )
}
const HeaderStyled = styled.header`
   width: 100%;
   background-color: #161b22;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
   position: fixed;
   top: 0;
   padding: 0.1rem 2rem;
`
const ContainerHeader = styled.div`
   max-width: 1240px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const Logo = styled.div`
   width: 70px;
   height: 70px;
   background: url(${({ logo }) => logo});
   background-position-y: 70%;
   background-position-x: 65%;
   background-size: 100px;
`

export default Header

import styled from '@emotion/styled'
import React from 'react'
import LeftContentLogin from '../../components/login/LeftContentLogin'
import LoginForm from '../../components/login/LoginForm'
import mady from '../../assets/images/2022-09-18_18.16.46-removebg-preview.png'

const Login = () => {
   return (
      <Container>
         <MadyLogo />
         <LeftContentLogin />
         <LoginForm />
      </Container>
   )
}
const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`
const MadyLogo = styled.div`
   width: 100px;
   height: 100px;
   background-image: url(${mady});
   background-size: cover;
   position: absolute;
   bottom: 10px;
   right: 10px;
`

export default Login

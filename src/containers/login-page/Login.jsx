import styled from '@emotion/styled'
import React from 'react'
import LeftContentLogin from '../../components/login/LeftContentLogin'
import LoginForm from '../../components/login/LoginForm'

const Login = () => {
   return (
      <Container>
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

export default Login

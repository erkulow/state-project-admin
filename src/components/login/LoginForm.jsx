import styled from '@emotion/styled'
import { Alert, Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginAsAdmin } from '../../store/admin-slice'
import { Flex } from '../../styles/style-for-positions/style'
import Input from '../UI/inputs/AuthInput'
import Spinner from '../UI/loader/Spinner'

const LoginForm = () => {
   const { isAuthorized, isLoading } = useSelector((state) => state.auth)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   useEffect(() => {
      if (isAuthorized) navigate('/')
   }, [isAuthorized, navigate])
   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm({ mode: 'onChange' })
   const input = {
      login: {
         ...register('email', {
            required: 'Сураныч, электрондук почтанызды жазыныз',
         }),
      },
      password: {
         ...register('password', {
            required: 'Сураныч, паролунузду жазыныз',
         }),
      },
   }
   const submitHandler = (data) => {
      dispatch(loginAsAdmin({ data, reset }))
   }

   const errorLoginMessage = (errors?.email && errors.email.message) || ''
   const errorPasswordMessage =
      (errors?.password && errors.password.message) || ''
   const errorMessage = errorLoginMessage || errorPasswordMessage
   return (
      <Container>
         <Title>Администратор катары жеке кабинетке кируу</Title>
         <Form onSubmit={handleSubmit(submitHandler)}>
            {errorMessage && (
               <Alert className="alert" severity="error">
                  {errorLoginMessage || errorPasswordMessage}
               </Alert>
            )}
            <Text style={{ textAlign: 'center' }}>авторизация</Text>
            <Flex
               width="100%"
               margin="10px 0 20px 0"
               justify="center"
               align="center"
            />

            <Flex direction="column" gap="16px">
               <Input
                  isValid={errors?.email && !isValid}
                  type="text"
                  placeholder="Email"
                  {...input.login}
               />
               <Input
                  isValid={errors?.password && !isValid}
                  type="Password"
                  placeholder="Пароль"
                  {...input.password}
               />
               <Button className="btn" disabled={isLoading} type="submit">
                  {isLoading ? <Spinner /> : 'Кируу'}
               </Button>
            </Flex>
         </Form>
      </Container>
   )
}

const Title = styled.h2`
   color: #bfcdd6;
   position: absolute;
   top: 100px;
   text-transform: uppercase;
`
const Text = styled.p`
   color: #155aa9;
   text-transform: uppercase;
`

const Container = styled.div`
   width: 50%;
   padding: 1rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #01031e;
   height: 100vh;
   @media screen and (max-width: 700px) {
      width: 100%;
   }
`
const Form = styled.form`
   max-width: 500px;
   width: 100%;
   position: relative;
   /* box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4); */
   /* background-color: #161b22;
   border: 1px solid #3e4450; */
   .alert {
      animation: alert 0.4s ease;
      width: 100%;
      background-color: #21262c;
      color: tomato;
      position: absolute;
      top: -110px;
   }
   @keyframes alert {
      0% {
         transform: scale(1);
      }
      10% {
         transform: scale(0.9);
      }
      30% {
         transform: scale(1.1);
      }
      50% {
         transform: scale(1.15);
      }
      100% {
         transform: scale(1);
      }
   }
   .btn {
      :disabled {
         cursor: not-allowed;
         background: gray;
      }
   }
`

export default LoginForm

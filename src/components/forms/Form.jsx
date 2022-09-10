import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '../../styles/style-for-positions/style'
import Input from '../UI/inputs/AuthInput'

const Form = ({ dataForm }) => {
   const [images, setImages] = useState({
      images: [],
      files: [],
   })
   console.log(dataForm)
   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
   } = useForm()

   const submitHandler = (data, e) => {
      e.stopPropagation()
      console.log(data)
   }

   return (
      <FormStyled
         styleForm={dataForm.style}
         onSubmit={handleSubmit(submitHandler)}
      >
         {dataForm.forms.map((item) => (
            <Flex
               key={item.label}
               style={item.styles}
               margin="0 0 10px 0"
               direction="column"
               gap="5px"
            >
               <Label>{item.label}</Label>
               <Input
                  options={item.options}
                  isValid={errors[item.requestName] && !isValid}
                  {...register(item.requestName, { ...item.required })}
                  type={item.type}
               />
               <p style={{ color: 'tomato' }}>
                  {errors[item.requestName]
                     ? errors[item.requestName].message
                     : ''}
               </p>
            </Flex>
         ))}
         <Button
            className="btn__submit"
            type="submit"
            style={{ gridArea: '4 / 1 / 4 / 5' }}
         >
            Отправить
         </Button>
      </FormStyled>
   )
}
const FormStyled = styled.form`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(4, 0.5fr);
   grid-template-rows: ${({ styleForm }) => styleForm || 'repeat(3, 1fr)'};
   gap: 20px 20px;
   grid-auto-flow: column;
   -ms-grid-column-align: start;
   .btn__submit {
      background: #2ea54f;
      color: white;
      :hover {
         background: #2ea54f;
      }
   }
`
const Label = styled.label`
   font-size: 16px;
   color: #7e7474;
`

export default Form

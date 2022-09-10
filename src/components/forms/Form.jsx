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
   const {
      register,
      formState: { errors, isValid, isSubmitted },
      handleSubmit,
   } = useForm()

   const submitHandler = (data, e) => {
      e.stopPropagation()
      console.log(data)
   }
   console.log(isSubmitted)

   return (
      <FormStyled
         isValid={isValid}
         isSubmitted={isSubmitted}
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
            style={{ gridArea: dataForm.styleBtn || '4 / 1 / 4 / 5' }}
         >
            {!isValid && isSubmitted
               ? 'Жазуу талааларын толтурунуз'
               : 'Жонотуу'}
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
      background: ${({ isValid, isSubmitted }) =>
         !isValid && isSubmitted ? 'tomato' : ' #245aac'};
      color: white;
      cursor: ${({ isValid, isSubmitted }) =>
         !isValid && isSubmitted ? 'not-allowed' : 'pointer'};
      :hover {
         background: ${({ isValid, isSubmitted }) =>
            !isValid && isSubmitted ? 'red' : '#1c4481'};
      }
   }
`
const Label = styled.label`
   font-size: 16px;
   color: #7e7474;
`

export default Form

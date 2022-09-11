import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Flex } from '../../styles/style-for-positions/style'
import Input from '../UI/inputs/AuthInput'

const Form = ({ dataForm }) => {
   const [selectedImages, setImages] = useState({
      images: [],
      files: [],
   })
   const {
      register,
      formState: { errors, isValid, isSubmitted },
      handleSubmit,
   } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })

   const submitHandler = (data, e) => {
      e.stopPropagation()
      console.log(data)
   }
   const onDrop = (file) => {
      const img = URL.createObjectURL(file[0])
      const { files, images } = selectedImages
      setImages({
         images: [...images, { img, id: files.length }],
         files: [...files, { file: file[0], id: files.length }],
      })
   }

   const deleteImgHandler = (id) => {
      const { files, images } = selectedImages
      setImages({
         ...selectedImages,
         images: images.filter((image) => image.id !== id),
         files: files.filter((file) => file.id !== id),
      })
   }

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
               {(item.type === 'file' && (
                  <Input
                     deleteHandler={deleteImgHandler}
                     onDrop={onDrop}
                     files={selectedImages?.images}
                     isValid={errors[item.requestName] && !isValid}
                     {...register(item.requestName, {
                        validate: () =>
                           selectedImages.images.length > 0
                              ? true
                              : 'Суротсуз жонотуу мумкун эмес',
                     })}
                     type={item.type}
                  />
               )) || (
                  <Input
                     options={item.options}
                     isValid={errors[item.requestName] && !isValid}
                     {...register(item.requestName, { ...item.required })}
                     type={item.type}
                  />
               )}

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
            Жонотуу
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
      background: #245aac;
      color: white;
      :hover {
         background: #1c4481;
      }
   }
`
const Label = styled.label`
   font-size: 16px;
   color: #7e7474;
`

export default Form

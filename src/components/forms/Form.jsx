/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { tabActions } from '../../store/tab-slice'
import { isEditHandler } from '../../store/edit-slice'
import { Flex } from '../../styles/style-for-positions/style'
import Input from '../UI/inputs/AuthInput'
import Spinner from '../UI/loader/Spinner'
import { crudActions } from '../../store/crud-slice'

const Form = ({ dataForm, onGetData, isLoading, onGetSetValue, isEdit }) => {
   const dispatch = useDispatch()
   const [selectedImages, setImages] = useState({
      images: [],
      files: [],
   })
   const {
      register,
      setValue,
      reset,
      formState: { errors, isValid, isSubmitted },
      handleSubmit,
   } = useForm()

   const resetForm = () => {
      dispatch(isEditHandler({ data: null, isEdit: false }))
      dispatch(crudActions.changeTextEditor(null))
      reset()
      setImages({ images: [], files: [] })
   }

   const submitHandler = (data, e) => {
      e.stopPropagation()
      delete data.galery
      onGetData(data, selectedImages.files, resetForm)
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
         images: images.filter((image) => image.id !== id),
         files: files.filter((file) => file.id !== id),
      })
   }

   useEffect(() => {
      if (isEdit) onGetSetValue({ setValue, setImages })
   }, [])

   return (
      <FormStyled onSubmit={handleSubmit(submitHandler)}>
         <FormControl
            isValid={isValid}
            isSubmitted={isSubmitted}
            styleForm={dataForm.style}
            direction="column"
         >
            {dataForm.forms.map((item) => (
               <Flex
                  key={item.label}
                  style={item.styles}
                  margin="0 0 10px 0"
                  direction="column"
                  gap="5px"
               >
                  <Label>
                     {item.label}{' '}
                     {item?.required?.required && (
                        <span style={{ color: 'tomato' }}>*</span>
                     )}
                  </Label>
                  {(item.type === 'file' && (
                     <Input
                        disabled={isLoading}
                        deleteHandler={deleteImgHandler}
                        onDrop={onDrop}
                        files={selectedImages?.images}
                        isValid={errors[item.requestName] && !isValid}
                        {...register(item.requestName, {
                           validate: () => {
                              if (item.required.required) {
                                 if (selectedImages.images.length > 0) {
                                    return true
                                 }
                                 return 'Суротсуз жонотуу мумкун эмес'
                              }
                              return true
                           },
                        })}
                        type={item.type}
                     />
                  )) || (
                     <Input
                        change={(html) => setValue(item.requestName, html)}
                        disabled={isLoading}
                        options={item.options}
                        isValid={errors[item.requestName] && !isValid}
                        {...register(item.requestName, { ...item.required })}
                        type={item.type}
                     />
                  )}
                  <p style={{ color: 'tomato', fontSize: '12px' }}>
                     {errors[item.requestName]
                        ? errors[item.requestName].message
                        : ''}
                  </p>
               </Flex>
            ))}
         </FormControl>
         <Flex direction="column" width="100%" gap="20px">
            <Button
               disabled={isLoading}
               className="btn__submit"
               type="submit"
               style={{ gridArea: dataForm.styleBtn || '4 / 1 / 4 / 5' }}
            >
               {isLoading ? <Spinner /> : isEdit ? 'Сактоо' : 'Жонотуу'}
            </Button>
            <Flex width="100%" gap="10px">
               {isEdit && (
                  <Button
                     onClick={() => dispatch(tabActions.tabChange(1))}
                     className="btn__submit"
                     style={{ background: 'brown' }}
                  >
                     Жокко чыгаруу
                  </Button>
               )}
               {isEdit && (
                  <Button onClick={resetForm} className="btn_submit btn">
                     Жаны кошуу
                  </Button>
               )}
            </Flex>
         </Flex>
      </FormStyled>
   )
}
const FormControl = styled(Flex)`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(4, 0.5fr);
   grid-template-rows: ${({ styleForm }) => styleForm || 'repeat(3, 1fr)'};
   gap: 20px 20px;
   grid-auto-flow: column;
   -ms-grid-column-align: start;
   @media (max-width: 950px) {
      display: flex;
      flex-direction: column;
   }
`
const FormStyled = styled.form`
   .btn__submit {
      width: 100%;
      background: #245aac;
      color: white;
      :hover {
         background: #1c4481;
      }
      :disabled,
      :disabled:hover {
         opacity: 0.5;
         cursor: not-allowed;
      }
   }
   .btn {
      width: 100%;
      background-color: #2ba44e;
      color: white;
      :hover {
         background-color: #268a42;
      }
   }
`
const Label = styled.label`
   font-size: 16px;
   color: #c7ccd2;
`

export default React.memo(Form)

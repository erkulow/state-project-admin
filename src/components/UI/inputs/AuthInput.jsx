import { forwardRef } from 'react'
import styled from 'styled-components'
import ImagePicker from '../image-picker/ImagePicker'

const Input = forwardRef((props, ref) => {
   if (props.type === 'textarea') {
      return (
         <TextArea ref={ref} type={null} {...props}>
            {props.chilren}
         </TextArea>
      )
   }
   if (props.type === 'file') {
      return <ImagePicker ref={ref} {...props} />
   }
   if (props.type === 'select') {
      return (
         <InputStyledSelect ref={ref} {...props}>
            {props.options.map((option) => (
               <option
                  value={option}
                  style={{ color: 'whitesmoke', background: '#0e1117' }}
                  key={option}
               >
                  {option}
               </option>
            ))}
         </InputStyledSelect>
      )
   }
   return (
      <InputStyled
         type={props.type || 'text'}
         autoComplete="off"
         ref={ref}
         {...props}
      />
   )
})

const TextArea = styled.textarea`
   width: ${({ width }) => width || '100%'};
   padding: 0.6em 1em;
   border-radius: 7px;
   letter-spacing: 0.6px;
   color: #ffffff;
   font-weight: bold;
   font-size: 16px;
   font-weight: 400;
   outline: none;
   transition: 0.2s;
   background-color: #21262c;
   resize: none;
   ::placeholder {
      color: #d0d2d3;
   }
   :active {
      border: 1px solid #828282;
   }
   :focus {
      border: none;
      box-shadow: ${({ isValid }) =>
         isValid
            ? '0 0 0 3px rgba(255, 8, 0, 0.5)'
            : '0 0 0 3px rgba(31, 88, 174, 0.6)'};
   }
`

const InputStyled = styled.input`
   width: ${({ width }) => width || '100%'};
   padding: 0.6em 1em;
   border-radius: 7px;
   letter-spacing: 0.6px;
   color: #ffffff;
   font-weight: bold;
   font-size: 16px;
   font-weight: 400;
   outline: none;
   transition: 0.2s;
   background-color: #21262c;
   ::placeholder {
      color: #d0d2d3;
   }
   :active {
      border: 1px solid #828282;
   }
   :focus {
      border: none;
      box-shadow: ${({ isValid }) =>
         isValid
            ? '0 0 0 3px rgba(255, 8, 0, 0.5)'
            : '0 0 0 3px rgba(31, 88, 174, 0.6)'};
   }
`
const InputStyledSelect = styled.select`
   width: ${({ width }) => width || '100%'};
   padding: 0.6em 0.7em;
   border-radius: 7px;
   letter-spacing: 0.6px;
   color: #ffffff;
   font-weight: bold;
   font-size: 16px;
   font-weight: 400;
   outline: none;
   transition: 0.2s;
   background-color: #21262c;
   ::placeholder {
      color: #d0d2d3;
   }
   :active {
      border: 1px solid #828282;
   }
   :focus {
      border: none;
      box-shadow: ${({ isValid }) =>
         isValid
            ? '0 0 0 3px rgba(255, 8, 0, 0.5)'
            : '0 0 0 3px rgba(31, 88, 174, 0.6)'};
   }
`
export default Input

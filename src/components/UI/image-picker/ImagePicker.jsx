import React from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { ReactComponent as IconImagePicker } from '../../../assets/icons/picker.svg'
import { Flex } from '../../../styles/style-for-positions/style'
import Text from '../typography/Text'
import Title from '../typography/Title'

const ImagePicker = React.forwardRef(
   ({ onDrop, files = [], deleteHandler, ...props }, ref) => {
      const { getRootProps, getInputProps } = useDropzone({
         onDrop,
         accept: 'image/*',
         multiple: false,
      })

      return (
         <Wrapper disabled={props.disabled} align="center" gap="16px">
            <Flex gap="5px" wrap="wrap">
               {files.map((img) => (
                  <GroupImg key={img.id}>
                     <Image src={img.img} />
                     <DeleteBtn onClick={() => deleteHandler(img.id)}>
                        DELETE
                     </DeleteBtn>
                  </GroupImg>
               ))}
               {files.length < 1 && (
                  <ImagePickerStyled {...getRootProps()}>
                     <input
                        accept="image/png, image/gif, image/jpeg"
                        {...props}
                        ref={ref}
                        {...getInputProps()}
                        type="file"
                     />
                     <IconImagePicker />
                  </ImagePickerStyled>
               )}
            </Flex>
            {files.length === 0 && (
               <Flex direction="column">
                  <Title color="#266BD3">
                     Стандартка туура келген суротторду жуктонуз
                  </Title>
                  <Text>Сиз 1 суротко чейин жүктөй аласыз</Text>
               </Flex>
            )}
         </Wrapper>
      )
   }
)
const Wrapper = styled(Flex)`
   opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
   pointer-events: ${({ disabled }) => (disabled ? 'none' : '')};
`
const DeleteBtn = styled.button`
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.2);
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   border: none;
   color: whitesmoke;
   cursor: pointer;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: none;
   @media (max-width: 425px) {
      font-size: 10px;
   }
`
const GroupImg = styled.div`
   width: 135px;
   height: 135px;
   position: relative;
   cursor: pointer;
   :hover ${DeleteBtn} {
      display: block;
   }
   @media (max-width: 425px) {
      width: 60px;
      height: 60px;
   }
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const ImagePickerStyled = styled.div`
   width: 135px;
   height: 135px;
   background: #f3f3f3;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   :hover {
      background: #f3f3f3;
      border: 1px solid #c4c4c4;
   }
   @media (max-width: 425px) {
      width: 60px;
      height: 60px;
   }
`
export default ImagePicker

import { MdModeEditOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import { useEffect, useRef } from 'react'
import { Flex } from '../../styles/style-for-positions/style'
import {
   ButtonDelete,
   ButtonEdit,
   H2,
   Img,
   Li,
   List,
   Wrapper,
   WrapperButton,
   WrapperImage,
} from '../styles'

const DetailCelebrities = ({ data, setShowDeleteModal, editHandler }) => {
   const refText = useRef()

   useEffect(() => {
      refText.current.innerHTML = data.info
   }, [data])
   return (
      <div>
         <Flex gap="30px" align="start">
            <WrapperImage>
               <Img src={data.fileInformation.photo} alt="Сурот" />
            </WrapperImage>
            <Wrapper>
               <List>
                  <H2>Атактуу жонундо</H2>
                  <Li>
                     <b>Аты жону:</b> {data.fullName}
                  </Li>
                  <Li>
                     <b>Туулган куну:</b> {data.birthday}
                  </Li>
                  <Li>
                     <b>Толук маалымат:</b> <span ref={refText} />
                  </Li>
               </List>
               <WrapperButton>
                  <ButtonEdit onClick={editHandler}>
                     <MdModeEditOutline /> Озгортуу
                  </ButtonEdit>
                  <ButtonDelete
                     onClick={(e) => {
                        e.stopPropagation()
                        setShowDeleteModal(true)
                     }}
                  >
                     <AiFillDelete /> Очуруп салуу
                  </ButtonDelete>
               </WrapperButton>
            </Wrapper>
         </Flex>
      </div>
   )
}

export default DetailCelebrities

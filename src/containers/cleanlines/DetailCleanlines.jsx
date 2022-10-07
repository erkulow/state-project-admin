import { MdModeEditOutline } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
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

const DetailCleanlines = ({ data, setShowDeleteModal, editHandler }) => {
   return (
      <div>
         <Flex gap="30px" align="start">
            <WrapperImage>
               <Img src={data.fileInformation.photo} alt="Сурот" />
            </WrapperImage>
            <Wrapper>
               <List>
                  <H2> Тазалык жонундо маалымат</H2>
                  <Li>
                     <b>Тазалык жумушчусунун аты-жону:</b> {data.fullName}
                  </Li>
                  <Li>
                     <b>Туулган куну:</b> {data.birthday}
                  </Li>
                  <Li>
                     <b>Байланыш телефону:</b> {data.phoneNumber}
                  </Li>
                  <Li>
                     <b>Электрондук почтасы:</b> {data.email}
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

export default DetailCleanlines

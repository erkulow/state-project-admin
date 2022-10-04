import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { Flex } from '../../styles/style-for-positions/style'

export const WrapperImage = styled(Flex)`
   min-width: 40%;
   display: flex;
   min-height: 500px;
   max-height: 500px;
   flex-direction: column;
`
export const WrapperButton = styled(Flex)`
   display: flex;
   width: 100%;
   justify-content: end;
   gap: 20px;
   position: absolute;
   bottom: 10px;
   right: 10px;
`
export const ButtonEdit = styled(Button)`
   color: green;
   display: flex;
   align-items: center;
   gap: 4px;

   :hover {
      background-color: #27c36a25;
      border: none;
   }
`
export const ButtonDelete = styled(Button)`
   color: tomato;
   display: flex;
   align-items: center;
   gap: 4px;
   :hover {
      background-color: #ff634729;
   }
`

export const List = styled.ul`
   list-style: none;
   color: #89919e;
   max-height: 450px;
   overflow-y: auto;
`
export const Li = styled.li`
   width: 100%;
   padding: 1em;
   margin-bottom: 10px;
   border-radius: 5px;
   b {
      color: #94a0aa;
   }
   span {
      ul {
         margin-left: 25px;
      }
   }
`
export const H2 = styled.h2`
   text-align: center;
   margin-bottom: 10px;
   width: 100%;
   padding: 1em;
   margin-bottom: 10px;
   border-radius: 5px;
`
export const Img = styled.img`
   width: 100%;
   border-radius: 5px;
   object-fit: cover;
   height: 500px;
`
export const Wrapper = styled.div`
   position: relative;
   width: 100%;
   height: 500px;
`

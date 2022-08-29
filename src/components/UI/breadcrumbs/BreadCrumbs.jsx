import { Breadcrumbs } from '@mui/material'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { Title } from '../../../styles/typography/typography'

const BreadCrumbs = ({ pathsArray }) => {
   const pathsHistory = pathsArray.slice(0, pathsArray.length)
   const crumbs = pathsHistory.map((crumb, index) => {
      const isLast = index === pathsArray.length - 1
      return isLast ? (
         <LastPathStyle color="black" key={crumb.path}>
            {crumb.name}
         </LastPathStyle>
      ) : (
         <LinkStyleControl to={crumb.path} key={crumb.path}>
            {index === 0 && (
               <AiFillHome
                  color="#617a99"
                  style={{ margin: '0 0 3px 0' }}
                  fontSize={16}
               />
            )}
            {index !== 0 && crumb.name}
         </LinkStyleControl>
      )
   })
   return (
      <StyledCrumbs aria-label="breadcrumbs" separator="/">
         {crumbs}
      </StyledCrumbs>
   )
}
const StyledCrumbs = styled(Breadcrumbs)`
   display: flex;
   align-items: center;
   text-align: center;
   font-size: 14px;
   color: white;
`
const LinkStyleControl = styled(Link)`
   letter-spacing: 0.02em;
   font-size: 13px;
   color: #a4a4a4;
   text-decoration: none;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3px;
   font-weight: 200;
   :hover {
      color: gray;
   }
`
const LastPathStyle = styled(Title)`
   text-transform: lowercase;
   letter-spacing: 0.02em;
   font-size: 13px;
   color: gray;
   font-weight: 200;
   ::first-letter {
      text-transform: uppercase;
   }
`
export default BreadCrumbs

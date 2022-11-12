import React from 'react'
import styled from 'styled-components'
import { BiLoaderCircle } from 'react-icons/bi'

const Spinner = (props) => {
   return <StyledLoading fontSize={28} {...props} />
}
const StyledLoading = styled(BiLoaderCircle)`
   & path {
      fill: ${({ dark }) => (dark ? 'black' : 'white')};
   }
   animation: LOADING linear 1s infinite;
   @keyframes LOADING {
      from {
         transform: rotate(0deg);
      }
      to {
         transform: rotate(360deg);
      }
   }
`
export default Spinner

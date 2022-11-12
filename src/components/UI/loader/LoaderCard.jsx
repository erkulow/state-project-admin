/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../../../styles/style-for-positions/style'

const LoaderCard = () => {
   return (
      <FlexCard width="100%">
         {Array.from({ length: 4 }).map(() => (
            <P />
         ))}
      </FlexCard>
   )
}
const FlexCard = styled(Flex)`
   max-width: 1200px;
   margin: 0 auto;
   flex-wrap: wrap;
   gap: 18px;
`

const P = styled.p`
   position: relative;
   background-color: #f0f0f0;
   gap: 20px;
   width: 100%;
   height: 300px;
   box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
   border-radius: 30px;
`

export default LoaderCard

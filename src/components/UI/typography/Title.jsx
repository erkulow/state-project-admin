import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Title = forwardRef((props, ref) => {
   return (
      <TitleStyled ref={ref} {...props}>
         {props.children}
      </TitleStyled>
   )
})
const TitleStyled = styled.h4`
   font-family: 'Inter';
   font-weight: ${({ weight }) => weight || '500'};
   font-size: ${({ size }) => size || '16px'};
   line-height: 24px;
   color: ${({ color }) => color || '#000000s'};
   text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`
export default Title

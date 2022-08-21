import styled from 'styled-components'

export const Title = styled.h3`
   color: ${({ color }) => color || '#212529'};
   font-size: ${({ size }) => size || '20px'};
   letter-spacing: 0.5px;
   font-weight: ${({ weight }) => weight || '400'};
`
export const Text = styled.p`
   color: ${({ color }) => color || '#383b3e'};
   font-size: ${({ size }) => size || '14px'};
   letter-spacing: 0.5px;
   font-weight: ${({ weight }) => weight || '400'};
`

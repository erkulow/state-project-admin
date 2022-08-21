import styled from 'styled-components'

export const Grid = styled.div`
   width: ${(props) => props.width || ''};
   display: grid;
   grid-template-columns: ${(props) => props.columns || '0fr'};
   align-items: ${(props) => props.align || 'stretch'};
   justify-content: ${(props) => props.justify || 'start'};
   grid-template-rows: ${(props) => props.rows || '0fr'};
   gap: ${(props) => props.gap || '0px'};
   margin: ${({ margin }) => margin || '0'};
`
export const Flex = styled.div`
   width: ${(props) => props.width || ''};
   display: flex;
   flex-direction: ${(props) => props.direction || 'row'};
   align-items: ${(props) => props.align || 'stretch'};
   justify-content: ${(props) => props.justify || 'stretch'};
   flex-wrap: ${(props) => props.wrap || 'nowrap'};
   gap: ${(props) => props.gap || '0px'};
   margin: ${({ margin }) => margin || '0'};
   height: ${({ height }) => height || ''};
   max-width: ${({ maxWidth }) => maxWidth || ''};
   @media (max-width: 800px) {
      flex-direction: ${(props) => props.mobileDirection || 'row'};
      justify-content: ${(props) => props.mobileJustify || 'start'};
      align-items: ${(props) => props.mobileAlign || 'stretch'};
   }
`
export const Centered = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`

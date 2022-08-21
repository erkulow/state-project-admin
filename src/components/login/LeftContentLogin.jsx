import React from 'react'
import styled from 'styled-components'
import Back from '../../assets/images/846EB5D0-97A1-4D1C-8D6E-533A15C52203_1_105_c.jpeg'

const LeftContentLogin = () => {
	return <Container></Container>
}
const Container = styled.div`
	width: 50%;
	height: 100vh;
	background: url(${Back});
	background-position: center;
	background-size: cover;
	background-attachment: fixed;
	@media screen and (max-width: 700px) {
		display: none;
	}
`

export default LeftContentLogin

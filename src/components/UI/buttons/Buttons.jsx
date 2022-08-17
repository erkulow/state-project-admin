import React from 'react'
import styled from '@emotion/styled'

const AuthButton = (props) => {
	return <StyledButton {...props}>{props.children}</StyledButton>
}
const StyledButton = styled.button`
	background: #3a10e5;
	box-shadow: 0px 1px 2px rgba(58, 16, 229, 0.2),
		0px 1px 2px rgba(58, 16, 229, 0.2);
	border-radius: 8px;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 17px 0;
	margin-top: 12px;
	font-family: 'DINNextRoundedLTPro-Bold';
	font-size: 16px;
	line-height: 19px;
	letter-spacing: 0.02em;
	color: #ffffff;
	border: none;
	outline: none;
	margin-bottom: 30px;
	cursor: pointer;
	:hover {
		opacity: 0.9;
	}
	:active {
		background-color: #2800cd;
	}
`
export default AuthButton

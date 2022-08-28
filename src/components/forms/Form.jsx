import styled from '@emotion/styled'
import React from 'react'
import { Flex } from '../../styles/style-for-positions/style'
import Input from '../UI/inputs/AuthInput'

const Form = ({ dataForm = [] }) => {
	return (
		<FormStyled>
			{dataForm.map((item) => (
				<Flex
					style={item.styles}
					margin='0 0 10px 0'
					direction='column'
					gap='5px'
				>
					<Label>{item.label}</Label>
					<Input type='text' />
				</Flex>
			))}
		</FormStyled>
	)
}
const FormStyled = styled.form`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 0.5fr);
	grid-template-rows: repeat(4, 1.5fr);
	gap: 20px 20px;
	grid-auto-flow: column;
	-ms-grid-column-align: start;
`
const Label = styled.label`
	font-size: 16px;
	color: #7e7474;
`

export default Form

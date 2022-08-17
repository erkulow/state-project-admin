import React, { forwardRef } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const AuthInput = forwardRef((props, ref) => {
	return (
		<StyledBox>
			{props.error ? (
				<ErrorTextField {...props} fullWidth ref={ref} />
			) : (
				<StyledTextField {...props} fullWidth ref={ref} />
			)}
		</StyledBox>
	)
})
const StyledBox = styled(Box)({
	width: 500,
	maxWidth: '100%',
	margin: '12px 0',
})

const StyledTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: '#3A10E5',
	},

	'& .MuiInput-underline:after': {
		borderBottomColor: '#3A10E5',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderRadius: '8px',
		},
		'&:hover fieldset': {
			borderColor: '#C4C4C4',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#3A10E5',
		},
	},
})
const ErrorTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: 'red',
	},

	'& .MuiInput-underline:after': {
		borderBottomColor: 'red',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderRadius: '8px',
		},
		'&:hover fieldset': {
			borderColor: 'red',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'red',
		},
	},
})

export default AuthInput

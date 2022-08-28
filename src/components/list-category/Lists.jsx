import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { CATEGORYES } from '../../utils/constants/categoryes'
import { AiOutlineCaretRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Lists = () => {
	const navigate = useNavigate()
	const [toggle, setToggle] = useState(false)
	const [listId, setlistId] = useState(null)
	const isVisibleInner = (id) => listId === id && toggle

	const toggleInnerMenu = (id) => {
		setToggle(!toggle)
		setlistId(id)
	}

	return (
		<Container>
			{CATEGORYES.map((el) => (
				<Fragment key={el.id}>
					<List onClick={toggleInnerMenu.bind(null, el.id)}>
						<span>
							{el.icon} {el.title}
						</span>{' '}
						<Icon
							isvisibleinner={isVisibleInner(el.id) || undefined}
							fontSize={20}
						/>
					</List>
					{el.innerList.map((item) => (
						<InnerList
							key={item.id}
							onClick={() =>
								navigate(`${item.path}`) || undefined
							}
							isvisibleinner={isVisibleInner(el.id)}
						>
							{item.title}
						</InnerList>
					))}
				</Fragment>
			))}
		</Container>
	)
}
const Icon = styled(AiOutlineCaretRight)`
	transform: ${({ isvisibleinner }) =>
		isvisibleinner ? 'rotate(90deg)' : 'rotate(0deg)'};
`
const InnerList = styled.div`
	width: 100%;
	padding: ${({ isvisibleinner }) => (isvisibleinner ? '1rem' : '0rem')};
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
	height: ${({ isvisibleinner }) => (isvisibleinner ? 'fit-content' : '0px')};
	color: ${({ isvisibleinner }) =>
		isvisibleinner ? '#7d97b8' : 'transparent'};
	background-color: #0e1117;
	margin-bottom: ${({ isvisibleinner }) => (isvisibleinner ? '3px' : '0px')};
	pointer-events: ${({ isvisibleinner }) => (isvisibleinner ? '' : 'none')};
	cursor: pointer;
	:hover {
		background-color: #26292c;
	}
	:active {
		opacity: 0.5;
	}
`
const Container = styled.div`
	max-width: 1000px;
	width: 100%;
	padding: 1rem;
	margin: 0 auto;
	margin-top: 50px;
	background-color: #161b22;
`
const List = styled.div`
	width: 100%;
	padding: 1rem;
	background-color: #21262c;
	color: #7d97b8;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	margin-bottom: 6px;
	cursor: pointer;
	:hover {
		background-color: #2e343b;
	}
	:active {
		opacity: 0.5;
	}
`

export default Lists

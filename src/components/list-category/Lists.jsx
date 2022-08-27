import React, { useState } from 'react'
import styled from 'styled-components'
import { CATEGORYES } from '../../utils/constants/categoryes'
import { AiOutlineCaretRight } from 'react-icons/ai'

const Lists = () => {
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
				<>
					<List
						key={el.id}
						onClick={toggleInnerMenu.bind(null, el.id)}
					>
						<span>
							{el.icon} {el.title}
						</span>{' '}
						<Icon
							isVisibleInner={isVisibleInner(el.id)}
							fontSize={20}
						/>
					</List>
					{el.innerList.map((item) => (
						<InnerList
							key={item.id}
							isVisibleInner={isVisibleInner(el.id)}
						>
							{item.title}
						</InnerList>
					))}
				</>
			))}
		</Container>
	)
}
const Icon = styled(AiOutlineCaretRight)`
	transform: ${({ isVisibleInner }) =>
		isVisibleInner ? 'rotate(90deg)' : 'rotate(0deg)'};
`
const InnerList = styled.div`
	width: 100%;
	padding: ${({ isVisibleInner }) => (isVisibleInner ? '1rem' : '0rem')};
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
	height: ${({ isVisibleInner }) => (isVisibleInner ? 'fit-content' : '0px')};
	color: ${({ isVisibleInner }) =>
		isVisibleInner ? '#7d97b8' : 'transparent'};
	background-color: #0e1117;
	margin-bottom: ${({ isVisibleInner }) => (isVisibleInner ? '3px' : '0px')};
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

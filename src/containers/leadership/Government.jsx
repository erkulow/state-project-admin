import React from 'react'
import Form from '../../components/forms/Form'
import TemplateLeaderShipPages from '../../components/temaplate-leadership-pages'
import { FORM_LEADERSHIP } from '../../utils/constants/form'

const navigation = [
	{
		id: 1,
		title: 'Beyabrs',
		nav: 'Beybars',
	},
	{
		id: 2,
		title: 'Beyabrs',
		nav: 'Beybars',
	},
	{
		id: 3,
		title: 'Beyabrs',
		nav: 'Beybars',
	},
]

const VillageCouncil = () => {
	const pathsArray = [
		{
			path: '/',
			name: 'Уй',
		},
		{
			path: '/jetekchilik/aiyldyk-kenesh',
			name: 'Айылдык кенеш',
		},
	]
	return (
		<div>
			<TemplateLeaderShipPages
				headerTitle='МАДЫ АЙЫЛ ОКМОТУ'
				navigation={navigation}
				navigationTitle='МАДЫ АЙЫЛ ОКМОТУ'
				breadCrumbsPaths={pathsArray}
			>
				<Form dataForm={FORM_LEADERSHIP} />
			</TemplateLeaderShipPages>
		</div>
	)
}

export default VillageCouncil

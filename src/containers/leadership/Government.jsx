import React from 'react'
import Form from '../../components/forms/Form'
import TemplateLeaderShipPages from '../../components/temaplate-leadership-pages'
import { FORM_LEADERSHIP } from '../../utils/constants/form'
import { ROUTES } from '../../utils/constants/routes'

const {leadership} = ROUTES

const navigation = [
	{
		id: 1,
		title: 'Окмот',
		nav: leadership.government.path,
	},
	{
		id: 2,
		title: 'Аппарат',
		nav: leadership.government_apparatus.path,
	},
	{
		id: 3,
		title: 'Айылдык кенеш',
		nav: leadership.villageCouncil.path,
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
			name: 'Окмот',
		},
	]
	return (
		<div>
			<TemplateLeaderShipPages
				headerTitle='МАДЫ АЙЫЛ ОКМОТУ'
				navigation={navigation}
				navigationTitle='ЖЕТЕКЧИЛИК'
				breadCrumbsPaths={pathsArray}
			>
				<Form dataForm={FORM_LEADERSHIP} />
			</TemplateLeaderShipPages>
		</div>
	)
}

export default VillageCouncil

import React from 'react'
import TemplateLeaderShipPages from '../../components/temaplate-leadership-pages'

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
				<p style={{ color: '#7d97b8' }}>
					Кыргыз Республикасынын, Кыргыз Республикасынын Министрлер
					Кабинетинин, Кыргыз Республикасынын Юстиция министрлигине
					караштуу Соттук өкүлчүлүк борборунун жана Кыргыз
					Республикасынын башка мамлекеттик органдарынын
					кызыкчылыктарын арбитраждык соттордо, эл аралык соттордо, эл
					аралык арбитраждык соттордо жана башка адистештирилген
					соттордо Кыргыз Республикасына, Кыргыз Республикасынын
					Министрлер Кабинетине, Кыргыз Республикасынын Юстиция
					министрлигине караштуу Соттук өкүлчүлүк борборуна жана
					Кыргыз Республикасынын башка мамлекеттик органдарына каршы
					жана алардын атынан коюлган доолор боюнча юридика.
				</p>
			</TemplateLeaderShipPages>
		</div>
	)
}

export default VillageCouncil

export const ROUTES = {
	login: {
		path: '/login',
		label: 'Login',
	},
	admin: {
		path: '/admin',
		label: 'Admin',
	},
	categoryes: {
		path: '/:categoryId',
		label: 'Categoryes',
	},
	leadership: {
		government: {
			path: '/:categoryesId/:government',
			label: 'Government',
		},
		government: {
			path: '/:categoryesId/:government-apparatus',
			label: 'Governemnt-apparatus',
		},
		government: {
			path: '/:categoryesId/:village-council',
			label: 'Village-council',
		},
	},
}

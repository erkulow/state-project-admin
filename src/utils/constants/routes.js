export const ROUTES = {
   login: {
      path: '/login',
      label: 'Login',
   },
   admin: {
      path: '/admin',
      label: 'Admin',
   },
   leadership: {
      government: {
         path: '/admin/jetekchilik/okmot',
         label: 'Government',
      },
      government_apparatus: {
         path: '/admin/leadership/okmot-apparaty',
         label: 'Governemnt-apparatus',
      },
      villageCouncil: {
         path: '/admin/leadership/aiyldyk-kenesh',
         label: 'Village-council',
      },
   },
   education: {
      schools: {
         path: '/admin/bilim-beruu/mektepter',
         label: 'Schools',
      },
      drivingSchool: {
         path: 'admin/bilim-beruu/avto-mektepter',
         label: 'Driving-schools',
      },
      iyrymder: {
         path: 'admin/bilim-beruu/iyrymder',
         label: '',
      },
      olympiads: {
         path: 'admin/bilim-beruu/olimpiadalar',
         label: 'Olympiads',
      },
      kindergartens: {
         path: 'admin/bilim-beruu/bala-bakchalar',
         label: 'Kindergartens',
      },
      аctivities: {
         path: 'admin/bilim-beruu/ish-charalar',
         label: 'Activities',
      },
      GRT: {
         path: 'admin/bilim-beruu/ish-charalar',
         label: 'GeneralRepublicanTesting',
      },
   },
}

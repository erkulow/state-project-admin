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
         path: '/admin/jetekchilik/kyzmatkerler',
         label: 'Government',
      },
   },
   education: {
      schools: {
         path: '/admin/bilim-beruu/mektepter',
         label: 'Schools',
      },
      drivingSchool: {
         path: '/admin/bilim-beruu/avto-mektepter',
         label: 'Driving-schools',
      },
      iyrymder: {
         path: '/admin/bilim-beruu/iyrymder',
         label: '',
      },
      olympiads: {
         path: '/admin/bilim-beruu/olimpiadalar',
         label: 'Olympiads',
      },
      kindergartens: {
         path: '/admin/bilim-beruu/bala-bakchalar',
         label: 'Kindergartens',
      },
      аctivities: {
         path: '/admin/bilim-beruu/ish-charalar',
         label: 'Activities',
      },
      GRT: {
         path: '/admin/bilim-beruu/ORT',
         label: 'GeneralRepublicanTesting',
      },
   },
   healthCare: {
      hospitals: {
         path: '/admin/salamattykty-saktoo/oorukanalar',
         label: 'Hospitals',
      },
      paramedicPoint: {
         path: '/admin/salamattykty-saktoo/PHAP',
         label: 'Paramedic Point',
      },
      OMS: {
         path: '/admin/salamattykty-saktoo/OMS',
         label: 'OMS',
      },
      doctorAdvice: {
         path: '/admin/salamattykty-saktoo/darygerdin-keneshi',
         label: 'Doctor Advice',
      },
   },
   religiousAffairs: {
      mosques: {
         path: '/admin/din-ishteri/mechitter',
         label: 'Mosques',
      },
      madrasas: {
         path: '/admin/din-ishteri/medreseler',
         label: 'Madrasa',
      },
      pilgrimage: {
         path: '/admin/din-ishteri/azhylyk',
         label: 'Pilgrimage',
      },
      ait: {
         path: '/admin/din-ishteri/ait',
         label: 'Ait',
      },
      ramadan: {
         path: '/admin/din-ishteri/ramazan',
         label: 'Ramadan',
      },
      namaz: {
         path: '/admin/din-ishteri/namaz',
         label: 'Namaz',
      },
      morality: {
         path: '/admin/din-ishteri/adep-ahlak',
         label: 'Morality',
      },
      religiousActivities: {
         path: '/admin/din-ishteri/din-ishteri',
         label: 'Religious Activities',
      },
   },
}

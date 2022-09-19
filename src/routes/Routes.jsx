/* eslint-disable prettier/prettier */
import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import TemplateLeaderShipPages from '../components/temaplate-leadership-pages'
import Admin from '../containers/admin'
import Circles from '../containers/education/circles'
import Events from '../containers/education/events'
import Olympiads from '../containers/education/olympiads'
import Layout from '../layout'
import { ROUTES } from '../utils/constants/routes'
import ProtectedRoute from './ProtectedRoute'

const Login = React.lazy(() => import('../containers/login-page/Login'))
const Employees = React.lazy(() => import('../containers/leadership'))
const DrivingSchools = React.lazy(() =>
   import('../containers/education/driving-schools')
)
const Schools = React.lazy(() => import('../containers/education/schools'))
const Kingergartens = React.lazy(() =>
   import('../containers/education/kingergartens')
)
const Hospitals = React.lazy(() => import('../containers/healthcare/hospitals'))
const FAPs = React.lazy(() => import('../containers/healthcare/FAPs'))
const OMS = React.lazy(() => import('../containers/healthcare/OMS'))
const DoctorsAdvice = React.lazy(() =>
   import('../containers/healthcare/doctors-advice')
)
const Mosques = React.lazy(() =>
   import('../containers/religious-affairs/mosques')
)
const Madrasa = React.lazy(() =>
   import('../containers/religious-affairs/madrasas')
)
const Pilgrimage = React.lazy(() =>
   import('../containers/religious-affairs/pilgrimage')
)
const Ait = React.lazy(() => import('../containers/religious-affairs/ait'))
const Morality = React.lazy(() =>
   import('../containers/religious-affairs/morality')
)
const Namaz = React.lazy(() => import('../containers/religious-affairs/namaz'))
const Ramadan = React.lazy(() =>
   import('../containers/religious-affairs/ramadan')
)
const ReligiousActivities = React.lazy(() =>
   import('../containers/religious-affairs/religious-activities')
)

const ActiveYouth = React.lazy(() =>
   import('../containers/youth-affairs/active-youth')
)
const HeadOfCommittee = React.lazy(() =>
   import('../containers/youth-affairs/head-of-committee')
)
const Initiatives = React.lazy(() =>
   import('../containers/youth-affairs/initiatives')
)
const OffersForYouth = React.lazy(() =>
   import('../containers/youth-affairs/offers-for-youth')
)
const SportActivities = React.lazy(() =>
   import('../containers/youth-affairs/sport-activities')
)

const AnimalUsbandry = React.lazy(() =>
   import('../containers/agriculture/animal-usbandry')
)
const SeedsFarm = React.lazy(() =>
   import('../containers/agriculture/seeds-farm')
)
const PastureCommitee = React.lazy(() =>
   import('../containers/agriculture/pasture-committee')
)
const AgroLaws = React.lazy(() => import('../containers/agriculture/laws'))
const AgroActivities = React.lazy(() =>
   import('../containers/agriculture/agro-activities')
)
const AgroAdvices = React.lazy(() =>
   import('../containers/agriculture/advices')
)

const CulturalHouses = React.lazy(() =>
   import('../containers/culture/cultural-houses')
)
const Museums = React.lazy(() => import('../containers/culture/museums'))
const CulturalCompetitions = React.lazy(() =>
   import('../containers/culture/cultural-competitions')
)
const CulturalWorkers = React.lazy(() =>
   import('../containers/culture/cultural-workers')
)
const CulturalActivities = React.lazy(() =>
   import('../containers/culture/cultural-activities')
)
const OKM = React.lazy(()=>import('../containers/okm'))
const Celebrities = React.lazy(()=>import('../containers/celebrities'))
const CleanLines = React.lazy(()=>import('../containers/cleanlines'))
const NewsAndAnnouncements = React.lazy(()=>import('../containers/news-announcements'))

const AppRoutes = () => {
   const { isAuthorized } = useSelector((state) => state.auth)
   const {
       login,
       admin,
       leadership,
       education, 
       healthCare,
       religiousAffairs,
       youthAffairs, 
       agriculture,
       culture,
       okm,
       celebrities,
       cleanliness,
       newsAndAnnouncements,
         } = ROUTES
   return (
      <Routes>
         <Route
            path="/"
            element={<Navigate to={isAuthorized ? admin.path : login.path} />}
         />

         <Route path={login.path} element={<Login />} />

         <Route element={<ProtectedRoute isAllowed={isAuthorized} />}>
            <Route element={<Layout />}>
               <Route path={admin.path} element={<Admin />} />
            </Route>

            <Route element={<TemplateLeaderShipPages />}>
               <Route
                  path={leadership.government.path}
                  element={<Employees />}
               />
               <Route path={education.schools.path} element={<Schools />} />
               <Route
                  path={education.drivingSchool.path}
                  element={<DrivingSchools />}
               />
               <Route
                  path={education.kindergartens.path}
                  element={<Kingergartens />}
               />
               <Route path={education.iyrymder.path} element={<Circles />} />
               <Route path={education.аctivities.path} element={<Events />} />
               <Route path={education.olympiads.path} element={<Olympiads />} />

               <Route
                  path={healthCare.hospitals.path}
                  element={<Hospitals />}
               />
               <Route
                  path={healthCare.paramedicPoint.path}
                  element={<FAPs />}
               />
               <Route path={healthCare.OMS.path} element={<OMS />} />
               <Route
                  path={healthCare.doctorAdvice.path}
                  element={<DoctorsAdvice />}
               />

               <Route
                  path={religiousAffairs.mosques.path}
                  element={<Mosques />}
               />
               <Route
                  path={religiousAffairs.madrasas.path}
                  element={<Madrasa />}
               />
               <Route path={religiousAffairs.ait.path} element={<Ait />} />
               <Route
                  path={religiousAffairs.morality.path}
                  element={<Morality />}
               />
               <Route
                  path={religiousAffairs.pilgrimage.path}
                  element={<Pilgrimage />}
               />
               <Route path={religiousAffairs.namaz.path} element={<Namaz />} />
               <Route
                  path={religiousAffairs.ramadan.path}
                  element={<Ramadan />}
               />
               <Route
                  path={religiousAffairs.religiousActivities.path}
                  element={<ReligiousActivities />}
               />

               <Route
                  path={youthAffairs.activeYouth.path}
                  element={<ActiveYouth />}
               />
               <Route
                  path={youthAffairs.headOfCommittee.path}
                  element={<HeadOfCommittee />}
               />
               <Route
                  path={youthAffairs.initiativies.path}
                  element={<Initiatives />}
               />
               <Route
                  path={youthAffairs.offersForYouth.path}
                  element={<OffersForYouth />}
               />
               <Route
                  path={youthAffairs.sportActivities.path}
                  element={<SportActivities />}
               />

               <Route
                  path={agriculture.animalUsbandry.path}
                  element={<AnimalUsbandry />}
               />
               <Route
                  path={agriculture.seedsFarm.path}
                  element={<SeedsFarm />}
               />
               <Route
                  path={agriculture.pastureCommittee.path}
                  element={<PastureCommitee />}
               />
               <Route path={agriculture.laws.path} element={<AgroLaws />} />
               <Route
                  path={agriculture.agroAdvices.path}
                  element={<AgroAdvices />}
               />
               <Route
                  path={agriculture.agroActivities.path}
                  element={<AgroActivities />}
               />

               <Route
                  path={culture.cultureHouses.path}
                  element={<CulturalHouses />}
               />
               <Route path={culture.museums.path} element={<Museums />} />
               <Route
                  path={culture.culturalWorkers.path}
                  element={<CulturalWorkers />}
               />
               <Route
                  path={culture.culturalCompetitions.path}
                  element={<CulturalCompetitions />}
               />
               <Route
                  path={culture.culturalActivities.path}
                  element={<CulturalActivities />}
               />
               <Route path={okm.okm.path} element={<OKM/>} />
               <Route path={celebrities.celebrities.path} element={<Celebrities/>} />
               <Route path={cleanliness.path} element={<CleanLines/>} />
               <Route path={newsAndAnnouncements.newsAndAnnouncements.path}
                element={<NewsAndAnnouncements/>}
                 />
            </Route>
         </Route>
      </Routes>
   )
}

export default AppRoutes

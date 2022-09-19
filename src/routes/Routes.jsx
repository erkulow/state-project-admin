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

const AppRoutes = () => {
   const { isAuthorized } = useSelector((state) => state.auth)
   const { login, admin, leadership, education, healthCare, religiousAffairs } =
      ROUTES
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
               <Route path={healthCare.OMS.path} element={<OMS />} />

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
            </Route>
         </Route>
      </Routes>
   )
}

export default AppRoutes

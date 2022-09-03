/* eslint-disable prettier/prettier */
import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import TemplateLeaderShipPages from '../components/temaplate-leadership-pages'
import Admin from '../containers/admin'
import Circles from '../containers/education/circles'
import Events from '../containers/education/events'
import GRT from '../containers/education/GRT'
import Olympiads from '../containers/education/olympiads'
import Hospitals from '../containers/health/hospitals/indes'
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

const AppRoutes = () => {
   const { isAuthorized } = useSelector((state) => state.auth)
   const { login, admin, leadership, education, healthCare } = ROUTES
   return (
      <Routes>
         <Route
            path="/"
            element={<Navigate to={isAuthorized ? admin.path : login.path} />}
         />

         <Route path={login.path} element={<Login />} />

         <Route element={<ProtectedRoute isAllowed={isAuthorized} />}>
            <Route path={admin.path} element={<Admin />} />
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
               <Route path={education.GRT.path} element={<GRT />} />
               <Route
                  path={healthCare.hospitals.path}
                  element={<Hospitals />}
               />
            </Route>
         </Route>
      </Routes>
   )
}

export default AppRoutes

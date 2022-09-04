/* eslint-disable prettier/prettier */
import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import TemplateLeaderShipPages from '../components/temaplate-leadership-pages'
import Admin from '../containers/admin'
import { ROUTES } from '../utils/constants/routes'
import ProtectedRoute from './ProtectedRoute'

const Login = React.lazy(() => import('../containers/login-page/Login'))
const Employees = React.lazy(() => import('../containers/leadership'))
const DrivingSchools = React.lazy(() =>
   import('../containers/education/driving-schools')
)
const Schools = React.lazy(() => import('../containers/education/schools'))
const Hospitals = React.lazy(()=>import('../containers/healthcare/hospitals'))   
const FMC = React.lazy(() => import('../containers/healthcare/FMC'))
const OMC = React.lazy(() => import('../containers/healthcare/OMC'))
const DoctorsAdvice = React.lazy(() => import('../containers/healthcare/doctors-advice'))


const AppRoutes = () => {
   const { isAuthorized } = useSelector((state) => state.auth)
   const { login, admin, leadership, education, healthcare } = ROUTES
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
               <Route path={healthcare.hospitals.path} element={<Hospitals/>} />
               <Route path={healthcare.FMC.path} element={<FMC/>} />
               <Route path={healthcare.OMC.path} element={<OMC/>} />
               <Route path={healthcare.doctorsAdvice.path} element={<DoctorsAdvice/>} />
            </Route>
         </Route>
      </Routes>
   )
}

export default AppRoutes

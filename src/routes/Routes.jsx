import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import Admin from '../containers/admin'
import { ROUTES } from '../utils/constants/routes'
import ProtectedRoute from './ProtectedRoute'

const Login = React.lazy(() => import('../containers/login-page/Login'))

const AppRoutes = () => {
	const { isAuthorized } = useSelector((state) => state.auth)
	const { login, admin, leadership } = ROUTES
	return (
		<Routes>
			<Route
				path='/'
				element={<Navigate to={isAuthorized ? '/admin' : '/login'} />}
			/>

			<Route path={login.path} element={<Login />} />

			<Route element={<ProtectedRoute isAllowed={isAuthorized} />}>
				<Route path={admin.path} element={<Admin />} />
			</Route>
		</Routes>
	)
}

export default AppRoutes

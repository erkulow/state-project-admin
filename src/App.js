import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Notification from './components/UI/notification/Notification'
import AppRoutes from './routes/Routes'
import { _KEY_AUTH } from './utils/constants/general'
import { checkOnlineState, saveToSessionStorage } from './utils/helpers/general'

function App() {
   const navigate = useNavigate()
   const { token, isAuthorized, role } = useSelector((state) => state.auth)
   useEffect(() => {
      saveToSessionStorage(_KEY_AUTH, { token, isAuthorized, role })
   }, [isAuthorized, token, role])

   useEffect(() => {
      if (!checkOnlineState()) navigate('/not_connect:(')
   }, [])

   return (
      <div className="App">
         <AppRoutes />
         <Notification />
      </div>
   )
}

export default App

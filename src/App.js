import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Notification from './components/UI/notification/Notification'
import AppRoutes from './routes/Routes'
import { _KEY_AUTH } from './utils/constants/general'
import { saveToSessionStorage } from './utils/helpers/general'

function App() {
   const { token, isAuthorized, role } = useSelector((state) => state.auth)
   useEffect(() => {
      saveToSessionStorage(_KEY_AUTH, { token, isAuthorized, role })
   }, [isAuthorized, token, role])
   return (
      <div className="App">
         <AppRoutes />
         <Notification />
      </div>
   )
}

export default App

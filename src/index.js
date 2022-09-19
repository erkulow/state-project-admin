import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <Suspense fallback={<div>loading....</div>}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </Suspense>
      </Provider>
   </React.StrictMode>
)

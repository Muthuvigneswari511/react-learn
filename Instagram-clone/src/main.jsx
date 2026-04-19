import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login.jsx'
import MainApp from './MainApp.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/home',
      element:<MainApp/>
    },
    {
      path:'/story/:id/:tot',
      element: <ViewStory/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  
  
)

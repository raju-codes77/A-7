import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import Homepage from './Pages/Homepage';
import ErrorPage from './Pages/ErrorPage';
import FriendsList from './Components/FriendsList/FriendsList';
import Banner from './Components/Banner/Banner';
import FriendDetails from './Components/Frienddetails/FriendDetails';
import { ToastContainer } from 'react-toastify';
import FriendsActivity from './Context/FriendsActivity';
import Timeline from './Components/Timeline/Timeline';
import Chart from './Components/Chart/Chart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
    children:[
      {
        path:"/",
        element: <Banner></Banner>,
      },
  {
    path:"/timeline",
    element: <Timeline></Timeline>
  },
  {
    path:"/stats",
    element:<Chart></Chart> 
  },
  {
    path:"/details/:id",
    element: <FriendDetails></FriendDetails>,
  }
    ],
    errorElement:<ErrorPage></ErrorPage>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <FriendsActivity>

       <RouterProvider router={router} />
       <ToastContainer position="top-center" />

    </FriendsActivity>

   
    
  </StrictMode>,
)

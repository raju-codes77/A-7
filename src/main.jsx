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
    element: <h2>Apps</h2>
  },
  {
    path:"/stats",
    element: <h2>Stats</h2>
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
    
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import Homepage from './Pages/Homepage';
import ErrorPage from './Pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
    children:[
  {
    path:"/timeline",
    element: <h2>Apps</h2>
  },
  {
    path:"/stats",
    element: <h2>Stats</h2>
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

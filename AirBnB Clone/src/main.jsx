import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter, createRoutesFromElements, RouterProvider,
  Route 
} from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Login from './Component/Login/Login.jsx'
import Signup from './Component/Signup/Signup.jsx'
import Houses from './Component/Houses/Houses.jsx'
import Listing from './Component/Listing/Listing.jsx'
import {ListingProvider} from './Context/ListingContext.jsx'
import Contact from './Component/ContactUs/Contact.jsx'
import ErrorBoundary from './Component/Error_Boundary/ErrorBoundary.jsx'
import RouteError from './Component/Error_Boundary/RouteError.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} errorElement={<RouteError/>} >
    <Route path='' element={<Home/>} />
    <Route path='login' element={<Login/>} />
    <Route path='signup' element={<Signup/>} />
    <Route path='houses' element={<Houses/>} />
    <Route path='listing' element={<Listing/>} />
    <Route path='contact' element={<Contact/>} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ErrorBoundary>
        <ListingProvider>
        <RouterProvider router={router} />
      </ListingProvider>
      </ErrorBoundary>
  </StrictMode>,
)

import './App.css'
import Nav from './Component/Nav/Nav'
import {Outlet} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  return(
    <>
      <ToastContainer />
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App

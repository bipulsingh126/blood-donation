import './App.css'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import Donors from './pages/Donors.jsx'
import Ptodpects from './pages/Ptodpects.jsx'
import Menu from './components/Menu.jsx'
import Prospect from './pages/Prospect.jsx'
import NewDonor from './pages/NewDonor.jsx'
import Donor from './pages/Donor.jsx'


function App() {

const Layout = () =>{
  return (
    <div className='flex '>
      <div>
        <Menu/>
      </div>

      <div>
        <Outlet/>
      </div>
    </div>
  )
}

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path: '/donors',
          element: <Donors/>
        },
        {
          path: '/ptodpects',
          element: <Ptodpects />
        },
        {
          path: '/prospect/:id',
          element: <Prospect/>
        },
        {
          path: '/newdonor',
          element: <NewDonor/> 
        },
        {
          path: '/donor/:id',
          element: <Donor/>
        }
      ]
    },
    
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App

import {Outlet} from 'react-router'
import  Navbar  from './Navbar'
function RootLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default RootLayout
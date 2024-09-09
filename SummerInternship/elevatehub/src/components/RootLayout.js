import React,{useContext} from 'react'
import NavigationBar from './NavigationBar'
import { Outlet } from 'react-router-dom'
import { loginContext } from '../context/LoginContext'
import Login from '../authentication/Login'

function RootLayout() {
  let [currentUser,loginUser,logoutUser,LoginErr,UserLoginStatus,srole] = useContext(loginContext)
  return (
    
    <div>
      {UserLoginStatus?(
        <><NavigationBar/>
        <Outlet/></>
      ):(
        <Login/>
      )}
      
    </div>
  )
}

export default RootLayout
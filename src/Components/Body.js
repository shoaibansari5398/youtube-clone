import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
	  <div className='flex'>
		  <Sidebar />
		  <Outlet/>
	</div>
  )
}

export default Body

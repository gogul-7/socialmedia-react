import React, { useEffect } from 'react'
import './Home.css'
import SideNav from './SideNav'
import Myinfo from './Myinfo'
import Suggestions from './Suggestions'

function Home() {

  return (
    <div id='home'>
      <div className='sidebar'>
        <p className='logo'>LOGO</p>
        <div className='sidelist'><SideNav />
        </div>
        <div className='rightSidebar'>
          <div><Myinfo /></div>
          <div><Suggestions/></div>
        </div>
      </div>

    </div>
  )
}

export default Home
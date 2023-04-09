import React from 'react'
import './SideNav.css'

function SideNav() {
  return (
    <div >
        <p>Menu</p>
        <ul className='listitems'>
            <li className='list'><i class="fa-sharp fa-solid fa-house"></i>&nbsp;&nbsp;&nbsp;Home</li>
            <li className='list'><i class="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;&nbsp;Search</li>
            <li className='list'><i class="fa-solid fa-inbox"></i>&nbsp;&nbsp;&nbsp;Messages</li>
            <li className='list'><i class="fa-solid fa-bell"></i>&nbsp;&nbsp;&nbsp;Notifications</li>
            <li className='list'><i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;Profile</li>
        </ul>
    </div>
  )
}

export default SideNav
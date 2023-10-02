import React from 'react'
import Icon from '../components/SideNav/Icon'
import "./SideNav.css"

const SideNav = () => {
  return (
    <div className='side_nav_container'>
      <Icon />
      <div className="avatar_tag">
        NT
      </div>
    </div>
  )
}

export default SideNav
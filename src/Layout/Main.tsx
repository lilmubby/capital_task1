import React from 'react'
import TopNav from '../components/TopNav/TopNav'
import "./Main.css"
import Image from '../components/Image/Image'
import PersonalInfo from '../components/Personalnfo/PersonalInfo'
import Profile from '../components/Profile/Profile'

const Main = () => {
  return (
    <main>
      <TopNav />
      <Image />
      <PersonalInfo />
      <Profile />
    </main>
  )
}

export default Main
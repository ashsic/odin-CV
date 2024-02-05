import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import WorkSection from './components/WorkSection'

function App() {


  return (
    <>
      <h1>CV Application</h1>

      <PersonalInfo />
      <WorkSection />

    </>
  )
}

export default App

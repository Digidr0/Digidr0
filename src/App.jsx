import { useState } from 'react'
import Header from './Components/Header'
import Projects from './Components/Projects/Projects'
import Profile from './Components/Profile/Profile'
import './App.css'

function App() {
  return (
    <div className="App">
     <Header />
     <Profile />
     <Projects />
    </div>
  )
}

export default App

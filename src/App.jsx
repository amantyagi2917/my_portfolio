import React from 'react'
import Nevbar from './components/Nevbar'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <div className='bg-[#050414]'>
        <div>
          <Nevbar />
          <About/>
          <Skills/>
          <Education/>
          <Contact/>
        </div>
      </div>
    </>
  )
}

export default App

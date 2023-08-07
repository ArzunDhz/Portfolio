import React from 'react'
import Mainpage from './pages/Mainpage'
import Navbar from './components/Navbar'

import Third from './pages/Third'
import Skill from './pages/Skill'
import Findme from './pages/Findme'
import astro1 from './assets/astro1.png'
import astro2 from './assets/astro2.png'
import astro3 from './assets/astro3.png'
import Zoom from './components/Zoom'
const App = () => {
  return (
   <>
   <Navbar/>
   <Mainpage/>
  <Zoom Title={'Skills'} Link={astro1}  />
    <Skill/>
    <Zoom Title={'Projects'}  Link={astro2} />
    <Third/>
    <Zoom Title={'Find me'} Link={astro3} />
    <Findme/>
   </>
  )
}

export default App
import React from 'react'
import Navbar from './component/Navbar/Navbar';
import Intro from './component/Intro/Intro';
import Skill from './component/Skill/Skill';
import Portfolio from'./component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
        <Navbar/>
        <Intro/>
        <Skill/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App;
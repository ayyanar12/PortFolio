import React from 'react'
import './intro.css';
import {Link} from 'react-scroll';
import myimage from'../../image/ayyanar.jpg'
import hiring from '../../image/hiring.png'

const Intro = () => {
  return (
    <section className='intro'>
      <div className="introcontent">
        <span className="hello">Hello</span><span className="introname">I'am </span>
        <span className='name1'>Ayyanar</span>
        <span className="developer"> web developer</span> <br />
        <p className='intropara'>i am very creative person and achieve to create <br /> response website and improve myself in what to i made</p>
        <Link className="introlink"><button className="introbutton"><img src={hiring} alt="" className="introimg" /> hire me</button></Link>

      </div>
      <img src={myimage} className='myimage' alt="ayyanar" />
    </section>
  )
}

export default Intro;
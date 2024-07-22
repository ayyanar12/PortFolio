import React from 'react'
import './Portfolio.css';
import analyzing from '../../image/analyzee.jpeg';
import enjoy from'../../image/enjoy.jpeg';
import solving from '../../image/solving.jpeg';
import teamwork from '../../image/teamwork.jpeg';
import timing from '../../image/timing.jpeg';
import working from '../../image/working.jpeg';

const portfolio = () => {
  return (
    <section className='works'>
      <h1 className="workstitle">My Portfolio</h1>
      <span className="worksdesc"> i work to honestly and satisfication of company to work.and improve the my skill to efficient work.i help to improve growth of the company.</span>
      <div className="worksimg">
        <img src={analyzing} alt="" className="workslistimage" />
        <img src={enjoy} alt="" className="workslistimage" />
        <img src={solving} alt="" className="workslistimage" />
        <img src={teamwork} alt="" className="workslistimage" />
        <img src={timing} alt="" className="workslistimage" />
        <img src={working} alt="" className="workslistimage" />
      </div>
      <button className="workbutton">See more</button>
    </section>
  )
}

export default portfolio
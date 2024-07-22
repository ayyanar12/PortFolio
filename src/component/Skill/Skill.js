import React from 'react'
import './Skill.css';
import website from '../../image/website development.jpeg';
import problem from '../../image/problem.jpeg';

const Skill = () => {
  return (
    <section className='skill'>
        <span className="skilltitle">What i do</span>
        <span className="skilldesc">i know the programming language of the basci in python,c programming and intermediate in java so i solve the problem solving in leet code platform and also i know the friend end language of html,css,javascript andi kow the framework of react js and backend language of the node js so crete a responsive website </span>
        <div className="skillbars">
            <div className="skillbar">
                <img src={website} alt="web image" className='skillbarimg' />
                <div className="skillbartext">
                    <h2>Web development</h2>
                    <p> create a responsive effective website</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={problem} alt="problem solving image" className='skillbarimg' />
                <div className="skillbartext">
                    <h2>Problem solving</h2>
                    <p> i like to solve the medium level problem</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Skill
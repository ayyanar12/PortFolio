import React,{useState} from 'react'
import './Navbar.css' ;
import {Link} from 'react-scroll';
import profile from '../../image/ayy.png';
import contact from'../../image/contact.png';
import menu from '../../image/menu.png'




const Navbar = () => {
  const [showmenu,setshowMenu]=useState(false);
  return (
    <nav className="navbar">
        <img src={profile} className='profileimg' alt=" logo" />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem" >Home</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem" >About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem" >Portfolio</Link>
            <Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListitem">Education</Link>
            
                    </div>
        <button className="desktopMenuButton" onClick={()=>{ 
          document.querySelector('.contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contact} alt="contact" className='desktopMenuimg' /><span className='contactspan'>contact me</span>
        </button>
        <img src={menu} className='menu' alt=" mobilemenu"  onClick={()=>setshowMenu(!showmenu)}/>
        <div className="navmenu" style={{display:showmenu?'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setshowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setshowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setshowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contactpage' spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setshowMenu(false)}>Education</Link>
            
        </div>
    </nav>
  )
}

export default Navbar
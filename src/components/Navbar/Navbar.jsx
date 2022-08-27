import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {HiMailOpen} from 'react-icons/hi'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'

import './Navbar.css'
const Navbar = () => {

    const [changeclick,setChangeClick]=useState(true)

    const clickChange = ()=>{
        setChangeClick(!changeclick)
    }
  return (
    <div >
    <div className='nav-container'>
        <div className="logo">
            <Link to='/'>
             <HiMailOpen className='logo-symbol'/>
            <span className='logo-name'>Estatery</span>
            </Link>
        </div>
        <div className={ changeclick ? "mobile-nav mobile-nav-s":"mobile-nav-active mobile-nav-s"}>
        <div className="nav-items">

                <p><Link to='/Rent'>Rent</Link></p>
                <p><Link to='/Buy'>Buy</Link></p>
                <p><Link to='/Sell'>Sell</Link></p>
                <p><Link to='/Favourite'>Favorites</Link></p>
            
        </div>
        <div className="nav-auth">
            <p className='Login'> <Link to='/Login'>Login</Link></p>
            <p className='Signup'><Link to='/Signup'>Sign up</Link></p>
        </div>
    </div>
        {changeclick ?  <AiOutlineMenu  onClick={clickChange} className='iconchange'/> :<AiOutlineClose onClick={clickChange} className='iconchange'/>}
        
    </div>
    </div>
  )
}

export default Navbar
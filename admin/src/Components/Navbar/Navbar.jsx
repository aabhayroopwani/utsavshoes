import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/UTSAV_SHOES_LOGO.png'
import adminimg from '../../assets/abhay.png'
import us_name from '../../assets/UTSAVSHOESNAME.png'
const Navbar = () => {
  return (
    <section id="header">
        <a href="#"><img id="logo" src={navlogo} alt="" /></a>
        <a href="#"><img id="name" src={us_name} alt="" /></a>
        <a href="#"><img id="myimg" src={adminimg} alt="" /></a>
    </section>
  )
}

export default Navbar
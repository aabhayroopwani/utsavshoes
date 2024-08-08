import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/UTSAV_SHOES_LOGO.png'
import cart_icon from '../Assets/carts.png'
import us_name from '../Assets/UTSAVSHOESNAME.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const {getTotalCartItems} = useContext(ShopContext);
  const nav = document.getElementById('navbar');
  function Opennav(){
    const bar = document.getElementById('bar');
    if(bar){
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
    }
  }
  function Closenav(){
    const close = document.getElementById('close');
    if(close){
      close.addEventListener('click', () => {
          nav.classList.remove('active');
      })
    }
  }
  return (
    <section id="header">
        <a href="#"><img id="logo" src={logo} alt="" /></a>
        <a href="#"><img id="name" src={us_name} alt="" /></a>
        <div className='nav'>
            <ul id="navbar">
                <li onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}><Link className='nava'style={{textDecoration: 'none'}} to='/'>Home</Link></li>
                <li onClick={()=>{setMenu("shop")}} className={menu==="shop"?"active":""}><Link className='nava' style={{textDecoration: 'none'}} to='/Shop'>Shop</Link></li>
                <li onClick={()=>{setMenu("about")}} className={menu==="about"?"active":""}><Link className='nava' style={{textDecoration: 'none'}} to='/About'>About</Link></li>
                <li onClick={()=>{setMenu("contact")}} className={menu==="contact"?"active":""}><Link className='nava' style={{textDecoration: 'none'}} to='/Contact'>Contact</Link></li>
                <li onClick={()=>{setMenu("cart")}} id="lg-bag" className={menu==="cart"?"active":""}><Link className='nava' style={{textDecoration: 'none'}} to='/Cart'><img src={cart_icon} alt=""/></Link></li>
                <li><div id="cart-count">{getTotalCartItems()}</div></li>
                <a href="#" id="close" onClick={Closenav()}><i className="far fa-times"></i></a>
            </ul>
            <div>
              {localStorage.getItem('auth-token')
              ?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}} className='but1'>Logout</button>
              :<Link style={{textDecoration: 'none'}} to='/Login'><button onClick={()=>{setMenu("login")}} className='but1'>Login/SignUp</button></Link>}
            </div>
        </div>
        <div id="mobile">
            <Link className='nava' style={{textDecoration: 'none'}} to='/Cart'><img src={cart_icon} alt="" onClick={()=>{setMenu("cart")}} className={menu==="cart"?"active":""} /></Link>
            <i id="bar" className="fas fa-outdent" onClick={Opennav()}></i>
        </div>
    </section>
  )
}

export default Navbar
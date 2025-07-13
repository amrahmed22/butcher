
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
    let x = useLocation()
    function top() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

function open() {
    document.querySelector('.menu').style.right = '0'
    
}

function close() {
    document.querySelector('.menu').style.right = '-100%'
}


    return <>



        <nav className='fixed-top'>
           
            <ul className='nav-bar d-flex align-items-center'>
                <p className='logo fw-bold fs-2 my-2'>BUTCHER</p>
                <span className="menu">
                    <li onClick={()=>{close(); top();}}><Link className={x.pathname=='/'?'nav-item active-link':'nav-item'} to={'/'}> Home </Link></li>
                    <li onClick={()=>{close(); top();}}><Link className={x.pathname=='/about'?'nav-item active-link':'nav-item'} to={'/about'}> About </Link></li>
                    <li onClick={()=>{close(); top();}}><Link className={x.pathname.includes('/menu')?'nav-item active-link':'nav-item'} to={'/menu/breakfast'}>Menu</Link></li>
                    <li onClick={()=>{close(); top();}}><Link className={x.pathname=='/service'?'nav-item active-link':'nav-item'} to={'/service'}>Service</Link></li>
                    <li onClick={()=>{close(); top();}}><Link className={x.pathname=='/contact'?'nav-item active-link':'nav-item'} to={'/contact'}>Contact</Link></li>
                    <span onClick={()=>{close(); top();}} className="close-menu"><i className="fas fa-times fs-1"></i></span>
                </span>
                <span onClick={open} className="open-menu"><i className="fas fa-bars fs-1"></i></span>
            </ul>
        </nav>
    </>

}

export default Navbar;

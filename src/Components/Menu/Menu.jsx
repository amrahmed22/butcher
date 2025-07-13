import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './../ScrollToTop/ScrollToTop';
import Dinner from './../Dinner/Dinner';
const Menu = () => {
    let w= useLocation()
    useEffect(() => {
        AOS.init({duration:1000});
      }, []);
      
    return <>
    <ScrollToTop/>
    
        <section className='pt-5'>
            <div className='title-header bg-danger'>
                <div className="layer-title-header">
                    <h1 data-aos="flip-up" className='title'>OUR MENU</h1>
                </div>
            </div>
            <div className="row container m-auto py-5">
                <h2 className='text-center'>Most Popular Items</h2>
                <ul className='d-flex justify-content-center text-white text-decoration-none my-3'>
                    <li className='mx-4 fs-5 fw-bold lead'>
                     <Link className={w.pathname=='/menu/breakfast'?'menu-link p-2':"p-2 orange"} to={'/menu/breakfast'}>BreakFast</Link>
                    </li>
                    <li className='mx-4 fs-5 fw-bold lead'>
                     <Link className={w.pathname=='/menu/lunch'?'menu-link p-2':"p-2 orange"}  to={'/menu/lunch'}>Lunch</Link>
                    </li>
                    <li className='mx-4 fs-5 fw-bold lead'>
                     <Link className={w.pathname=='/menu/dinner'?'menu-link p-2':"p-2 orange"}  to={'/menu/dinner'}>Dinner</Link>
                    </li>
                </ul>
                <div>
                <Outlet></Outlet>
                </div>
            </div>


        </section>


    </>
}

export default Menu;

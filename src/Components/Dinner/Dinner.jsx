import React, { useEffect } from 'react';
import menu1 from '../../../src/menu-5.jpg'
import menu2 from '../../../src/menu-6.jpg'
import menu3 from '../../../src/menu-1.jpg'
import menu4 from '../../../src/menu-3.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
const Dinner = () => {
    useEffect(() => {
        AOS.init({duration:1000});
      }, []);
    return <>
     <div className="row my-4 bg-light p-2 rounded-3 overflow-hidden">
     <div>
        <h3 className='text-center fs-1 orange'>Dinner</h3>
    </div>

<div data-aos="fade-right" className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
    <div className='rounded-3 item-menu my-3 d-flex justify-content-center shadow-lg p-2'>
        <div className='w-20'>
            <img src={menu1} className='w-100 float-end rounded-circle' alt="" />
        </div>
        <div className='w-80 mx-2'>
            <h4 className='orange hhh'>chiken meat</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='w-20 d-flex align-items-center'>
            <span className='rounded-circle nnn bg-orange text-white p-2 fs-5'>$70</span>
        </div>
    </div>
    <div className='rounded-3 item-menu my-3 d-flex justify-content-center shadow-lg p-2'>
        <div className='w-20'>
            <img src={menu2} className='w-100 float-end rounded-circle' alt="" />
        </div>
        <div className='w-80 mx-2'>
            <h4 className='orange hhh'>Chicken Burger</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='w-20 d-flex align-items-center'>
            <span className='rounded-circle nnn bg-orange text-white p-2 fs-5'>$80</span>
        </div>
    </div>
    <div className='rounded-3 item-menu my-3 d-flex justify-content-center shadow-lg p-2'>
        <div className='w-20'>
            <img src={menu4} className='w-100 float-end rounded-circle' alt="" />
        </div>
        <div className='w-80 mx-2'>
            <h4 className='orange hhh'>chiken meat</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='w-20 d-flex align-items-center'>
            <span className='rounded-circle nnn bg-orange text-white p-2 fs-5'>$95</span>
        </div>
    </div>
</div>
<div data-aos="fade-left" className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
    <div className='rounded-3 item-menu my-3 d-flex justify-content-center shadow-lg p-2'>
        <div className='w-20'>
            <img src={menu3} className='w-100 float-end rounded-circle' alt="" />
        </div>
        <div className='w-80 mx-2'>
            <h4 className='orange hhh'>chiken meat</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='w-20 d-flex align-items-center'>
            <span className='rounded-circle nnn bg-orange text-white p-2 fs-5'>$60</span>
        </div>
    </div>
    <div className=' rounded-3 item-menu my-3 d-flex justify-content-center shadow-lg p-2'>
        <div className='w-20'>
            <img src={menu2} className='w-100 float-end rounded-circle' alt="" />
        </div>
        <div className='w-80 mx-2'>
            <h4 className='orange hhh'>Chicken Burger</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='w-20 d-flex align-items-center'>
            <span className='rounded-circle nnn bg-orange text-white p-2 fs-5'>$50</span>
        </div>
    </div>
    <div className=' rounded-3 item-menu my-3 d-flex justify-content-center shadow-lg p-2'>
        <div className='w-20'>
            <img src={menu1} className='w-100 float-end rounded-circle' alt="" />
        </div>
        <div className='w-80 mx-2'>
            <h4 className='orange hhh'>chiken meat</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='w-20 d-flex align-items-center'>
            <span className='rounded-circle nnn bg-orange text-white p-2 fs-5'>$30</span>
        </div>
    </div>
</div>  
</div>
    
    </>
}

export default Dinner;

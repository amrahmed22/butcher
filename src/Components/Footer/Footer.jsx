import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    function topMenu() {
        window.scrollTo({
            top: 400,
            behavior: 'smooth',
        });
    }
    function top() {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        });
    }
    return<>
    
    <section className=' p-3 footer'>
    <div className="row">
    <div className="col-md-6 col-lg-6 col-sm-12 col-xl-3">
        <div className='text-center p-4'>
        <h2 className='orange'>BUTCHER</h2>
        <h3 className='text-white fw-bold since fs-5 mt-3'>- Since 1990 -</h3>
        <p className='lead fs-6 text-white mt-3'>The probability of someone needing your services or wantinLorem ipsum dolor sit amet consectetur adipisicing</p>

        </div>
    </div>
    <div className="col-md-6 col-lg-6 col-sm-12 col-xl-3">
        <div className='p-4 fs-5'>
            <h4 className='orange'>Continue Your Journey</h4>
        <Link onClick={top}  to={'/'}  className='text-white d-block text-decoration-none'><i className="fa-solid fa-arrow-right me-2"></i> Home</Link>
        <Link onClick={top}  to={'/about'} className='text-white  d-block text-decoration-none'><i className="fa-solid fa-arrow-right me-2"></i> About</ Link >
        <Link onClick={top}  to={'/menu/breakfast'} className='text-white  d-block text-decoration-none'><i className="fa-solid fa-arrow-right me-2"></i> Menu</Link>
        <Link onClick={top}  to={'/service'} className='text-white  d-block text-decoration-none'><i className="fa-solid fa-arrow-right me-2"></i> Service</Link>
        <Link onClick={top}  to={'/contact'} className='text-white d-block text-decoration-none '><i className="fa-solid fa-arrow-right me-2"></i> Contact</Link>
        
        </div>
    </div>
    <div className="col-md-6 col-lg-6 col-sm-12 col-xl-3">
        <div className='p-4 fs-5'>
            <h4 className='orange'>BEAF TENDERLOIN</h4>
        <Link onClick={topMenu} to={'/menu/breakfast'}  className='text-white d-block text-decoration-none'><i className="fa-solid fa-arrow-right me-2"></i> Breakfast</Link>
        <Link onClick={topMenu} to={'/menu/lunch'} className='text-white  d-block text-decoration-none'><i className="fa-solid fa-arrow-right me-2"></i> Lunch </Link>
        <Link onClick={topMenu} to={'/menu/dinner'} className='text-white  d-block text-decoration-none'><i className="fa-solid fa-arrow-right me-2"></i> Dinner </Link>

        
        </div>
    </div>
    <div className="col-md-6 col-lg-6 col-sm-12 col-xl-3">
        <div className='p-4 fs-5 text-center'>
            <h4 className='orange'>SUBSCRIBE TO <br /> CURRENT OFFERS</h4>

    <div className='h-footer d-flex align-items-center'>
    <input type="text" placeholder='Enter Meals...' className='w-75 h-100 border-0 ps-2 rounded-start-3 fs-6'  /> <button className='h-100 rounded-start-0 btn btn-danger'>Subscribe</button>
    </div>

       <div className='d-flex p-3 mt-1 text-white justify-content-between'>
        <i className='fa-brands fa-facebook fs-3'></i>
        <i className='fa-brands fa-instagram fs-3'></i>
        <i className='fa-brands fa-twitter fs-3'></i>
        <i className='fa-brands fa-spotify fs-3'></i>
        <i className='fa-brands fa-youtube fs-3'></i>
       </div>
        
        </div>
    </div>

    </div>



    </section>
    
    
    </>
}

export default Footer;

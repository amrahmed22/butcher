import React, { useEffect } from 'react';
import x from '../../../src/x.png'
import place1 from '../../../src/place1.jpeg'
import place2 from '../../../src/place2.jpeg'
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './../ScrollToTop/ScrollToTop';
const Home = () => {

    useEffect(() => {
        AOS.init({duration:1000});
      }, []);

    return <>
    <ScrollToTop/>
        <section id='home' className='position-relative homePage vh-100'>
            <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex align-items-center">
                <div className="container">
                    <div className="row">

                        <div data-aos="fade-right" className="col-md-12 col-lg-6 col-xl-6">
                            <div className='parent'>
                                <h1 className='text-white header-h1 '>Enjoy <br />Our Delicious Meal</h1>
                                <p className='text-white lead fs-6 header-p '>pariatur iusto sit iure minima illo magni numquam exercitationem,<br /> expedita facilis ullam deserunt facere laborum laudantium!
                                </p>
                                <button className='header-button'>Book A Table</button>
                            </div>

                        </div>
                        <div data-aos="fade-left" className=" col-md-12 col-lg-6 col-xl-6">
                            <div className='image'>
                                <img src={x} className='w-100 rotate ' alt="" />

                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </section>
        <section className='my-3 container'>
            <div className="row">
                <div  className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div data-aos="fade-right" className=" item shadow-sm p-3 mt-3">
                        <i className='fa fa-user-tie fs-2 my-2 orange'></i>
                        <h3 className='fs-2 fw-bold'>Master Chefs</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div data-aos="fade-right" className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="item shadow-sm p-3 mt-3">
                        <i className='fa-solid fa-utensils fs-2 my-2 orange'></i>
                        <h3 className='fs-2 fw-bold'>Quality Food</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div data-aos="fade-left" className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="item shadow-sm p-3 mt-3">
                        <i className='fa fa-cart-plus fs-2 my-2 orange'></i>
                        <h3 className='fs-2 fw-bold'>Online Order</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div data-aos="fade-left" className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="item p-3 shadow-sm mt-3">
                        <i className='fa-solid fa-headset fs-2 my-2 orange'></i>
                        <h3 className='fs-2 fw-bold'>Client Service</h3>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>

            </div>
        </section>

        <section className='container my-5'>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className='row'>
                        <div className="col-md-6">
                            <div className="">
                                <div className='position-relative image-animation mt-4'>
                                    <img data-aos="fade-right" src={place2} className='w-100  rounded-3' alt="" />
                                    <div className='position-absolute d-flex justify-content-center align-items-center  rounded-3 top-0 bottom-0 end-0 start-0 img-layer'>
                                        <div className='text-center text-white'>
                                            <i className='fa-brands fa-facebook  fs-2 mx-3'></i>
                                            <i className='fa-brands fa-instagram fs-2 mx-3'></i>
                                            <i className='fa-brands fa-twitter fs-2 mx-3'></i>
                                        </div>
                                    </div>
                                </div>
                                <div className='position-relative image-animation mt-4'>
                                    <img data-aos="fade-right" src={place1} className='w-100  rounded-3' alt="" />
                                    <div className='position-absolute d-flex justify-content-center align-items-center  rounded-3 top-0 bottom-0 end-0 start-0 img-layer'>
                                        <div className='text-center text-white'>
                                            <i className='fa-brands fa-facebook  fs-2 mx-3'></i>
                                            <i className='fa-brands fa-instagram fs-2 mx-3'></i>
                                            <i className='fa-brands fa-twitter fs-2 mx-3'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <div className='position-relative image-animation mt-4'>
                                    <img data-aos="fade-left" src={place1} className='w-100  rounded-3' alt="" />
                                    <div className='position-absolute d-flex justify-content-center align-items-center  rounded-3 top-0 bottom-0 end-0 start-0 img-layer'>
                                        <div className='text-center text-white'>
                                            <i className='fa-brands fa-facebook  fs-2 mx-3'></i>
                                            <i className='fa-brands fa-instagram fs-2 mx-3'></i>
                                            <i className='fa-brands fa-twitter fs-2 mx-3'></i>
                                        </div>
                                    </div>
                                </div>
                                <div className='position-relative image-animation mt-4'>
                                    <img data-aos="fade-left" src={place2} className='w-100  rounded-3' alt="" />
                                    <div className='position-absolute d-flex justify-content-center align-items-center  rounded-3 top-0 bottom-0 end-0 start-0 img-layer'>
                                        <div className='text-center text-white'>
                                            <i className='fa-brands fa-facebook  fs-2 mx-3'></i>
                                            <i className='fa-brands fa-instagram fs-2 mx-3'></i>
                                            <i className='fa-brands fa-twitter fs-2 mx-3'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <h1 className='orange text-center fw-bold mt-4'>Welcome to Restoran</h1>
                    <p className='fs-6  mt-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                    <p className='fs-6  mt-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className=' d-flex align-items-center mt-4 p-3'>
                                <div className='orange item border border-3 rounded-circle p-3 fs-1 fw-bold mx-3'> 15</div>
                                <h4 className='ms-2'><span className='orange fs-5'>Years Of</span><br /> Experience</h4><br />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className=' d-flex align-items-center mt-4 p-3'>
                                <div className='orange item border border-3 rounded-circle p-3 fs-1 fw-bold mx-3'> 50</div>
                                <h4 className='ms-2'><span className='orange fs-5'>Popular</span><br />

                                    MASTER CHEFS</h4><br />
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    </>
}

export default Home;

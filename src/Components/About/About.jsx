import React, { useEffect } from 'react';
import team1 from '../../../../butcher/src/team-1.jpg'
import team2 from '../../../../butcher/src/team-3.jpg'
import team3 from '../../../../butcher/src/team-4.jpg'
import i1 from '../../../../butcher/src/ftb1.png'
import i2 from '../../../../butcher/src/ftb2.png'
import i3 from '../../../../butcher/src/ftb3.png'
import i4 from '../../../../butcher/src/ftb4.png'
import B from '../../../../butcher/src/B.png'
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const About = () => {
    useEffect(() => {
        AOS.init({duration:1000});
      }, []);
    return <>
    <ScrollToTop/>

        <section className='pt-5 about'>
            <div className='title-header bg-danger'>
                <div className="layer-title-header">
                    <h1 data-aos="flip-up" className='title'>ABOUT US</h1>
                </div>
            </div>
            <div className="row py-4 text-center container m-auto d-flex justify-content-center">
                <h5 className='since my-2'>Team Members</h5>
                <h2 className='orange mb-4'>Our Master Chefs</h2>

                <div data-aos="fade-right" className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="shadow-lg px-3 pt-3 rounded-3 chef  my-2">
                        <img src={team1} className='w-75 rounded-circle' alt="" />
                        <h2 className='orange my-4'>Eslam Ehab</h2>
                        <h6 className='lead my-4'>BBQ Chef</h6>
                        <div className='d-flex justify-content-center icons'>
                            <i className='fa-brands fa-instagram bg-orange text-white p-2 fs-4 mx-2 rounded-3'></i>
                            <i className='fa-brands fa-facebook-f bg-orange text-white p-2 fs-4 mx-2 rounded-3'></i>
                            <i className='fa-brands fa-youtube bg-orange  text-white p-2 fs-4 mx-2 rounded-3'></i>
                        </div>
                    </div>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="shadow-lg px-3 pt-3 rounded-3 chef my-2">
                        <img src={team2} className='w-75 rounded-circle' alt="" />
                        <h2 className='orange my-4'>Mohamed Adel</h2>
                        <h6 className='lead my-4'>expert Chef</h6>
                        <div className='d-flex justify-content-center icons'>
                            <i className='fa-brands fa-instagram bg-orange text-white p-2 fs-4 mx-2 rounded-3'></i>
                            <i className='fa-brands fa-facebook-f bg-orange text-white p-2 fs-4 mx-2 rounded-3'></i>
                            <i className='fa-brands fa-youtube bg-orange  text-white p-2 fs-4 mx-2 rounded-3'></i>
                        </div>
                    </div>
                </div>


                <div data-aos="fade-left" className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="shadow-lg px-3  pt-3 rounded-3 chef  my-2">
                        <img src={team3} className='w-75 rounded-circle' alt="" />
                        <h2 className='orange my-4'>Ahmed Ashraf</h2>
                        <h6 className='lead my-4'>BBQ Chef</h6>
                        <div className='d-flex justify-content-center icons'>
                            <i className='fa-brands fa-instagram bg-orange text-white p-2 fs-4 mx-2 rounded-3'></i>
                            <i className='fa-brands fa-facebook-f bg-orange text-white p-2 fs-4 mx-2 rounded-3'></i>
                            <i className='fa-brands fa-youtube bg-orange  text-white p-2 fs-4 mx-2 rounded-3'></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row container m-auto">
                <div data-aos="fade-right" className="col-xl-6 col-lg-6 col-md-12 col-sm-12">

                    <div>
                        <img src={B} className='w-100 p-5' alt="" />
                    </div>
                </div>
                <div data-aos="fade-left" className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className='p-5'>
                        <h1 className='orange fw-bold fs-1'>ABOUT OUR FIRM’S</h1>
                        <p className='lead fs-6 my-4'>we are committed to total transparency about our products. image Nunc elementum purus vel ex iaculis eleifend. Curabitur bibendum odio dui, at placerat antperer vitae. In hac habitasse platea dictumst. Phasellus nec sodales enim. Mauris malesuada nulla hole enim, nec eleifend lacus vulputate ut.</p>
                        <div className="row">
                            <div className="col-3  ">
                                <div>
                                <img src={i1} className='w-50 float-end me-2' alt="" />
                                </div>
                            </div>
                            <div className="col-9">
                                <h5>Hygienic and Healthy</h5>
                                <p className='lead fs-6'>Nunc faucibus vehicula Holawely.</p>
                            </div>
                            <div className="col-3 my-2">
                                <img src={i2} className='w-50 float-end me-2' alt="" />
                            </div>
                            <div className="col-9 my-2">
                                <h5>Hygienic and Healthy</h5>
                                <p className='lead fs-6'>Nunc faucibus vehicula Holawely.</p>
                            </div>
                            <div className="col-3 my-1">
                                <img src={i3} className='w-50 float-end me-2' alt="" />
                            </div>
                            <div className="col-9 my-1">
                                <h5>Hygienic and Healthy</h5>
                                <p className='lead fs-6'>Nunc faucibus vehicula Holawely.</p>
                            </div>
                            <div className="col-3 my-1">
                                <img src={i4} className='w-50 float-end me-2' alt="" />
                            </div>
                            <div className="col-9 my-1">
                                <h5>Hygienic and Healthy</h5>
                                <p className='lead fs-6'>Nunc faucibus vehicula Holawely.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>


    </>
}

export default About;

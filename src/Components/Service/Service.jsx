import React, { useEffect } from 'react';
import icon1 from '../../../src/icon-2.png'
import icon2 from '../../../src/icon-3.png'
import icon3 from '../../../src/icon-4.png'
import icon4 from '../../../src/icon-5.png'
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './../ScrollToTop/ScrollToTop';

const Service = () => {
    useEffect(() => {
        AOS.init({duration:1000});
      }, []);
    return <>
    <ScrollToTop/>
      
        <section className='pt-5'>
            <div className='title-header bg-danger'>
                <div className="layer-title-header">
                    <h1 data-aos="flip-up" className='title'>SERVICE</h1>
                </div>
            </div>
            <div className="row my-4 container m-auto">
                <div data-aos="fade-right" className="col-xl-3 col-lg-3 col-md-6 col-sm-12 my-2">
                    <div className='w-100 item-service p-3 text-center border-orange'>
                        <img src={icon1}className="  w-25" alt="" />
                            <div className="">
                                <h5 className="orange service-title my-3">Trust Us</h5>
                                <p className="">Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus. Ut velit augue, imperdiet vel leo id, cursus vehicula urna.</p>
                                <button className="btn btn-service text-white my-2 bg-orange">Read More</button>
                            </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="col-xl-3 col-lg-3 col-md-6 col-sm-12 my-2">
                    <div className='w-100 item-service p-3 text-center border-orange'>
                        <img src={icon2}className="  w-25" alt="" />
                            <div className="">
                                <h5 className="orange service-title my-3">Trust Us</h5>
                                <p className="">Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus. Ut velit augue, imperdiet vel leo id, cursus vehicula urna.</p>
                                <button className="btn btn-service text-white my-2 bg-orange">Read More</button>
                            </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="col-xl-3 col-lg-3 col-md-6 col-sm-12 my-2">
                    <div className='w-100 item-service p-3 text-center border-orange'>
                        <img src={icon3}className="  w-25" alt="" />
                            <div className="">
                                <h5 className="orange service-title my-3">Trust Us</h5>
                                <p className="">Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus. Ut velit augue, imperdiet vel leo id, cursus vehicula urna.</p>
                                <button className="btn btn-service text-white my-2 bg-orange">Read More</button>
                            </div>
                    </div>
                </div>
                <div data-aos="fade-left" className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mt-2">
                    <div className='w-100 item-service p-3 text-center border-orange'>
                        <img src={icon4}className="  w-25" alt="" />
                            <div className="">
                                <h5 className="orange service-title my-3">Trust Us</h5>
                                <p className="">Proin at varius arcu. Sed posuere orci bibendum pharetra dapibus. Ut velit augue, imperdiet vel leo id, cursus vehicula urna.</p>
                                <button className="btn btn-service text-white my-2 bg-orange">Read More</button>
                            </div>
                    </div>
                </div>
            </div>


        </section>
    </>
}

export default Service;

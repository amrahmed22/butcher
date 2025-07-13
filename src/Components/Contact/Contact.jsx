import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './../ScrollToTop/ScrollToTop';
const Contact = () => {
    useEffect(() => {
        AOS.init({duration:1000});
      }, []);
      function prevent(event) {
        event.preventDefault()
      }
    return <>
    <ScrollToTop/>
    
    <section className='vh-100 contact position-relative'>
        <div className="layer position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center pt-5">
            <form className='container pt-5'>
                <label htmlFor="" className='my-1 bg-transparent text-white fs-4'> Name :</label>
                <input type="text" className='my-1 bg-transparent form-control' />
                <label htmlFor="" className='my-1 bg-transparent text-white fs-4'>Email :</label>
                <input type="email" className='my-1 bg-transparent form-control' />
                <label htmlFor="" className='my-1 bg-transparent text-white fs-4'>Password :</label>
                <input type="password" className='my-1 bg-transparent form-control' />
                <label htmlFor="" className='my-1 bg-transparent text-white fs-4'>Meals :</label>
                <input type="text" className='my-1 bg-transparent form-control'  />
<div className='w-100  d-flex justify-content-center'>
<button onClick={prevent} className='btn btn-danger bg-orange py-2 px-3 my-4 button-send mx-auto'>Send</button>
</div>

            </form>
        </div>
    </section>
    
    
    </>
}

export default Contact;

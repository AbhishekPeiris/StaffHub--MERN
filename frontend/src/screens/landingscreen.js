import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({ duration: 2000 });

const Landingscreen = () => {
    return (
        <div className='row landing justify-content-center'>
            <div className='col-md-9 my-auto text-center'>
                <h2 data-aos='zoom-in' style={{color: 'white', fontSize:'130px' , textShadow : '0 0 0.9em rgb(0, 0, 0)'}}>STAFF<span style={{color: 'green'}}>Hub</span></h2>
                <h1 data-aos='zoom-out' style={{color: 'white' , textShadow : '0 0 0.9em rgb(0, 0, 0)'}}>"We are always with you."</h1>

                <Link to='/home'>
                    <button className='btn landingbtn'>Get Started</button>
                </Link>
            </div>
        </div>
    );
}

export default Landingscreen;

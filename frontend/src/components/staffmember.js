import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

AOS.init({ duration: 1000 })

const Staffmember = ({ staff }) => {


    return (

            <div className='row justify-content-center bs' data-aos='fade-up' key={staff._id}>

                <div className='col-md-3 mt-3'>

                    <img src={staff.imageurl[0]} alt="Staff Member" className='smallimg' />

                </div>
                <div className='col-md-4 mt-3'>

                    <h2>{`${staff.firstname} ${staff.lastname}`}</h2>
                    <p>Email : {staff.email}</p>
                    <p>Username : {staff.username}</p>

                    <br />
                    <Link to={`/home/${staff._id}`}>
                        <button className='btn btn-primary'>View details</button>
                    </Link>


                </div>

            </div>

    );
}

export default Staffmember;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './loader';
import Swal from 'sweetalert2';


const Staffprofile = ({ staffmember }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);
        setLoading(false);

    },[])

    async function deleteStaffmember(id, username) {

        try {

            setLoading(true);
            const data = (await axios.delete(`http://localhost:5000/deletestaffmember/${id}`)).data;
            console.log(data);
            Swal.fire(`${username}`, "Staff member is deleted", 'success').then(result => {

                window.location.href = '/home';

            });           
            setLoading(false);

        } catch (error) {

            console.log(error);
            Swal.fire(`Oops`, "Error with deleting staff member", 'error');
            setLoading(false);

        }
    }

    return (
        <div>
            <h2>Staff Member Details</h2><br />

            {loading ? (
                <Loader />
            ) : (
               

                    <div>

                        <div className='row bs'>



                            <div className='col-md-4'>
                                <p><strong>First Name:</strong> {staffmember.firstname}</p>
                                <p><strong>Last Name:</strong> {staffmember.lastname}</p>
                                <p><strong>Email:</strong> {staffmember.email}</p>
                                <p><strong>Contact:</strong> {staffmember.contact}</p>
                                <p><strong>Date of Birth:</strong> {staffmember.dob}</p>
                                <p><strong>Username:</strong> {staffmember.username}</p>
                                <p><strong>Password:</strong> {staffmember.password}</p>
                                <small><p><strong>Staff ID:</strong> {staffmember._id}</p></small>

                                {staffmember.imageurl?.map((url) => (
                                    <img src={url} alt="Staff Member" className='smallimg' />
                                ))}

                            </div>

                        </div>
                        <div className='row bs'>

                            <div className='col-md-3'>

                                <Link to={`/updatestaffmember/${staffmember._id}`}>
                                    <button className='btn btn-primary'>Update staff member</button>
                                </Link>

                            </div>
                            <div className='col-md-3'>

                                <button className='btn btn-primary' onClick={(e) => deleteStaffmember(staffmember._id, staffmember.username)}>Delete staff member</button>

                            </div>

                        </div>

                    </div>

                )}
            


        </div>
    );
}

export default Staffprofile;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loader from '../components/loader';
import Swal from 'sweetalert2';


const Createstaffscreen = () => {


    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [dob, setDob] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [imageurl, setImageurl] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);
        setLoading(false);

    }, []);

    async function createStaff(e) {

        e.preventDefault();

        const newStaffmember = {

            firstname,
            lastname,
            email,
            contact,
            dob,
            username,
            password,
            imageurl
        }

        try {

            setLoading(true);
            const data = (await axios.post('http://localhost:5000/createstaffmember', newStaffmember)).data;
            console.log(data);
            Swal.fire(`${username}`, "Staff member added successfully", 'success').then(result => {

                window.location.href = '/home';

            });
            setLoading(false);

        } catch (error) {

            console.log(error);
            Swal.fire('Oops', "Error with adding staff member" , 'error');
            setLoading(false);
        }

    }

    return (

        <div>

            {loading ? (
                <Loader />
            ) : (

                <div className='mt-5 container'>


                    <form onSubmit={createStaff}>
                        <div class="form-group">
                            <label for="firstname">First name</label>
                            <input type="text" class="form-control" id="firstname" placeholder='Enter first name' required
                                onChange={(e) => {
                                    setFirstname(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="lastname">Last name</label>
                            <input type="text" class="form-control" id="lastname" placeholder='Enter last name' required
                                onChange={(e) => {
                                    setLastname(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder='Enter email' required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="contact">Contact</label>
                            <input type="tel" maxLength="10" class="form-control" id="contact" placeholder='Enter contact no.' required
                                onChange={(e) => {
                                    setContact(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="dob">Date of birth</label>
                            <input type="date" class="form-control" id="dob" placeholder='Enter date of birth' required
                                onChange={(e) => {
                                    setDob(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="username" placeholder='Enter username Eg :- STFXXXX' required
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" placeholder='Enter password' required
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="imageurl">Image url</label>
                            <input type="text" class="form-control" id="imageurl" placeholder='Enter imageurl' required
                                onChange={(e) => {
                                    setImageurl(e.target.value);
                                }}
                            />
                        </div>

                        <br />

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            )}


        </div>
    );
}

export default Createstaffscreen;

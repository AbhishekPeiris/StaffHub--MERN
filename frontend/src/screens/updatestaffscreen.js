import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Loader from '../components/loader';
import Swal from 'sweetalert2';


const Updatestaffscreen = () => {

    const { staffId } = useParams();

    const [staffmember, setStaffmember] = useState([]);

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [dob, setDob] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [imageurl, setImageurl] = useState('');

    const [loading, setLoading] = useState();


    useEffect(() => {

        async function getStaffDetails() {

            try {

                setLoading(true);

                const data = (await axios.post(`http://localhost:5000/home/${staffId}`)).data;
                setStaffmember(data.staffMember);
                console.log(data.staffMember);

                setFirstname(data.staffMember.firstname);
                setLastname(data.staffMember.lastname);
                setEmail(data.staffMember.email);
                setContact(data.staffMember.contact);
                setDob(data.staffMember.dob);
                setUsername(data.staffMember.username);
                setPassword(data.staffMember.password);
                setImageurl(data.staffMember.imageurl);

                setLoading(false);


            } catch (error) {

                console.log(error);
                setLoading(false);
            }
        }
        getStaffDetails();

    }, [])

    async function updateSatff(e) {

        e.preventDefault();



        const updateSatffmember = {

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
            const data = (await axios.put(`http://localhost:5000/updatestaffmember/${staffId}`, updateSatffmember)).data;
            console.log(data);
            Swal.fire(`${username}`, "Staff member is updated" , 'success').then(result => {

                window.location.href = `/home/${staffId}`;

            });     
            setLoading(false);

        } catch (error) {

            console.log(error);
            Swal.fire("Oops", "Error with updating staff member", 'error');
            setLoading(false);
        }
    }

    return (

        <div>

            {loading ? (
                <Loader />
            ) : (

                <div className='mt-5 container'>
                    <form onSubmit={updateSatff}>
                        <div class="form-group">
                            <label for="firstname">First name</label>
                            <input type="text" class="form-control" id="firstname" placeholder='Enter first name' value={firstname} required
                                onChange={(e) => {
                                    setFirstname(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="lastname">Last name</label>
                            <input type="text" class="form-control" id="lastname" placeholder='Enter last name' value={lastname} required
                                onChange={(e) => {
                                    setLastname(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" placeholder='Enter email' value={email} required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="contact">Contact</label>
                            <input type="tel" maxLength="10" class="form-control" id="contact" placeholder='Enter contact no.' value={contact} required
                                onChange={(e) => {
                                    setContact(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="dob">Date of birth</label>
                            <input type="date" class="form-control" id="dob" placeholder='Enter date of birth' value={dob} required
                                onChange={(e) => {
                                    setDob(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="username" placeholder='Enter username Eg :- STFXXXX' value={username} readOnly
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" placeholder='Enter password' value={password} readOnly
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </div>

                        <div class="form-group">
                            <label for="imageurl">Image url</label>
                            <input type="text" class="form-control" id="imageurl" placeholder='Enter image url' value={imageurl} required
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

export default Updatestaffscreen;

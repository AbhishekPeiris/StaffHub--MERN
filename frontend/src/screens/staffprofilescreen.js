import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Staffprofile from '../components/staffprofile';
import axios from 'axios';

const Staffprofilescreen = () => {
    const { staffId } = useParams();
    const [staffmember, setStaffmember] = useState([]);

    useEffect(() => {
        async function getStaffprofile() {
            try {
                const data = (await axios.post(`http://localhost:5000/home/${staffId}`)).data;
                setStaffmember(data.staffMember);
            } catch (error) {
                console.log(error);
            }
        }

        getStaffprofile();

    }, []);

    return (
        <div className='container mt-5'>

            <Staffprofile staffmember = {staffmember} />
  
        </div>
    );
}

export default Staffprofilescreen;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Staffmember from '../components/staffmember';
import Loader from '../components/loader';

const Homescreen = () => {
  const [allstaff, setAllstaff] = useState([]);
  const [duplicateallstaff, setDuplicateallstaff] = useState([]);

  const [loading, setLoading] = useState();

  const [searchkey, setSearchkey] = useState('');


  function filterBySearch() {

    const tempstaff = duplicateallstaff.filter(allstaff => allstaff.firstname.toLowerCase().includes(searchkey.toLowerCase()));
    setAllstaff(tempstaff);
   

  }

  useEffect(() => {

    async function getAllstaff() {

      try {

        setLoading(true);
        const data = (await axios.get('http://localhost:5000/home')).data;
        setAllstaff(data.allStaffmembers);
        setDuplicateallstaff(data.allStaffmembers);
        setLoading(false);

      } catch (error) {

        console.log(error);
        setLoading(false);

      }
    }
    getAllstaff();
  }, []);

  return (

    <div className='container mt-5'>

      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
          onChange={(e) => { setSearchkey(e.target.value) }} onKeyUp={filterBySearch}
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ color: "white" }}>Search</button>
      </form>

      {loading ? (
        <Loader />
      ) : (
        allstaff.map((staff) => (

          <Staffmember staff={staff} />

        ))
      )}

    </div>
  );
};

export default Homescreen;

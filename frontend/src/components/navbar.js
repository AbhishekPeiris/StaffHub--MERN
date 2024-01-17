import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand"><b>STAFF<span style={{ color: "green" }}>Hub</span></b></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/home' className="nav-link active">Home <span className="sr-only">(current)</span></Link>
                        <Link to='/createstaffmember' className="nav-link">Create staff member</Link>

                        <Link to='/login' className="nav-link">Login</Link>
                        <Link to='/register' className="nav-link">Register</Link>

                    </div>
                </div>
                
            </nav>
        </div>
    );
}

export default Navbar;

import React, { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {

    const [loading, setLoading] = useState(true);

    return (
        <div style={{marginTop:'150px'}}>
           <center><div className="sweet-loading">

                <ClipLoader
                    color='green'
                    loading={loading}
                    cssOverride=''
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div></center>
        </div>
    );
}

export default Loader;

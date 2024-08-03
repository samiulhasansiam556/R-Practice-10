
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from 'react-router-dom';


function HomePage(props) {

    const navigate = useNavigate();
    return (
        <div>
            <h2>This is Home Page</h2>
            <button onClick={()=> navigate("/Page1")} className="btn btn-primary ">Page1</button>
            <button onClick={()=> navigate("/Page2")} className="btn btn-success mx-3">Page2</button>
        </div>
    );
}

export default HomePage;
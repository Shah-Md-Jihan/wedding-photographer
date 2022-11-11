import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    if (loader) {
        return <Spinner style={{ margin: "300px 700px" }} className='' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>


    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;
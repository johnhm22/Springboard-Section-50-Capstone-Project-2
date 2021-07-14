import React from 'react';
import { Redirect } from "react-router-dom";


const LogoutForm = ({logout}) => {

    const handleLogout = () => {
        logout();
    }
handleLogout();

return (
    <>
    <Redirect to='/' />
    </>
    )
  
};

export default LogoutForm;
import React from 'react';
import { useHistory } from "react-router-dom";
import './LoginForm.css';
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};

    if(!values.username) {
        errors.username = "username required";
    } 
    if(!values.password) {
        errors.password = "password required";
    } 
    return errors;
    }

const LoginForm = ({login}) => {

    const history = useHistory();


    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            login(values.username, values.password);
            history.push('/');
        },
    });


return (
    <div className="container loginform col-lg-6">
        <div className="row justify-content-md-center">
        <div className="col-6">
        <form method="get" onSubmit={formik.handleSubmit} className="mt-3">
        <h3>Log In</h3>
            <div className="form-group">
            <label htmlFor="username"></label>
            <input 
            className="form-control" 
            type="text" name="username" 
            id="username" 
            value={formik.username}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
            placeholder="Enter username..." />
            {formik.errors.username ? <div style={{color:'red'}}>{formik.errors.username}</div> : null}
            </div>
            <div className="form-group">
            <label htmlFor="password"></label>
            <input
            className="form-control" 
            type="text" name="password" 
            id="password" 
            value={formik.password} 
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
            placeholder="Enter password..." />
            {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}
            </div>
            <button type="submit" className="btn btn-primary btn-sm float-right">Log in</button>
        </form>
        </div>
        </div>
    </div>
    )
  
};

export default LoginForm;




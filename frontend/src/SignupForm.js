import React from 'react';
import { useHistory } from 'react-router';
import './SignupForm.css';
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};

    if(!values.username) {
        errors.username = "username required";
    } 
    if(!values.password) {
        errors.password = "password required";
    } 
    if(!values.firstname) {
        errors.firstname = "first name required";
    } 
    if(!values.lastname) {
        errors.lastname = "last name required";
    } 
    if(!values.email) {
        errors.email = "email required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format';
    }
    if(!values.firstProperty) {
        errors.firstProperty = "at least one property required";
    } 
    return errors;
    }

const SignupForm = ({signup}) => {

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        firstProperty: "",
        secondProperty: "",
        thirdProperty: ""
    },
    validate,
    onSubmit: values => {
        signup(values.username, values.password, values.firstname, values.lastname, values.email, values.firstProperty, values.secondProperty, values.thirdProperty);
        history.push('/');
        }
    });

   
return (
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div className="row justify-content-md-center">
        <div className="col-10">
        <form method="get" onSubmit={formik.handleSubmit} className="mt-2">
        <h3>Sign Up</h3>
            <div className="form-group">
            <label htmlFor="username" className="float-left"></label>
            <input
            className="form-control" 
            type="text" 
            name="username" 
            id="username" 
            value={formik.username} 
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
            placeholder="Enter username..." />
            {formik.errors.username ? <div style={{color:'red'}}>{formik.errors.username}</div> : null}
            </div>
            <div className="form-group">
            <label htmlFor="password" className="float-left"></label>
            <input 
            className="form-control" 
            type="text" 
            name="password" 
            id="password" 
            value={formik.password}
            onBlur={formik.handleBlur} 
            onChange={formik.handleChange} 
            placeholder="Enter password..." />
            {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}
            </div>
            <div className="form-group">
            <label htmlFor="firstname" className="float-left"></label>
            <input 
            className="form-control" 
            type="text" 
            name="firstname" 
            id="firstname" 
            value={formik.firstname} 
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} placeholder="Enter first name..." />
             {formik.errors.firstname ? <div style={{color:'red'}}>{formik.errors.firstname}</div> : null}
            </div>
            <div className="form-group">
            <label htmlFor="lastname" className="float-left"></label>
            <input 
            className="form-control" 
            type="text" 
            name="lastname" 
            id="lastname" 
            value={formik.lastname} 
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
            placeholder="Enter last name..." />
            {formik.errors.lastname ? <div style={{color:'red'}}>{formik.errors.lastname}</div> : null}
            </div>
            <div className="form-group">
            <label htmlFor="email" className="float-left"></label>
            <input 
            className="form-control" 
            type="text" 
            name="email" 
            id="email" 
            value={formik.email} 
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
            placeholder="Enter email..." />
            {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}
            </div>
            <div className="form-group">
            <label htmlFor="firstProperty" className="float-left"></label>
            <input 
            className="form-control" 
            type="text" 
            name="firstProperty" 
            id="firstProperty" 
            value={formik.firstProperty} 
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
            placeholder="First property number..." />
             {formik.errors.firstProperty ? <div style={{color:'red'}}>{formik.errors.firstProperty}</div> : null}
            </div>
            <div className="form-group">
            <label htmlFor="secondProperty" className="float-left"></label>
            <input 
            className="form-control" 
            type="text" 
            name="secondProperty" 
            id="secondProperty" 
            value={formik.secondProperty} 
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
            placeholder="Second property number..." />
            </div>
            <div className="form-group">
            <label htmlFor="thirdProperty" className="float-left"></label>
            <input 
            className="form-control" 
            type="text" 
            name="thirdProperty" 
            id="thirdProperty" 
            value={formik.thirdProperty} 
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
            placeholder="Third property number..." />
            </div>
            <button className="btn btn-primary btn-sm float-right">Sign up</button>

            {/* <div className="form-group">
            <label htmlFor="properties"></label>
            <select className="form-control custom-select" type="select" name="properties" id="properties" onChange={handleChange} value = {formData.properties} multiple>
            <option selected>Select your property/properties</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="A3">A3</option>
            <option value="A4">A4</option>
            <option value="A5">A5</option>
            <option value="A6">A6</option>
            <option value="A7">A7</option>
            <option value="A8">A8</option>
            <option value="A9">A9</option>
            <option value="A10">A10</option>
            </select>
            </div> */}

        </form>
        </div>
        </div>

        </div>
    )
  
};

export default SignupForm;
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './SignupForm.css';



const SignupForm = ({signup}) => {

    const history = useHistory();

    const initialState = {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        firstProperty: "",
        secondProperty: "",
        thirdProperty: ""
    }
    const [formData, setFormData] = useState(initialState);

    const [isInvalid, setIsInvalid] = useState(true);
    const [isTouched, setIsTouched] = useState(false);


const handleChange = (e) => {
    setIsTouched(true);
    const {name, value} = e.target;
    if(value === '') {
        setIsInvalid(true);
    } else {
        setIsInvalid(false);
    }
    setFormData(formdata => ({
        ...formdata,
        [name]: value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();
    const {username, password, firstname, lastname, email, firstProperty, secondProperty, thirdProperty} = formData;
    signup(username, password, firstname, lastname, email, firstProperty, secondProperty, thirdProperty);
    setFormData(initialState);
    history.push('/');
}

return (
    <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <div className="row justify-content-md-center">
        <div className="col-10">
        <form method="get" onSubmit={handleSubmit} className="mt-2">
        <h3>Sign Up</h3>
            <div className="form-group">
            <label htmlFor="username" className="float-left"></label>
            <input className="form-control" type="text" name="username" id="username" value={formData.username} onChange={handleChange} placeholder="Enter username..." />
            </div>
            <div className="form-group">
            <label htmlFor="password" className="float-left"></label>
            <input className="form-control" type="text" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter password..." />
            </div>
            <div className="form-group">
            <label htmlFor="firstname" className="float-left"></label>
            <input className="form-control" type="text" name="firstname" id="firstname" value={formData.firstname} onChange={handleChange} placeholder="Enter first name..." />
            </div>
            <div className="form-group">
            <label htmlFor="lastname" className="float-left"></label>
            <input className="form-control" type="text" name="lastname" id="lastname" value={formData.lastname} onChange={handleChange} placeholder="Enter last name..." />
            </div>
            <div className="form-group">
            <label htmlFor="email" className="float-left"></label>
            <input className="form-control" type="text" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter email..." />
            {isInvalid && isTouched && <span style = {{color: 'red'}}>Email cannot be blank!</span>}
            </div>
            <div className="form-group">
            <label htmlFor="firstProperty" className="float-left"></label>
            <input className="form-control" type="text" name="firstProperty" id="firstProperty" value={formData.firstProperty} onChange={handleChange} placeholder="First property number..." />
            </div>
            <div className="form-group">
            <label htmlFor="secondProperty" className="float-left"></label>
            <input className="form-control" type="text" name="secondProperty" id="secondProperty" value={formData.secondProperty} onChange={handleChange} placeholder="Second property number..." />
            </div>
            <div className="form-group">
            <label htmlFor="thirdProperty" className="float-left"></label>
            <input className="form-control" type="text" name="thirdProperty" id="thirdProperty" value={formData.thirdProperty} onChange={handleChange} placeholder="Third property number..." />
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
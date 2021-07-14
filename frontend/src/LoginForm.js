import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './LoginForm.css';


const LoginForm = ({login}) => {

    const initialState = {
        username: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialState);

    const history = useHistory();

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(formdata => ({
        ...formdata,
        [name]: value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();
    const {username, password} = formData;
    login(username, password);
    setFormData(initialState);
    history.push('/');
}

return (
    <div className="container col-lg-6">
        <div className="row justify-content-md-center">
        <div className="col-6">
        <form method="get" onSubmit={handleSubmit} className="mt-3">
        <h3>Log In</h3>
            <div className="form-group">
            <label htmlFor="username"></label>
            <input className="form-control" type="text" name="username" id="username" value={formData.username} onChange={handleChange} placeholder="Enter username..." />
            </div>
            <div className="form-group">
            <label htmlFor="password"></label>
            <input className="form-control" type="text" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter password..." />
            </div>
            <button className="btn btn-primary btn-sm float-right">Log in</button>
        </form>
        </div>
        </div>
    </div>
    )
  
};

export default LoginForm;




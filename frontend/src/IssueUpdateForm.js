import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from './userContext';
import './IssueUpdateForm.css';



const IssueUpdateForm = ({updateHistory}) => {

    const initialState = {
        update_by: "",
        description: ""
    }
    const [formData, setFormData] = useState(initialState);

    
    const loggedInUser = useContext(UserContext)
    const username = loggedInUser.username


const handleChange = (e) => {
    console.log("e.target", e.target)
    console.log("e.target.checked", e.target.checked);
    const checked = e.target.checked;
    const {name, value} = e.target;
    setFormData(formdata => ({
        ...formdata,
        [name]: value,
        checked
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData in handleSubmit", formData);
    const {description, checked} = formData;
    updateHistory(username, description, checked);
    setFormData(initialState);
}

if(loggedInUser){
return (
    <div className="updateIssue container">
        <div className="row justify-content-md-center">
            <div className="col-6">
            <form method="get" onSubmit={handleSubmit} className="mt-3">
                <h5>Update issue</h5>     
                <div className="form-group">
                <label htmlFor="description"></label>
                <input className="form-control" type="text" name="description" id="description" value={formData.description} onChange={handleChange} placeholder="Add update..." />
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={handleChange} 
                name="issueStatus" id="issueStatus"/>
                <label className="form-check-label" htmlFor="issueStatus">Close issue</label>
                </div>

                <button className="btn btn-primary btn-sm float-right">Update</button>
            </form>
            </div>
        </div>
    </div>
    )
}
    return(
        <Redirect to='/' />
    )
  
};

export default IssueUpdateForm;
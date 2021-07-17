import { Link } from 'react-router-dom';
import React, { useEffect, useState, useContext } from "react";
import EstateApi from './api';
import moment from "moment";
import UserContext from './userContext';
import './AllIssuesList.css'


function AllIssuesList ({updateIssues, issues}) {

    const [isLoading, setIsLoading] = useState(true);


    const user = useContext(UserContext)
    //below stops smoke test
    const username = user.username

    const handleUpdateIssues = (issues) => {
        updateIssues(issues);
    }

    useEffect( () => {
        async function getAllIssues() {
            let issues = await EstateApi.getAllIssues();
            handleUpdateIssues(issues)
            setIsLoading(false);
        }
        getAllIssues();
        }, []
        )

        if (isLoading) {
            return <p>Loading &hellip;</p>;
          }
          
    return(
        <>
        <div className="container col-lg-8 allissueslist mt-5">
            <div className="row justify-content-md-center">
                <div className="col-8">
                <h4>All issues</h4>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Issue</th>
                    <th>Raised by</th>
                    <th>Date raised</th>
                    <th>Status</th>
                    </tr>
                </thead>
                {issues.map(issue => (
                <tbody>
                    <tr>
                    <td><Link to={`/issues/${username}/${issue.id}`}>{issue.title}</Link></td>
                    <td>{issue.username}</td>
                    <td>{moment(issue.created_on).format("ddd Do MMMM")}</td>
                    <td>{issue.status}</td>
                    </tr>
                </tbody>
                ))}
                </table>
                <Link to={`/issues/${username}/add`}><button className="btn btn-info btn-sm float-right">Add</button></Link>
                </div>
        </div>
        </div>
        </>
    )
}

export default AllIssuesList;
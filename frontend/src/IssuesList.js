import { useParams, Link, Redirect } from 'react-router-dom';
import React, { useEffect, useState, useContext } from "react";
import UserContext from './userContext';
import EstateApi from './api';
import moment from "moment";
import './IssueList.css';


function IssuesList ({updateIssues, issues}) {

    const loggedInUser = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(true);

    const {user} = useParams();

    const handleUpdateIssues = (issues) => {
        updateIssues(issues);
    }

    useEffect( () => {
        async function getIssuesByUser(user) {
            let issues = await EstateApi.getIssuesByUser(user);
            handleUpdateIssues(issues)
            setIsLoading(false);
        }
        getIssuesByUser(user);
        }, [] 
        )

        if (isLoading) {
            return <p>Loading &hellip;</p>;
          }
    
    if(loggedInUser){
        return(
            <>
            <div className="container issuelist col-lg-6 mt-5">
                <div className="row justify-content-center">
                    <div className="col-8">
                    <h4>Issues you have raised</h4>
                    <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>Issue</th>
                        <th>Date raised</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    {issues.map(issue => (
                    <tbody>
                        <tr>
                        <td><Link to={`/issues/${user}/${issue.id}`}>{issue.title}</Link></td>
                        <td>{moment(issue.created_on).format("ddd Do MMMM")}</td>
                        <td>{issue.status}</td>
                        </tr>
                    </tbody>
                    ))}
                    </table>
                    <Link to={`/issues/${user}/add`}><button className="btn btn-info btn-sm float-right">Add</button></Link>
                    </div>
            </div>
            </div>
            </>
            )
        }

        return(
            <Redirect to='/' />
        )
}

export default IssuesList;
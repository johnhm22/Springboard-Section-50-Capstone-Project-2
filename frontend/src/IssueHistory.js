import { useParams } from 'react-router-dom';
import EstateApi from './api';
import React, {useState, useEffect, Redirect, useContext} from "react";
import UserContext from './userContext';
import moment from "moment";
import axios from 'axios';
import IssueUpdateForm from './IssueUpdateForm';
import './IssueHistory.css';
import {v4 as uuid} from "uuid";



function IssueHistory () {

    //causes error with smoke test
    const loggedInUser = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(true);

    //stops smoke test
    const {user, id} = useParams();

    const [issueHistory, setIssueHistory] = useState();

    async function updateHistory(update_by, description, checked) {
        try {
            //add in authentication of username and password
            const status = checked === true? 'closed': 'open'
            console.log("status in updateHistory function ", status);
            let res = await axios({
              method: 'patch',
              url: `http://localhost:3001/issues/${user}/${id}/history`,
              data: {
                update_by,
                description,
                status
            }
          });
          setIssueHistory(issueHistory => [...issueHistory, ...res.data])

      } catch(err) {
          console.log(err);
      }
    }

useEffect( () => {
    async function getHistoryOfIssue(user, id) {
        let history = await EstateApi.getHistoryOfIssue(user, id);
        setIssueHistory([...history])
        setIsLoading(false);
    }
    getHistoryOfIssue(user, id);
    }, [] 
    )

    if (isLoading) {
        return <p>Loading &hellip;</p>;
      }

if(loggedInUser){
    return(
        <>
        <div className="issueHistory container mt-5">
            <div className="row justify-content-center">
                <div className="col-8">
                <h4>Issue history</h4>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Updated by</th>
                    <th>Description</th>
                    </tr>
                </thead>
                {issueHistory.map(history => (
                <tbody>
                    <tr>
                    <td>{moment(history.created_on).format("ddd Do MMMM")}</td>          
                    <td>{history.update_by}</td>
                    <td>{history.description}</td>
                    </tr>
                </tbody>
                ))}
                </table>
                <IssueUpdateForm updateHistory={updateHistory}/>
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

export default IssueHistory;

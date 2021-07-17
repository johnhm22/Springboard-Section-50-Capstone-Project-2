import React, {useState, useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import EstateApi from './api';
import'./Home.css';
import UserContext from "./userContext";

const UserProfile = () => {
    const userDetails = useContext(UserContext);
    const {user} = useParams();
    
    const [isLoading, setIsLoading] = useState(true);


    const [count, setCount] = useState();

useEffect( () => {
    async function issueCount(user) {
        let count = await EstateApi.getIssueCountByUser(user);
        setCount(count)
        setIsLoading(false);
    }
    issueCount(user);
    }, []
    )

    if (isLoading) {
        return <p>Loading &hellip;</p>;
      }



    if(userDetails){
        return(
            <div className="Home">
            <div className="container-fluid pb-2 text-center">
            <h1 className="b-4 font-weight-bold">Your profile details</h1>
            <h4>Hello {userDetails.firstname}, here are your profile details:</h4>
            <h5>Your properties are: 
            <span> {userDetails.first_property} </span>
            <span> {userDetails.second_property} </span>
            <span> {userDetails.third_property} </span>
            </h5>
            <h5>username: {userDetails.username}</h5>
            <h5>First name: {userDetails.firstname}</h5>
            <h5>Last name: {userDetails.lastname}</h5>
            <h5>email: {userDetails.email}</h5>
            <h5>You have: {count.count} open issues</h5>
            </div>
            </div>
            )
        }
        return(
            <div className="Home">
            <div className="container-fluid text-center">
            <h1 className="b-4 font-weight-bold">Welcome to ManageMyProperty</h1>
            <h2>All the tools in one convenient place!</h2>
            </div>
            </div>
        )
   
}

export default UserProfile;
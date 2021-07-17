import React, {useContext} from 'react';
import'./Home.css';
import UserContext from "./userContext";

const Home = () => {
    const user = useContext(UserContext);

    

    if(user){
        console.log("user in Home", user);
        return(
            <div className="Home">
            <div className="container-fluid text-center">
            <h1 className="b-4 font-weight-bold">Welcome to ManageMyProperty</h1>
            <h2>All the tools in one convenient place!</h2>
            <h4>Hello {user.firstname}</h4>
            <h5>Your properties are: 
            <span> {user.first_property} </span>
            <span> {user.second_property} </span>
            <span> {user.third_property} </span>
            </h5>
            {/* <p>Are you an admin?
            {user.is_admin ? <span>  Yes</span>:<span>  No</span>}</p> */}
            </div>
            </div>
            )
        }
        return(
            <div className="Home mb-2">
                <div className="container-fluid text-center pb-4">
                    <h1 className="b-4 font-weight-bold">Welcome to ManageMyProperty</h1>
                    <h2>All the tools in one convenient place!</h2>
                </div>
            </div>
        )
   
}

export default Home;
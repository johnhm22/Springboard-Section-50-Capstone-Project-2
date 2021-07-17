import React, { useContext } from "react";
import "./NavBar.css";
import {Link} from 'react-router-dom'
import UserContext from "./userContext";


function NavBar({logout}) {
  const user = useContext(UserContext);
  if(user){
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand h1" to='/'>ManageMyProperty</Link>                           
                <div className="navbar navbar-light">
                    <div className="navbar-nav">
                    <span className="nav-item nav-link">Hello {user.firstname}</span>
                    <Link className="nav-item nav-link" to={`/user/${user.username}/profile`}>My Profile</Link>
                    <Link className="nav-item nav-link" to="/issues">{user.is_admin ? <span>All issues</span>:<span></span>}</Link>
                    <Link className="nav-item nav-link" to={`/issues/${user.username}`}>My Issues</Link>
                    <Link className="nav-item nav-link" onClick={logout}>Logout</Link>
                    </div>
                </div> 
        </nav>
        </div>      
        );
        }
        
      return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand h1" to='/'>ManageMyProperty</Link>                           

                        <div className="navbar navbar-light">
                            <div className="navbar-nav">
                            <Link className="nav-item nav-link" to='/login'>Login</Link>
                            <Link className="nav-item nav-link" to="/signup">Sign up</Link>
                            </div>
                        </div> 
                    </nav>
                </div>
              );


}

export default NavBar;
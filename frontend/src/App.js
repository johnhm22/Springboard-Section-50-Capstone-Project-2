import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import React, { useState } from "react";
import UserContext from './userContext';
import Home from './Home';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';
import SignupForm from './SignupForm';
import IssuesList from './IssuesList';
import Issue from './Issue';
import IssueHistory from './IssueHistory';
import axios from "axios";
import IssueUpdateForm from './IssueUpdateForm';
import AddIssueForm from './AddIssueForm';
import AllIssuesList from './AllIssuesList';
import UserProfile from './UserProfile';



function App() {

  const [currentUser, setUser] = useState();

  const [issues, setIssues] = useState();

  const updateIssues = (issues) => {
        setIssues(issues);
  }

  async function login(username, password) {
    try {
        const res = await axios({
          method: 'post',
          url: `http://localhost:3001/users/login`,
          data: {
            username,
            password
          }
        }); 
        setUser(res.data.user);
    } catch(err) {
      console.log(err);
  }
}



async function logout() {
  console.log("currentUser before logout: ", currentUser);
  setUser('');
  // history.push('/');
  console.log("currentUser after logout: ", currentUser);
  // history.push('/');
}


async function signup(username, password, firstname, lastname, email, firstProperty, secondProperty, thirdProperty) {
  try{
  let res = await axios({
    method: 'post',
    url: `http://localhost:3001/users/register`,
    data: {
      username,
      password,
      firstname,
      lastname,
      email,
      firstProperty,
      secondProperty,
      thirdProperty
        }
    })
    setUser(res.data.user);
  }
    catch(err) {
      console.log("There has been an error", err);
    }
}


  return (
    <UserContext.Provider value={currentUser}>
    <div className="App">
      <BrowserRouter>
      <NavBar logout={logout}/>
      <Switch>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route exact path='/login'>
        <LoginForm login={login}/>
        </Route>
        <Route exact path='/logout'>
        <LogoutForm logout={logout}/>
        </Route>
        <Route exact path='/signup'>
        <SignupForm signup={signup}/>
        </Route>
        <Route exact path='/user/:user/profile'>
        <UserProfile />
        </Route>
        <Route exact path='/issues/'>
        <AllIssuesList issues = {issues} updateIssues = {updateIssues}/>
        </Route>
        <Route exact path='/issues/:user'>
        <IssuesList issues = {issues} updateIssues = {updateIssues}/>
        </Route>
        <Route exact path='/issues/:user/add'>
        <AddIssueForm />
        </Route>
        <Route exact path='/issues/:user/:id'>
        <Issue issues = {issues}/>
        </Route>
        <Route exact path='/issues/:user/:id/history'>
        <IssueHistory />
        </Route>
        <Route exact path='/issues/:user/:id/history/update'>
        <IssueUpdateForm />
        </Route>
        <Redirect to='/' />
      </Switch>
      </BrowserRouter>
    </div>
    </UserContext.Provider>

  );
}

export default App;

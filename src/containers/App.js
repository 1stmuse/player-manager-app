import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetStarted from './getstarted/GetStarted'
import Homepage from './homepage/Homepage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  const [user, setUser]= useState({
    name:'',
    password:'',
    email:'',
    id:''
  })

  const LoadUser=(user)=>{
    setUser({
      name:user.name,
      password:user.password,
      email:user.email,
      id:user._id
    })
  }

  return (
    <Router>
      <div className="App">
        <Route path='/'  exact >
          <GetStarted loadUser={LoadUser} />
        </Route>
        <Route path='/home' >
          <Homepage user={user} />
        </Route>
      </div>
    </Router>
  );
}

export default App;

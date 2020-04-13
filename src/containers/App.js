import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetStarted from './getstarted/GetStarted'
import Homepage from './homepage/Homepage'
import Team from './Team/Team'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  const [user, setUser]= useState({
    name:'',
    id:'',
    account: ''
  })

  const LoadUser=(users)=>{
    localStorage.setItem('users', JSON.stringify(users))
    setUser({
      name:users.name,
      id:users.id,
      account: users.account
    })
  }

const storeduser =JSON.parse(localStorage.getItem('users'))
  return (
    <Router>
      <div className="App">
        <Route path='/'  exact >
          <GetStarted loadUser={(e)=>LoadUser(e)} />
        </Route>
        <Route path='/home' >
          <Homepage user={storeduser} />
        </Route>
        <Route path='/team'>
          <Team user={storeduser}/>
        </Route>
      </div>
    </Router>
  );
}

export default App;

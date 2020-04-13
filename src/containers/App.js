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
    setUser({
      name:users.name,
      id:users._id,
      account: users.account
    })
  }

  return (
    <Router>
      <div className="App">
        <Route path='/'  exact >
          <GetStarted loadUser={(e)=>LoadUser(e)} />
        </Route>
        <Route path='/home' >
          <Homepage user={user} />
        </Route>
        <Route path='/team'>
          <Team 
                // data={this.state.data}
                // onPlayerRemove={this.onPlayerRemove}  
                // onPlayerSale={this.onPlayerSale}  
                user={user}
            />
        </Route>
      </div>
    </Router>
  );
}

export default App;

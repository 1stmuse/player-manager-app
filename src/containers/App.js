import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetStarted from './getstarted/GetStarted'
import Homepage from './homepage/Homepage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/'  exact component={GetStarted} />
        <Route path='/home' component={Homepage} />
      </div>
    </Router>
  );
}

export default App;

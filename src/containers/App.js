import React from 'react';
import GetStarted from './getstarted/GetStarted'
import Homepage from './homepage/Homepage'
import Header from '../components/header_footer/Header'

function App() {
  return (
    <div className="App">
      <GetStarted/>
      <Homepage>
        <Header/>
      </Homepage>
    </div>
  );
}

export default App;

import React from 'react';
import newImage from './images/cassie.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={newImage} className="App-logo" alt="new" />
        <p>
          Incoming New App : Cassie Eats
          <br></br>
          Assignee : Cassie
        </p>
      </header>
    </div>
  );
}

export default App;

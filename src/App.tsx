import React from 'react';
import newImage from './images/cassies-app.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={newImage} className="App-logo" alt="new" />
        <p>
          Incoming New App : Cassie Eats
        </p>
        <p>
          Assignee : Cassie
        </p>
      </header>
    </div>
  );
}

export default App;

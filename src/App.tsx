import React from 'react';
import newImage from './images/cassie.png'; // 左右に動く画像
import squareImage from './images/cassie2.png'; // 四角で移動する画像（適切な画像を指定）
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 左右に行き来する画像 */}
        <img src={newImage} className="App-logo App-moving" alt="moving" />
        {/* 四角で移動する画像 */}
        <img src={squareImage} className="App-logo App-square" alt="square" />
        <p>
          Incoming New App : Cassie Eats
          <br />
          Assignee : Cassie
        </p>
      </header>
    </div>
  );
}

export default App;

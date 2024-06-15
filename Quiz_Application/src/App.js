import React, { useState } from 'react';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [result, setResult] = useState(null);

  return (
    <div className="App">
      {!isLoggedIn && <Login onLogin={() => setIsLoggedIn(true)} />}
      {isLoggedIn && !result && <Quiz onQuizComplete={setResult} />}
      {result && <Result result={result} />}
    </div>
  );
}

export default App;

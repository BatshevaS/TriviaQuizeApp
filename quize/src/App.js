import './App.css';
import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import Form from './Form/index'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);


  return loading ? <LinearProgress color="primary" /> : <div className="App">
    <header className="App-header">My Trivia Quize</header>
    <Form />
</div>
};

export default App;

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(0);


  useEffect(() => {

  }, [numero, numero2]);

  const sumar = () => {
    setNumero(numero + 1);
  };

  const restar = () => {
    setNumero(numero - 1);
  };

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={sumar}>Sumar</button>

        <h1> Nuestro State {numero} </h1>

        <button onClick={restar}>Restar</button>

        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;

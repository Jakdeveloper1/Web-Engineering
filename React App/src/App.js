import logo from './logo.svg';
import './App.css';
import React from "react"
import { Second } from './Components/Seconds';

function First()  {

  var name = "Shehryar"
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js name =  {name} </code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Second/>
    </div>
    
  );
}





export default First;

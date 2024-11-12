// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"
import  {Second}  from './Components/Seconds';
import App from './Components/CounterApp';
import { ToDoList } from './Components/ToDoList';
import { Fetch } from './Components/fetchData';
import { App1 } from './Components/FormData';
import { Outlet } from 'react-router-dom';

function First () {

  var name = "Shehryar"

  const [getName, setName] = useState("")

  
  return (
    <div className="App">
      <header className="App-header">
        
        
        {/* <img src={logo} className="App-logo"  /> */}
        <p>
          Edit <code>src/App.js name =  {name} </code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

      {/* <Second name="First" />
      <Second name="Second"/>
      <Second name="Third"/>
*/}

      {/* <App/>  */}

        {/* <Test/> */}

      {/* <Fetch/>

      <App1 title = "Name" state ={getName}></App1>
      <App1 title = "Roll No"></App1>
      <App1 title = "Age"></App1>
      <button onClick={{}}>Submit</button> */}

      {/* <ToDoList/> */}

      <Outlet/>

    </div>
    
  );

}



export default First;

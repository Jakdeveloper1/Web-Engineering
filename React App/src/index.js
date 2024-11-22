import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App  from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './Route/error';
import Contact from './Route/contact';
import { Test } from './Route/Test';
import { MyParams } from './Route/myParams';
import { Main } from './Zustand/Main';
import { Parent } from './ContextAPi/Parent';


// using React Routing  V6.4 or greater


const Route1 = createBrowserRouter([
  {
    path:"/",
    element:<Main/>,
    errorElement: <ErrorPage/>,
    children:[
      {
          path:"/contact",
          element:<Contact/>
          
      },
      {
        path:"/home",
        element:<h3>This is my second child component</h3>
      }

    ]
  },
  {
    path:"/test",
    element:<Test/>,
  },
  {
    path:"/test/:id",
    element:<MyParams/>
  }
  
])

const Route2 = createBrowserRouter(
  [
    {
      path:"/",
      element:<h3>User not registered</h3>
    },
    {
      path:"/contacts",
      element:<h1>this is for the contacts component</h1>
    }
  ]
)


const auth = true
//React Routing
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={auth ? Route1 : Route2}></RouterProvider>
  </React.StrictMode>
);




// Without React Routing 
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>
// );










// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

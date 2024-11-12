import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App  from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from './Route/error';
import Contact from './Route/contact';

// using React Routing  V6.4 or greater
const Route = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
          path:"/home",
          element:<Contact/>
      },

    ]
  },
  {
    path:"/contacts/:1",
    element:<Contact/>
  }
])

//React Routing
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Route}></RouterProvider>
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

import React  from 'react';
import {  RouterProvider,  createBrowserRouter } from 'react-router-dom';
import RootLayout from './Components/Pages/Root';
import { ErrorPage } from './Components/Pages/ErrorPage';
import Home from './Components/Pages/Home';
import Week from './Components/Pages/Week';
import Weeks from './Components/Pages/Weeks';

//import Popup from './Components/Controls/Popup';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: 'week', element: <Week />},
      {path: 'weeks', element: <Weeks />},
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}



export default App;

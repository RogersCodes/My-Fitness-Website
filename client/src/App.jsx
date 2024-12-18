import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './constants/router';



function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

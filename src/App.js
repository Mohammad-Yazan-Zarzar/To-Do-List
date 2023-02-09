/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Body from './To-Do-Components/Body';
import './To-Do-Components/To-do.css';
import { v4 as uuid } from 'uuid';
function App() {
  return (
    <div className='App' >
       
        
        <Body/>        
        
    </div>
  );
}

export default App;

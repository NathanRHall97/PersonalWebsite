import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Componets/Profile';
import TopBar from './Componets/TopBar';
import Footer from './Componets/Footer';

function App() {
  return (
    <div className="App">
    <TopBar/>
    <Profile/>
    <Footer/>
    </div>
  );
}

export default App;

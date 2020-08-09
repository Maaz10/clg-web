import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbari from './routes/Navbar/Navbar';
import Schools from './routes/Schools/Schools';
import Footer from './routes/Footer/Footer'
import Corporate from './routes/Corporate/Corporate';

function App(){
  return(
    <Router>
    <div>
      <Navbari />
      <Route path ='/Schools' component={ Schools }/>
      <Route path ='/Corporate' component={ Corporate }/>
   </div>
   <Footer/>
   </Router>
  );
}

export default App;

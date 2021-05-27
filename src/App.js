import './App.css';
import React from 'react';
import Main from './components/Post/Main';
import Navbar from './components/layout/Navbar'
import Aside from './components/layout/Aside'
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Thoughts from "./components/Thoughts/Thoughts"
import RegisterForm from "./components/Register/RegisterForm"
import LoginForm from "./components/Login/LoginForm"
import Profile from "./components/Profile/Profile"

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='Container'>
          <Aside />
          <Switch>
            <Route exact path="/thoughts" component={Thoughts} />
            <Route exact path="/" component={Main} />
            <Route exact path="/register" component={RegisterForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
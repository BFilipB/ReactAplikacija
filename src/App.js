import React, { Component } from 'react';
import RegisterForm from './containers/forms/RegisterForm';
// You can import style files in ./App.js and add global styles in ./App.css
import LoginForm from './containers/forms/LoginForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      
      <Route path="/" exact component={RegisterForm}/>
      <Route path="/login/" exact component={LoginForm} />
      
      
      </BrowserRouter>
      
    );
  }
}

export default App;

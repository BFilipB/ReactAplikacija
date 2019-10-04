import React, { Component } from 'react';
import RegisterForm from './containers/forms/RegisterForm';
// You can import style files in ./App.js and add global styles in ./App.css
import LoginForm from './containers/forms/LoginForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions/auth';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      
      <BrowserRouter>
      
      <Route path="/" exact component={RegisterForm}/>
      <Route path="/login/" exact component={LoginForm} />
      
      
      </BrowserRouter>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

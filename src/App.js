import React, { Component } from 'react';
import RegisterForm from './containers/forms/RegisterForm';
// You can import style files in ./App.js and add global styles in ./App.css

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <RegisterForm />
        </div>
      </div>
    );
  }
}

export default App;

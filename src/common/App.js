import React, { Component } from 'react';
import RouterMap from './router/router'
import './App.scss';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <RouterMap/>    
      </div>    
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import HTBFbanner from './images/hacktober-13.png';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="htbf-banner" src={HTBFbanner} alt="htbf-banner" />
      </div>
    )
  }
}

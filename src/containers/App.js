import React, { Component } from 'react';

// Components
import SearchBar from '../components/SearchBar/SearchBar'

// Styles
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="left-scene">
        <SearchBar />
        </div>
        <div className="right-scene">
        </div>
      </div>
    );
  }
}


export default App;

//<img src={logo} className="App-logo" alt="logo" />

import React from 'react';
import Header from './components/header/header.js'
import Main from './components/main/main.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}


export default App;

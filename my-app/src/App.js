import React from 'react';
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}


export default App;

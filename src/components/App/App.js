import './App.css';
import React from 'react';
import Header from '../Header/header';
import Banner from '../Banner/banner';
import Section from '../Section/Section';

class App extends React.Component {
  render() {
    return (
      <div className="App">
         <Header/>
         <div className="container">
         <Banner/>
         <Section/>
         </div>
      </div>
    );
  }
}

export default App;

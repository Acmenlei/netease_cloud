import './Home.css';
import React from 'react';
import Banner from '../../components/Banner/banner';
import Section from '../../components/Section/Section';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
         <div className="container">
         <Banner/>
         <Section/>
         </div>
      </div>
    );
  }
}

export default Home;

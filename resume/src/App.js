import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonials';
import ContactMe from './components/contactme/contactme';
import Footer from './components/footer/footer';
import resumeData from './components/resume/resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactMe />
        <Footer />
      </div>
    );
  }
}
export default App;
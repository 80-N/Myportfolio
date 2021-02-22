import React, { Component } from 'react';
export default class Header extends Component {

  render() {
    
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      <header id="home">
      <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">ACCUEIL</a></li>
            <li><a className="smoothscroll" href="#about">A PROPOS ...</a></li>
            <li><a className="smoothscroll" href="#resume">CV</a></li>
            <li><a className="smoothscroll" href="#portfolio">PORTFOLIO</a></li>
            <li><a className="smoothscroll" href="#testimonials">TEMOIGNAGES</a></li>
            <li><a className="smoothscroll" href="#contact">CONTACT</a></li>
            <li><a className="smoothscroll" href="#contact"> </a></li>
            <label className="switch"><input type="checkbox" className="checkbox" onClick="toggleBg()"/>
            <span className="slider round"></span></label>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}  
        <div className="row banner">
          <div className="banner-text">
          <h3><span>Mon nom est </span></h3>
            <h1 className="responsive-headline">Etienne NDOUR</h1>
            <h3><span>J'habite à Rennes, en Bretagne. <br/>Je suis développeur web et web mobile. <br/>
             J'adore imaginer, tester, et surtout: me lancer des défis.<br/>Réaliser ce portfolio en était un ... <br/>Et si vous le voulez bien, la suite c'est  
            <a className="smoothscroll" href="#about"> ici</a>.</span>
             </h3>
            <hr />
            <ul className="social">
              <li><a href="https://www.linkedin.com/in/etienne-ndour-77632265/" target="blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/80-N" target="blank"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.facebook.com/etienne.ndour.9" target="blank"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://twitter.com/EtienneNDOUR2" target="blank"><i className="fa fa-twitter" /></a></li>
            </ul>
            <hr />   
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
        <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Je m'appelle {resumeData.name}.</h1>
               <h3>Je suis {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
        </div>
        </div>
      </header>
      </React.Fragment>
    );
  }
}
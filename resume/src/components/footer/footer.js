import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
          <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.facebook.com/etienne.ndour.9" target="blank"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://twitter.com/EtienneNDOUR2" target="blank"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/etienne-ndour-77632265/" target="blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/80-N" target="blank"><i className="fa fa-github" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© E. NDOUR. Sept. 2020</li> 
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}
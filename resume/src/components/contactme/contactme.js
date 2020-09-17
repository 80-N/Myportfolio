import React, { Component } from 'react';
export default class ContactMe extends Component {
  render() {
    return (
       <React.Fragment>
          <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Contact.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">Vous voulez poster une suggestion, une idée, un commentaire, me contacter, 
            poser une question, commander une oeuvre, confier une mission ou quelque autre sujet ?
            écrivez-moi ou retrouvez-moi sur les réseaux sociaux (les icônes ci-dessous) et, c'est promis, je vous répondrais.
            </p>
          </div>
        </div>
        <div className="row">
          {/*<div className="eight columns">
            {/* form */}
            {/*<form action="mailto:etienndour@gmail.com" method="post" encType="text/plain" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Prénom(s) NOM <span className="required">*</span></label>
                  <input type="text" id="contactName" name="contactName" />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" id="contactEmail" name="contactEmail" />
                </div>
                <div>
                  <label htmlFor="contactSubject">Sujet </label>
                  <input type="text" id="contactSubject" name="contactSubject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                </div>
                <div>
                  <a href="mailto:etienndour@gmail.com"><button className="submit">Envoyer</button></a>
                  {/*<span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>*/}
                {/*</div>
              </fieldset>
            </form> {/* Form End */}
            {/*{/* contact-warning */}
            {/*<div id="message-warning"> Erreur ...</div>
            {/* contact-success */}
            {/*<div id="message-success">
              <i className="fa fa-check" />Message envoyé, merci !<br />
            </div>
          </div>*/}
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Addresse :</h4>
              <p className="address">
                Etienne NDOUR<br />
                9, rue de Vern <br />
                Rennes<br />
                <span>FRANCE</span>
              </p>
            </div>
            <div className="widget widget_tweets">
              <h4 className="widget-title"></h4>
              <ul id="twitter">
                <li>
                  <span>
                    <a href="#"></a>
                  </span>
                  <b><a href="#"></a></b>
                </li>
                <li>
                  <span>
                    <a href="#"></a>
                  </span>
                  <b><a href="#"></a></b>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section> {/* Contact Section End*/}
      </React.Fragment>
    );
  }
}
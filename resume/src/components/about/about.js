import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
        <React.Fragment>
           <section id="about">
                  <div className="row">
                    <div className="three columns">
                      <img className="profile-pic" src="images/photoprofil.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                      <h2>A propos ...</h2>
                      <p>Je suis curieux de nature. Mais j'aime beaucoup la création. J'adore bricoler et je suis un "touche-à-tout". Tout y est passé: graphisme-illustration, bande dessinée, auteur littérature jeunesse, 3D, vidéo, ... Au départ, j'ai suivi une formation de graphiste illustrateur, puis j'ai travaillé en free-lance pour des ONG, en Afrique. Mon job d'alors consistait à illustrer des documents destinés à un public analphabète pour faciliter l'apprentissage (éducation) et/ou la compréhension des messages (prévention sanitaire). Puis, je suis devenu prof de dessin.
                         Ensuite, j'ai atterri dans l'hôtellerie (Comment ? Ce serait trop long à expliquer et ceci n'est qu'un résumé ...). Bref, Après de longues années de bons et loyaux services dans ce secteur, avec un insert de trois années de job en agence de marketing, je quitte l'hôtellerie. Je reviens à ce domaine que j'avais beaucoup aimé et que j'avais dû quitter par cas de force majeure : le numérique. Et je compte m'éclater pleinement !
                      </p>
                      <div className="row">
                        <div className="columns contact-details">
                          <h2>Adresse :</h2>
                          <p className="address">
                            <span>Etienne NDOUR</span><br />
                            <span>9, rue de Vern<br />
                              35200
                            </span><br />
                            <span>Rennes</span><br />
                            <span>France</span>
                          </p>
                        </div>
                        <div className="columns download">
                          <p>
                            {/*<a href="#" className="button"><i className="fa fa-download" />Télécharger le CV</a>*/}
                          </p>
                        </div>
                      </div> {/* end row */}
                    </div> {/* end .main-col */}
                  </div>
                </section> 
            </React.Fragment>
    );
  }
}
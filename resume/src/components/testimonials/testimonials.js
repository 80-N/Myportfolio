import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
          <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Témoignages divers</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">

                  <li>
                    <blockquote>
                      <p>Artiste dans l'âme, Etienne adore créer. Il crée tout et toujours. Son fort, c'est d'abord sa curiosité.
                Et il se dit toujours qu'il peut le faire, peu importe le sujet. Continue, mon grand.
                      </p>
                      <cite>Julien P. <i>Illustrateur</i></cite>
                    </blockquote>
                  </li> {/* slide ends */}

                  <li>
                    <blockquote>
                      <p>Etienne est très disponible et aime la découverte. 
                        Beaucoup hésitent à sauter le pas ou à tout remettre à zéro à 50 ans. Lui, il le fait. 
                        C'est la preuve d'une grande envie de toujours avancer. 
                      </p>
                      <cite>Christophe C. <i>Ancien collègue</i></cite>
                    </blockquote>
                  </li> {/* slide ends */}

                  <li>
                    <blockquote>
                      <p>Pouf ! C'est très rapide et très beau. Quelle efficacité ! Merci Etienne.
                      </p>
                      <cite>Emmanuelle. <i>Créatrice de start-up</i></cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section> {/* Testimonials Section End*/}
      </React.Fragment>
    );
  }
}
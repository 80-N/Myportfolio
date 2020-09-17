import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Formation</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>O'Clock. Paris</h3>
                <p className="info">Titre Pro Dév' Web et Web Mobile <span>•</span> <em className="date">Mars - Août 2020</em></p>
                <p>
                  Formation de 700 heures pour apprendre Html5, CSS, PHP, JavaScript, React, Wordpress et SQL !
                  Intensif et fatigant, mais ô combien gratifiant au vu des résultats.
                  Cette formation se termine par une phase dite "APOTHEOSE".
                  Les apprenants constituent des groupes de travail autour d'un projet à réaliser ensemble
                  en se répartissant les rôles: Product Owner, Git Master, Lead-Dev front, Lead-Dev back, Scrum Master, etc.
                  Une présentation finale du produit est faite en direct sur Youtube, avec les élèves des autres promos,
                  le staff péda et admin et tout public invité pour l'auditoire.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Lic. Pro Gestion Hôtelière</h3>
                <p className="info">Univ. Paris 1 Panthéon La Sorbonne <span>•</span> <em className="date">Sept. 2016 - Juin 2017</em></p>
                <p>
                  Comptablité - Gestion comptable - RH - Gestion restauration et achats - Budgets et prévisions -
                  Anglais - Espagnol - 
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>BTS Gestion Hôtelière</h3>
                <p className="info">CNED Grenoble <span>•</span> <em className="date">2014 - 2016</em></p>
                <p>
                Comptablité - Gestion comptable - RH - Gestion restauration et achats - Budgets et prévisions -
                  Anglais - Espagnol - Mathématiques - Mercatique
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Ass. Direction Hôtellerie-Restauration</h3>
                <p className="info">INFA Le Manoir - Gouvieux (60) <span>•</span> <em className="date">Sept 2011 - Juin 2012</em></p>
                <p>
                Comptablité - Gestion comptable - RH - Gestion restauration et achats - Budgets et prévisions -
                  Anglais - Espagnol - Mathématiques - Mercatique
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>INFA Nogent-sur-Marne</h3>
                <p className="info">Infographie multimedia - 3ds Max <span>•</span> <em className="date">Sept. 2010 - Juin 2011</em></p>
                <p>
                  Modélisation 3D avec 3Ds Max. Character Design, Rigging, Texturing, Animation, Effets Spéciaux, Lighting, Montage vidéo, etc. 
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>ENBA - DAKAR (Sénégal)</h3>
                <p className="info">Communication <span>•</span> <em className="date">Oct. 1989 - Juin 1993</em></p>
                <p>
                  Graphisme, arts plastiques, modelage et sculpture, dessin d'illustration, publicité, marketing et communication, 
                  bande dessinée, conception PLV, etc. 
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Expérience pro</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Dév' WEB</h3>
                <p className="info">Junior UI Designer <span>•</span> <em className="date">Mars 2020 - ... </em></p>
                <p>
                  J'ai réalisé quelques applications un peu avant et pendant ma formation chez O'Clock. J'ai aussi monté des vidéos pour moi-même et/ou fait quelques missions de graphisme pour des amis.
                  Je suis entrain de monter un site web d'apprentissage en ligne du code de la route pour illétrés.
                  Certaines de ces réalisations sont présentées dans mon <a className="smoothscroll" href="#portfolio"><strong>portfolio</strong></a>.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>DIVERSES AUTRES REALISATIONS</h3>
                <p className="info">Graphiste illustrateur <span>•</span> <em className="date">Avril 2012 - ... </em></p>
                <p>
                  Je touche beaucoup à plein de domaine du monde artistique, nottament l'illustration.<br/>
                  Mais il y a aussi :<br/>
                  - la bande dessinée,<br/>
                  - le modelage,<br/>
                  - la 3D,<br/>
                  - la littérature jeunesse (un album édité chez L'Harmattan. Paris Avril 2012),<br/>
                  - le modélisme naval,<br/>
                  - ...<br/>
                  Une partie de ces réalisations est visible <a className="smoothscroll" href="#portfolio"><strong>ici</strong></a> aussi.

                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Langages-logiciels</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>D'Avril à décembre 2010, j'ai travaillé en agence de marketing et communication, comme graphiste-créa.
              Mon tout premier logiciel fut Illustrator.
              C'est pour cette raison que j'adore Illustrator et m'en sers énormément dans mes créations.
              Puis il y a Photoshop, incontournable pour tout graphiste, débutant ou cnfirmé.
              Premiere Pro m'a surtout servi quand j'ai fait de la 3D, notamment pour les montages vidéos,
              avec After Effects en appoint là aussi.
              HTML5 et CSS3 ont été les premiers outils de programmation que j'ai appris à connaître, avec PHP.
              React est arrivé en dernier et c'est tout récent.
              Pour ce dernier, j'en suis encore à la phase découverte et c'est déjà énorme ce qu'on arrive à faire avec.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                <li><span className="bar-expand illustrator" /><em>Adobe Premiere Pro CS</em></li>
                <li><span className="bar-expand wordpress" /><em>PHP</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>ReactJs</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
import React, { Component } from 'react';
import './Connectwith.css';
import Smith from './icom/Smith';
import Hamilton from './icom/Hamilton';
import Bizau from './icom/Bizau';
import Carreon from './icom/Carreon';
import Pieters from './icom/Pieters';
import Kutak from './icom/Kutak';
import Klabnik from './icom/Klabnik';
import Miller from './icom/Miller';
import Moazam from './icom/Moazam';
import Btngetthelpnow from './bottoms/Btngethelpnow';


class Connectwith extends Component {
    render() {
      return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                <Smith/>
                <Hamilton/>
                <Bizau/>
              </div>
              <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                <Carreon/>
                <Pieters/>
                <Kutak/>
              </div>
              <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                <Klabnik/>
                <Miller/>
                <Moazam/>
              </div>
            </div>
            <h4 className="gain">Gain access to our community of developers</h4>
            <div className="button">
                <Btngetthelpnow/>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-xs-12 col-lg-12">
                <img src="https://next-cdn.codementor.io/static/images/landing-page/dev-section-l.png" className="mx-auto d-block" alt="dev"/>
              </div>
            </div>
            <h2>What you'll find on Codementor</h2>
            <div className="icom">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                    <div className="variety">
                      <div className="technologies">
                      <div className="finding-variety">
                        <img src="https://next-cdn.codementor.io/static/images/landing-page/finding-variety.png" className="img-thumbnail" alt="dev"/>
                      </div>
                      <h5 className="h6">A variety of technologies</h5>
                      <div className="help">
                        <p>From help with JavaScript, Swift,<br/>
                           React, and more, keep up to speed <br/>
                           with good programming practices.</p>
                      </div>
                      </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                    <div className="variety">
                      <div className="technologies">
                      <div className="finding-variety">
                        <img src="https://next-cdn.codementor.io/static/images/landing-page/finding-reliable.png" className="img-thumbnail" alt="dev"/>
                      </div>
                      <h5 className="h6">Code help from experts</h5>
                      <div className="help">
                      <p>Our mentors go through a strict <br/>
                         application and vetting process that  <br/>
                         evaluates their coding skills.</p>
                      </div>
                      </div>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                <div className="variety">
                      <div className="technologies">
                      <div className="finding-variety">
                        <img src="https://next-cdn.codementor.io/static/images/landing-page/finding-effortless.png" className="img-thumbnail" alt="dev"/>
                      </div>
                      <h5 className="h6">Effortless setup</h5>
                      <div className="help">
                      <p>Take advantage of our easy set up and <br/>
                         billing process to connect with a  <br/>
                         coding mentor or developer right away.
                           </p>
                      </div>
                      </div>
                    </div> 
                </div>
              </div>
              </div>
              </div>
          </div>
      );
    } 
  }
  
  export default Connectwith;
import React, { Component } from 'react';
import './Conter.css';
import Btngetthelpnow from './bottoms/Btngethelpnow';
import Btnhow from './bottoms/Btnhow';

class Conter extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-sm-5 col-md-5 col-xs-5 col-lg-5">
          <div className="sectionInner">
              <h4 className="mentor">Find a mentor</h4>
              <h3>Get 1:1 live programming help tailored to you</h3>
              <ul className="list-group-flush">
                  <li className="list-group" ><i className="get"></i>Get answers to coding problems</li>
                  <li className="list-group"><i className="personalize"></i>Personalize your learning experience</li>
                  <li className="list-group"><i className="learn"></i>Learn to code and find wwhat went wrong</li>
              </ul>
              <div className="Btn">
                <Btngetthelpnow></Btngetthelpnow>
                <Btnhow/>      
              </div>
              <div className="pic"><img src="https://next-cdn.codementor.io/static/images/landing-page/feature-mentor-l.png" className="img rounded-top" alt="pc"/></div>
          </div> 
          </div>
          <div className="col-sm-7 col-md-7 col-xs-7 col-lg-7">
            <div className="section">
              <img src="https://next-cdn.codementor.io/static/images/landing-page/screen-mentor.png" alt="Live programming help so you can learn to code" className="img-fluid"/>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Conter;
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
              
                  <div className="iteml" ><i className="fas fa-ambulance"></i>  Get answers to coding problems</div>
                  <div className="iteml"><i className="fa fa-address-card"></i>  Personalize your learning experience</div>
                  <div className="iteml"><i className="fa fa-at"></i>  Learn to code and find wwhat went wrong</div>
                  <div className="Btn">
                      <Btngetthelpnow></Btngetthelpnow>
                      <Btnhow/>      
                </div>
              <div className="pic"><img src="https://next-cdn.codementor.io/static/images/landing-page/feature-mentor-l.png" className="img rounded-top float-left" alt="pc"/></div>
          </div> 
          </div>
          <div className="col-sm-7 col-md-7 col-xs-7 col-lg-7">
            <div className="section">
              <img src="https://next-cdn.codementor.io/static/images/landing-page/screen-mentor.png" alt="Live programming help so you can learn to code" className="rounded-vcircle img-fluid"/>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Conter;
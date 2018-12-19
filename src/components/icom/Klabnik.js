import React, { Component } from 'react';
import './icom.css';

class Klabnik extends Component {
    render() {
      return (
        <div className="group">
          <div className="img">
            <img src="https://next-cdn.codementor.io/static/images/landing-page/developers/Steve.png" className="rounded-circle" alt="jessamyn"/>
          </div>
          <h5>Steve Klabnik</h5>
          <h6>Active Ruby on Rails & Rust Developer</h6>
        </div>
        );
      }
    }
      
export default Klabnik;
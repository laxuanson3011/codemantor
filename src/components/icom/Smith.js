import React, { Component } from 'react';
import './icom.css';

class Smith extends Component {
    render() {
      return (
        <div className="group">
          <div className="img">
            <img src="https://next-cdn.codementor.io/static/images/landing-page/developers/Jessamyn.png" className="rounded-circle" alt="jessamyn"/>
          </div>
          <h5>Jessamyn Smith</h5>
          <h6>Experienced Python Developer</h6>
        </div>
        );
      }
    }
      
export default Smith;
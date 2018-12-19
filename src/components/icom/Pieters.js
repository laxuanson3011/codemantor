import React, { Component } from 'react';
import './icom.css';

class Pieters extends Component {
    render() {
      return (
        <div className="group">
          <div className="img">
            <img src="https://next-cdn.codementor.io/static/images/landing-page/developers/Martijn.png" className="rounded-circle" alt="jessamyn"/>
          </div>
          <h5>Martijn Pieters</h5>
          <h6>#1 Stack Overflow Python Answerer</h6>
        </div>
        );
      }
    }
      
export default Pieters;
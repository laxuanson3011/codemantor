import React, { Component } from 'react';
import './icom.css';

class Kutak extends Component {
    render() {
      return (
        <div className="group">
          <div className="img">
            <img src="https://next-cdn.codementor.io/static/images/landing-page/developers/Miroslav.png" className="rounded-circle" alt="jessamyn"/>
          </div>
          <h5>Miroslav Kuťák</h5>
          <h6>Senior iOS Developer</h6>
        </div>
        );
      }
    }
      
export default Kutak;
import React, { Component } from 'react';
import './icom.css';

class Miller extends Component {
    render() {
      return (
        <div className="group">
          <div className="img">
            <img src="https://next-cdn.codementor.io/static/images/landing-page/developers/Josh.png" className="rounded-circle" alt="jessamyn"/>
          </div>
          <h5>Josh David Miller</h5>
          <h6>CEO @MindboxStudios React Expert</h6>
        </div>
        );
      }
    }
      
export default Miller;
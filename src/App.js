import React, { Component } from 'react';
import './App.css';
import Btngethelpnow from './components/Btngethelpnow';
import Btnhowitworks from './components/Btnhowitworks';
import Conter from './components/Conter';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* phan menu */}
                  <div className="container-fluid">
                    <div className="center">
                      <div className="text-center">
                        <div className="page-header">
                            <h1>Find a developer for</h1>
                            <h1> live programming help & freelance jobs</h1>
                            <div className="btn">
                              <Btngethelpnow/>
                              <Btnhowitworks/>
                            </div>
                        </div>    
                      </div>
                    </div>
                    <div id="box"> 
                      <div className="img">
                        <img src="https://next-cdn.codementor.io/static/images/landing-page/hero-l.png" class="img-fluid"/>
                      </div></div>
                  <div className="wrapper">
                    <h2>On-demand marketplace</h2>
                    <h2>for software developers</h2>
                  </div>
                  <div id="main">
                    <Conter/>
                  </div>
                </div>
      </div>   
    );
  }
}

export default App;

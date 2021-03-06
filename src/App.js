import React, { Component } from 'react';
import './App.css';
import Btngethelpnow from './components/bottoms/Btngethelpnow';
import Btnhowitworks from './components/bottoms/Btnhowitworks';
import Conter from './components/Conter';
import Canter from './components/Canter';
import Connectwith from './components/Connectwith';
import CenterMode from './components/CenterMode';
import Btnbecome from './components/bottoms/Btnbecome';
import Btnget from './components/bottoms/Btnget';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* phan menu */}
                  <div className="container-fluid">
                  <div className="row">
                  <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12">
                    <div className="center">
                      <div className="text-center">
                        <div className="page-header">
                            <h1 className="display-5">Find a developer for</h1>
                            <h1 className="display-5"> live programming help & freelance jobs</h1>
                      
                              <Btngethelpnow/>
                              <Btnhowitworks/>
                            
                        </div>    
                      </div>
                      <div className="box"> 
                      
                        <img src="https://next-cdn.codementor.io/static/images/landing-page/hero-l.png" className="rounded img-fluid" alt="codemen"/>
                    
                    </div>
                    </div>
                    
                  <div className="wrapper">
                    <h2 className="on">On-demand marketplace</h2>
                    <h2 className="on">for software developers</h2>
                  </div>
                  <div id="main">
                    <div className="top">
                      <Conter/>
                    </div>
                    <div className="bottom">
                      <Canter/>
                    </div>
                  </div>
                  <div id="pagebody">
                    <div className="title">
                    <h1 className="connect">Connect with 8000+ top developers anytime</h1>
                    </div>
                    <div className="icom">
                      <Connectwith/>
                    </div>
                  </div>
                  <div className="slider">
                    <CenterMode/>
                  </div>
                  <div id="text">
                    <div className="txtbottom">
                      
                        <h2 className="getstarted">Get Started Today</h2>
                         
                              <Btnget/>
                               <div className="tx">or</div>
                              <Btnbecome/>
                        
                      
                      
                    </div>
                  </div>
                  </div>
                  </div>
                </div>
      </div>   
    );
  }
}

export default App;

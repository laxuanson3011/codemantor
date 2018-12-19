import React, { Component } from 'react';
import './Canter.css';
import Btngetstarted from './bottoms/Btngetstarted';
import Btnlearnmore from './bottoms/Btnlearnmore'

class Canter extends Component {
    render() {
      return (
          <div className="container-fluid">
          <div className="row">
            <div className="col-sm-7 col-md-7 col-xs-7 col-lg-7">
                <div className="left">
                    <img src="https://next-cdn.codementor.io/static/images/landing-page/screen-cmx.png" alt="Hire programmers online for freelance work" className="img-fluid"/>
                </div>
            </div>
            <div className="col-sm-5 col-md-5 col-xs-5 col-lg-5">
                <div className="sectionInner">
                    <h4 className="freelance">Find a freelance developer</h4>
                    <h3>Hire world-class developers with ease</h3>
                    <div className="list-group-flush">
                        <div className="item" ><i className="find"></i>Find a reliable developer to work with your team</div>
                        <div className="item"><i className="build"></i>Build ffeatures for your existing product</div>
                        <div className="item"><i className="turn"></i>Turn your great idea into an MVT</div>
                    </div>
                    <div className="Btn">
                        <Btngetstarted/>
                        <Btnlearnmore/>
                    </div>
                    <div className="pic"><img src="https://next-cdn.codementor.io/static/images/landing-page/feature-freelancer-l.png" className="img rounded-top" alt="pc"/></div>
                </div>
            </div>
          </div>
          </div>
      );
    }
  }
  
  export default Canter;
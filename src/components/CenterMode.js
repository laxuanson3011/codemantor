import React, { Component } from "react";
import Slider from "react-slick";
import { baseUrl } from "./config";
import "./CenterMode.css";




export default class CenterMode extends Component  {
  render() {
    const settings = {
      customPaging: function(i) {
        
        return (
          
            <img src={`${baseUrl}/abstract0${i + 1}.png`} className="w-10" alt="1"/>
            
        );

      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      
      <div>
        
        <Slider {...settings}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                <img src={baseUrl + "/abstract01.png"} className="w-50 mx-auto d-block" alt="2"/>
                <div className="name">
                  <a href="https://tomtunguz.com/learning-online/">Tomasz Tunguz</a>
                </div>
                <div className="description">
                Venture Capitalist at Redpoint
                </div>
              </div>
              <div className="col-sm-8 col-md-8 col-xs-8 col-lg-8">
                <span className="purport">
                  Within 15 min, I was online with a seasoned engineer who was editing my code and pointing out my errors … this was the first time I’ve ever experienced the potential of the Internet to transform learning.
                
                </span>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                <img src={baseUrl + "/abstract02.png"} className="w-50 mx-auto d-block" alt="2"/>
                <div className="name">
                  <a href="https://twitter.com/Jamie_Fiedler/status/809204226882682880">Jamie Fiedler</a>
                </div>
                <div className="description">
                   @Jamie_Fiedler
                </div>
              </div>
              <div className="col-sm-8 col-md-8 col-xs-8 col-lg-8">
                <span className="purport">
                  Our team loves using @CodementorIO as a resource. You can bounce ideas with someone w/ different tech strengths to problem solve. #edtech
                </span>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                <img src={baseUrl + "/abstract03.png"} className="w-50 mx-auto d-block" alt="2"/>
                <div className="name">
                  <a href="https://twitter.com/chrisgscott/status/763090310851211264">Chris Scott</a>
                </div>
                <div className="description">
                  @chrisgscott
                </div>
              </div>
              <div className="col-sm-8 col-md-8 col-xs-8 col-lg-8">
                <span className="purport">
                 Just had a fantastic first experience with @CodementorIO. John resolved my issue within 20-ish minutes, from across the globe.
                </span>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-xs-4 col-lg-4">
                <img src={baseUrl + "/abstract04.png"} className="w-50 mx-auto d-block" alt="2"/>
                <div className="name">
                  <a href="https://twitter.com/SeanMEverett/status/754354508264726528">Sean Everett</a>
                </div>
                <div className="description">
                  @SeanMEverett
                </div>
              </div>
              <div className="col-sm-8 col-md-8 col-xs-8 col-lg-8">
                <span className="purport">
                This is probably the single greatest resource to learn app dev or basics of AI. $10 for 15 mins to remove a blocker. 
                  
                </span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

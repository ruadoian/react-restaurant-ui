import React from 'react';

import {SubHeading} from "../../components";
import {images} from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title='Contact'/>

      <h1 className="headtext__cormorant">Find Us</h1>

      <p className="p__opensans" 
        style={{color:'#AAAAAA'}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <p className="p__opensans" 
        style={{color:'#DCCA87', fontWeight:'400', margin:'2rem 0 1rem 0' }}>Opening Hours</p>
      <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
      <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>  

      <button type='submit' style={{marginTop:'4rem'}} className="custom__button">Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="Find Us" />
    </div>
  </div>
);

export default FindUs;

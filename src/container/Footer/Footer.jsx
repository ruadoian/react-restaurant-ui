import React from 'react';
import {FiFacebook,FiInstagram, FiTwitter} from 'react-icons/fi';
import {SubHeading} from '../../components';
import './Footer.css'; 

const Footer = () => (
  <div className="app__footer app__bg flex__center" id="footer">

    <div className="app__newsletter">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
      <div className="app__emailAddress">
        <input type="email" name="email" placeholder='Email Address' />
        <button type='button' className="custom__button">Subscribe</button>
      </div>
    </div>

    <div className="app__wrapper-info">
      <div className='app__contact'>
        <p className="p__cormorant" style={{color:'#DCCA87'}}>Contact Us</p>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className='app__footer-info'>
        <h1 className="headtext__cormorant">Gerícht</h1>
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
        <SubHeading/>
        <FiFacebook/>
        <FiInstagram/>
        <FiTwitter/>
      </div>
      <div className='app__workhours'>
        <p className="p__cormorant" style={{color:'#DCCA87'}}>Working Hours</p>
        <p className="p__opensans">Monday-Friday:
08:00 am -12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:
07:00am -11:00 pm</p>
      </div>
     
    </div>

    <div className="app__footer-copyright">
      <p className="p__opensans">2022 Gerícht-Ian Ruado. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;

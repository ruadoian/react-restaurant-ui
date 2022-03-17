import React from 'react';

import './SpecialMenu.css';
import {images, data} from "../../constants";
import { SubHeading, MenuItem } from '../../components';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center padding__section" id="menu">
     
      <div className="app__specialMenu-title">
        <SubHeading title="Menu That Fits your Palatte"/>
        <h1 className="headtext__cormorant">
          Today's Special
        </h1>
      </div>

      <div className="app__specialMenu-menu">

          <div className="app__specialMenu_menu_wine flex__center">
            <p className="app__specialMenu_menu_heading">Wine & Beer</p>
            <div className="app__specialMenu_menu-items">
              {data.wines.map((wine, index)=>(
                <MenuItem key={wine.title + index} 
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}   />
              ))}
            </div>
          </div>

          <div className="app__specialMenu_menu-img">
            <img src={images.menu} alt="menu image" />
          </div>

        
          <div className="app__specialMenu_menu_cocktails flex__center">
          <p className="app__specialMenu_menu_heading">Cocktails</p>
              <div className="app__specialMenu_menu-items">
                {data.cocktails.map((cocktail, index) =>(
                  <MenuItem keys={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                ))}
              </div>
          </div>

      </div>
      
      <div style={{marginTop:'25px'}}>
          <button className="custom__button" type='button'>View More</button>
      </div>
      
  </div>
);

export default SpecialMenu;

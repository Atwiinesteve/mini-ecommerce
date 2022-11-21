import React from 'react'

import '../components/Header.css'

import heroImage from '../images/favpng_shopping-bag-clip-art.png'

function Header() {

  return (
    <div className="hero__area">
      {/* Text Area */}
      <div className="text__area">
        <div className="main__heading">
          <p>shop all the way to your happiness</p>
        </div>
        <div className="opening__text">
          <p>
            Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. 
            Reprehenderit, non? Qui tempora 
            possimus iste dolore ratione 
            obcaecati, a recusandae dolorem.
          </p>
        </div>
        <div className="opening__buttons">
          <button className="shop__now">shop now</button>
          <button className="view_products">view products</button>
        </div>
      </div>
      {/* Image Area */}
      <div className="hero__image">
        <img src={heroImage} alt="shopping" />
      </div>
    </div>
  );

}

export default Header
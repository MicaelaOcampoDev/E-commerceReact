import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id adipisci natus molestiae, cumque dolores iste vitae aspernatur voluptate veniam magnam tempora optio voluptatum dolorum sint laboriosam suscipit numquam velit eius.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita, repellendus incidunt iste doloribus ex dolore, aperiam repudiandae amet harum laudantium. Accusantium repudiandae natus iste tempora veniam tenetur corrupti id?</span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Lamastore</span>
          <span className="copyright"> Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
            <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer

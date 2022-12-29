import React, { Component } from 'react';
import surat from "../assets/surat.png";

const Features =()=> {
    return (
        <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn1.goibibo.com/voy_ing/t_fs/jamnagar-dwarka-148824937022o.jpeg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dwaraka</h1>
          <h2>38,873 population</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://www.india.com/wp-content/uploads/2019/05/Vembanad-Lake-in-Kerala.-.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lake Vembanad</h1>
          <h2>30,000 Population</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://gumlet.assettype.com/nationalherald%2F2021-11%2F0a0fdcc6-925f-44d2-b3a2-ff2167e2e105%2FMumbai.png?rect=219%2C0%2C1191%2C670&auto=format%2Ccompress&fmt=webp&w=400&dpr=2.6"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>93,56,962 population</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://myheartrumblings.files.wordpress.com/2016/02/dsc_0041.jpg?w=748"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Nachugunta</h1>
          <h2>6,696 population</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={surat}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Surat</h1>
          <h2>57,784,000 population</h2>
        </div>
      </div>
 
    </div>
    )
}

export default Features;
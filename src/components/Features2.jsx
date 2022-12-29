import React, { Component } from 'react';
import surat from "../assets/surat.png";

const Features =()=> {
    return (
        <div className="featured">
      <div className="featuredItem">
        <img
          src="https://img.rezdy.com/PRODUCT_IMAGE/162527/LKI6008003_lg.JPG"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Arabian Sea</h1>
          <h2>3.862 million km²</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cff2.earth.com/uploads/2018/04/29140208/Growing-dead-zone-in-the-Arabian-Sea-is-now-worse-than-feared.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bay of Bengal</h1>
          <h2>2.172 million km²</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.indianexpress.com/2021/06/Lakshadweep-1-1.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Indian Ocean</h1>
          <h2>70.56 million km²</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://img.huffingtonpost.com/asset/5cd9d7142100005800d082f2.jpeg?ops=1778_1000"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lakshadweep</h1>
          <h2>32.62 km²</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/VizagPort.jpg/250px-VizagPort.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sri Lanka</h1>
          <h2>65,610 km²</h2>
        </div>
      </div>
 
    </div>
    )
}

export default Features;
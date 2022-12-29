import React from "react";
import { Link } from "react-router-dom";

// import {DisplayLottie} from "../components/DisplayLottie";

//  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import {Details} from "../components";

// import {Navigate} from "react-router-dom";


function Home() {

  // const navigate = useNavigate();

  // const [goTo,setgoTo] = React.useState(false);

  // if (goTo) {
  //   return <Navigate to = "/details"/>;
  // }
  return (
    <div id="home" className='name'>

      <h1><span><b>WATER QUALITY MONITORING</b></span><br /> Using Remote Sensing data trained on ARIMA, a type of statistical model used to analyze and forecast time series Data Model</h1>
      <p className='details'>The proposed system is built on the foundation of a Auto Regression and Moving Average. When compared to other classification algorithms, the amount of pre-processing required by a Time Series Analysis Statsmodel i.e., ARIMA is significantly less.</p><br></br>

      {/* <Link to="/about" className="cv-btn">Know More</Link> */}

      <a href="https://skavith-aqua.up.railway.app/" className="cv-btn" rel="noopener noreferrer">know More</a>
      {/* <button onClick={() => {
          setgoTo(true);
        }} className = "cv-btn">Know More</button> */}
      {/* <button onClick={()=>{
          navigate('/details');
        }} className='cv-btn'>Know More</button> */}
    </div>
  );
};

export default Home;
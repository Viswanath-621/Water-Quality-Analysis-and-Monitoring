import styles from "./style";
import {Footer, Navbar} from "./components";
import {Home, Features,Features2, Dwaraka, Locations, About,Details} from "./components";
// import {DisplayLottie} from "./components";
// import 'style.css'
import satellite from '../src/assets/satellite.gif'
// import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App1()
// {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/details" element = {<Details/>}/> 
//         </Routes>
//       </Router>
//     </div>
//   );
// }

function App (){
  return (
    
  <div id = "container">
    {/* <App1/> */}
  <div className="bg-primary w-full overflow-hidden" >
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} `}>
        <Navbar />
      </div>
    </div>
  </div>

    
    
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} hero-section`}>
        <Home />
        <img className="hero-img" src={satellite} alt="satellite" />
      </div>
      {/* <img src={DisplayLottie} alt="" /> */}
    </div> 

    <div className="hero-location">
      <Locations/>
      <div>
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
      <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
      <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
      <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
        </svg>
      </div>
    </div>

    <div className="hero-featured">
      <div className="hero-para"><h1 id ="features">Information Collected From 10 Different Locations</h1></div>
      <center>
        <div className="content">
          <i><h2>Giovanni</h2>
          <h2>Giovanni</h2></i>
        </div><br/>
        <div className="hero-para1"><h1 class="animate-charcter"><i>Earth Data</i></h1></div>
      </center>
      <br/><Features/><br/>
      <center>
        
      <div className="content">
          <i><h2>&nbsp;NASA</h2>
          <h2>&nbsp;NASA</h2></i>
        </div><br/>
        <div className="hero-para1"><h1 class="animate-charcter"><i>Ocean Color </i></h1></div>
      </center>
      
      <Features2/>
      </div>

      <div><Dwaraka/></div> 
      
      <div>
      <About/>
    </div>

      

    
    <div className="lastt">
    <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
    </div>

  </div>
  </div>
  )
  };

export default App;

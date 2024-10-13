import './App.css';
import './map.css';
import './background.css';
import alan from "./images/alan.png";
import loc from "./images/loc.png";
import justinc from "./images/justinc.png";
import justinv from "./images/justinv.png";
import React, { useState, useEffect } from "react";
import {CyberEl12, CyberEl79, CyberEl77, CyberEl51,} from 'react-cyber-elements';
import Starfield from 'react-starfield';

function App() {

  // const [cursor, setCursor] = useState('default');

  // const changeCursor = () => {
  //   setCursor(cursor === 'default' ? 'pointer' : 'default');
  // };

  const [target, setTarget] = useState("");

  function selectionView() {
    var logo = document.getElementById("logo");
    logo.style.display = "none";
    
    var selectionview = document.getElementById("selection-view");
    selectionview.style.display = "flex";
    
    var cursor = 'crosshair';
    document.getElementById("App").style.cursor = cursor;
  }

  const pictureids = ["alan", "loc", "justinc", "justinv"];

  function dimPictures(name) {
    document.getElementById(name).style.width = "140px";
    document.getElementById(name).style.height = "140px";
    document.getElementById(name).style.filter = "brightness(100%)";

    for (let i = 0; i < pictureids.length; i++) {
      if (pictureids[i] != name) {
        document.getElementById(pictureids[i]).style.filter = "brightness(50%)";
        document.getElementById(pictureids[i]).style.width = "100px";
        document.getElementById(pictureids[i]).style.height = "100px";
      }
    }
  }

  function getPicture() {
    if (target === "alan") return alan;
    if (target === "loc") return loc;
    if (target === "justinc") return justinc;
    if (target === "justinv")  return justinv;
  }

  function loadingView() {
    document.getElementById("selection-view").style.display = "none";
    document.getElementById("action-view").style.display = "flex";
  }

  const [targetFound, setTargetFound] = useState(false);

  function isLoading() {
    if (targetFound) {
      document.getElementById("finding-target").innerHTML = "TARGET FOUND";
      document.getElementById("finding-target").style.color = "green";
      document.getElementById("action-container").style.display = "flex";
    }
  }

  const [actionOption, setActionOption] = useState(0);

  function liveView() {
    document.getElementById("action-view").style.display = "none";
    document.getElementById("live-view").style.display = "flex";
  }

  return (
    <body>
    <div className="App" id="App">

    <Starfield
        starCount={1300}
        starColor={[255, 255, 255]}
        speedFactor={0.15}
        backgroundColor="black"
      />

    {/* <CyberEl83 className="map" /> */}

    <div className='logo' id="logo">
      <div><CyberEl51 className="logo-top-left"/></div>
      <div><CyberEl79 className="logo-top-right"/></div>
      <div className='logo-item'>A</div>
      <div className='logo-item'>
        <div className='logo-dot'>
          <CyberEl12 className="aim-dot" onClick={selectionView}/></div>
        <div className='logo-i'>I</div>
      </div>
      <div className='logo-item'>M</div>
      <div><CyberEl77 className="logo-bottom"/></div>
    </div>
    
    <div className="selection-view" id="selection-view">

      {/* <div><CyberEl87 className="selection-background"/></div> */}

      <div className="selection-header">Select your target</div>
      
      <div className="picture-container">
        <img className="selection-picture" src={alan} id="alan" onClick={() => {setTarget("alan");dimPictures("alan")}}/>
        <img className="selection-picture" src={loc} id="loc" onClick={() => {setTarget("loc");dimPictures("loc")}}/>
        <img className="selection-picture" src={justinc} id="justinc" onClick={() => {setTarget("justinc");dimPictures("justinc")}}/>
        <img className="selection-picture" src={justinv} id="justinv" onClick={() => {setTarget("justinv");dimPictures("justinv")}}/>
      </div>

      <div className="lock-on" onClick={loadingView}>&lt; lock on {target} &gt;</div>

    </div>
    
    <div className="action-view" id="action-view">
  
      <img className="selected-target" src={getPicture()} />

      <div className="finding-target" id="finding-target">finding target...</div>
      <button onClick={() => {setTargetFound(true);isLoading()}}>found</button>
      
      <div className="action-container" id="action-container">
        
        <button className="attack-button" onClick={() => {setActionOption(1);liveView()}}>🗡 ATTACK 🗡</button>
        
        <button className="follow-button" onClick={() => {setActionOption(2);liveView()}}>🔎 FOLLOW 🔎</button>

      </div>
    </div>

    <div className="live-view" id="live-view">
      live view
    </div>

    </div>
    </body>
  );
}
export default App;

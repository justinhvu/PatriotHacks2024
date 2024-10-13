import alan from "./images/alan.png";
import loc from "./images/loc.png";
import justinc from "./images/justinc.png";
import justinv from "./images/justinv.png";
import React, { useState, useEffect } from 'react';
import './App.css';
import {CyberEl12} from 'react-cyber-elements';

const aftertext = " . . .";

function App() {
  const [animate, setAnimate] = useState(false);
  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
      loadingView();
      }, 1500);
  };
  
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
      document.getElementById("action-container").style.display = "flex";
    }
  }

  const [actionOption, setActionOption] = useState(0);

  function liveView() {
    document.getElementById("action-view").style.display = "none";
    document.getElementById("live-view").style.display = "flex";
  }
  /*const handleClickFadeOut = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false); //REMOVE WHEN BUTTON WORKS
    }, 1000);
  };*/
  
  const getSelectionPictureClass = (targetPicture) => {
    if (animate && target !== targetPicture) {
      return 'slide-out-button';
    }
    else if (animate) {
      return 'enlarge';
    } else {
      return ''; // No animation if not animating
    }
  };

  return (
    <div className="App" id="App">

    <div className='logo' id="logo">
      <div class='logo-item'>A</div>
      <div class='logo-item'>
        <div class='logo-dot'>
          <CyberEl12 className="aim-dot" onClick={selectionView}/></div>
        <div class='logo-i'>I</div>
      </div>
      <div class='logo-item'>M</div>
    </div>
    
    <div className={`selection-view`} id="selection-view">

      <div className={`selection-header`}>Select your target</div>
      
      <div className={`picture-container' : ''}`}>
        <img className={`selection-picture ${getSelectionPictureClass("alan")}`} src={alan} id="alan" onClick={() => {setTarget("alan");dimPictures("alan")}}/>
        <div class = 'divider'></div>
        <img className={`selection-picture ${getSelectionPictureClass("loc")}`} src={loc} id="loc" onClick={() => {setTarget("loc");dimPictures("loc")}}/>
        <div class = 'divider'></div>
        <img className={`selection-picture ${getSelectionPictureClass("justinc")}`} src={justinc} id="justinc" onClick={() => {setTarget("justinc");dimPictures("justinc")}}/>
        <div class = 'divider'></div>
        <img className={`selection-picture ${getSelectionPictureClass("justinv")}`} src={justinv} id="justinv" onClick={() => {setTarget("justinv");dimPictures("justinv")}}/>
      </div>

      <div className="lock-on" onClick={() => {handleClick()}}>&lt; lock on {target} &gt;</div>

    </div>
    
    <div className="action-view" id="action-view">
  
      <img className="selected-target" src={getPicture()} />

      <div className="finding-target" id="finding-target">finding target...</div>
      <button className="found" onClick={() => {setTargetFound(true);isLoading()}}>found</button>
      
      <div className="action-container" id="action-container">
        
        <button className="action-attack" onClick={() => {setActionOption(1);liveView()}}>🗡 ATTACK 🗡</button>

        <button className="action-follow" onClick={() => {setActionOption(2);liveView()}}>🔎 FOLLOW 🔎</button>

      </div>
    </div>

    <div className="live-view" id="live-view">
      live view
    </div>

    </div>
  );
}
export default App;

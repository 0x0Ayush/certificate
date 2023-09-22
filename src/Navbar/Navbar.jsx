import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import styled from 'styled-components';
import "./Navbar.css";
import logooo from'../images/logooo.gif';
import profile from '../images/profile.png';
// import Home from "../Pages/Home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faAward , faIdCard, faCircleInfo, faLightbulb} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { type } from "@testing-library/user-event/dist/types/utility";


const Navbar = () => {

  // const [hover, setHover] = useState(false);

  const buttonStyle = {
    background: '#BA5E00',
    color: 'white',
    width: '100px',
    border: 'none',
    padding: '15px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    
  };

  
  return (
    
    <div className="Main-header">
      <div className="header">
        <div className='logo'> 
          <a href="/home">
            <img src={logooo} type="video/gif/" autoPlay loop muted width={230} 
             
            /> 
          </a>

        </div>

        <nav className="navbar">

          <div className="Home">
            <a href="/home">
              <i><FontAwesomeIcon icon={faHouseChimney} className="Home-icon"   /></i> Home
            </a>
          </div>

          <div className="Get-document">
            <a href="/getdocument">
              <i><FontAwesomeIcon icon={faIdCard} className="Get-icon"/></i> Get Document
              </a>
          </div>

          <div className="Issued-document">
            <a href="/issueddocument">
              <i><FontAwesomeIcon icon={faAward} className="Issued-icon"/></i> Issued Document
            </a>
          </div>

          <div className="About">
            <a href="/About">
              <i><FontAwesomeIcon icon={faCircleInfo} className="About-icon"/></i> About</a>
          </div>

          <div className="Help">
            <a href="/help">
              <i><FontAwesomeIcon icon={faLightbulb} className="Help-icon"/></i> Help</a>
          </div>
        </nav>

        <ConnectWallet style={buttonStyle}/>

        {/* <div className="hero">
          <img src={profile} className="user-pic" ></img>

          <div className="sub-menu-wrap">
            <div className="sub-menu">
              <div className="user-info">
                <img src={profile} ></img>
                <h2>keyur patel</h2>
              </div>
              <hr></hr>

              <a href="#" className=" sub-menu-link">
                <p>Info</p>
              
              </a>
            </div>
          </div> */}
        {/* </div> */}
      </div> 
    </div>
  );
};

export default Navbar;

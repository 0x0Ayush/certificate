import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import "./Navbar.css";
import logooo from'../images/logooo.gif';
// import Home from "../Pages/Home/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faAward , faIdCard, faCircleInfo, faLightbulb} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { type } from "@testing-library/user-event/dist/types/utility";


const Navbar = () => {
  return (
    <div className="Main-header">
      <div className="header">
        <div className='logo'> 
          <a href="/home">
            <img src={logooo} type="video/gif/" autoPlay loop muted width={230} 
              style={{background: "transparent"}}
            /> 
          </a>

        </div>

        <nav className="navbar">

          <div className="Home">
            <a href="/home">
              <i><FontAwesomeIcon icon={faHouseChimney}  /></i> Home
            </a>
          </div>

          <div className="Get-document">
            <a href="/getdocument">
              <i><FontAwesomeIcon icon={faIdCard} /></i>Get Document
              </a>
          </div>

          <div className="Issued-document">
            <a href="/issueddocument">
              <i><FontAwesomeIcon icon={faAward} /></i>Issued Document
            </a>
          </div>

          <div className="About">
            <a href="/About">
              <i><FontAwesomeIcon icon={faCircleInfo} /></i>About</a>
          </div>

          <div className="Help">
            <a href="/help">
              <i><FontAwesomeIcon icon={faLightbulb} /></i>Help</a>
          </div>
        </nav>

        <ConnectWallet 
          dropdownPosition={{ 
             side: "right",
             align: "center",
             }}
        />
      </div> 
    </div>
  );
};

export default Navbar;

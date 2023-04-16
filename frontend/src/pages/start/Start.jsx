

import "./start.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "../../components/header/Navbar";


function Start() {
  // used to do the routing of pages on clicking the respective button
  const navigate = useNavigate();

  const navigateToIndividual = () => {
    // navigate to /individual
    navigate("/individual");
  };

  const navigateToCorp = () => {
    // navigate to /corporation
    navigate("/corporation");
  };

  return (
    <div className="text">
      <Navbar/>
      <div className="welcome">
        {/* <div className="logo-welcome">
              hello
        </div> */}
        <div className="info">

        <div>
            <h1 className="starth1">Welcome to KYConnect</h1>
            <h2 className="starth2">Are you an individual or a corporation?</h2>
          </div>
            <div className="button-container">
              <button className="btn-primary" onClick={navigateToIndividual}>
                Individual
              </button>
              <button className="btn-secondary" onClick={navigateToCorp}>
                Corporate
              </button>
        </div>


        </div>
        
      </div>
      
      
    </div>
  );
}

export default Start;

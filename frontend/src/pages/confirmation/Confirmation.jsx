import React ,{useEffect,useState} from 'react';
import './confirmation.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/header/Navbar';
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Footer from '../../components/footer/Footer';
import { Routes, Route, useNavigate } from "react-router-dom";




function Confirmation() {
  let bool=true;

  // const handleDownload = () => {
  //   // Use window.location to navigate to the download endpoint
  //   window.location.href = '/download-pdf';
  // };

  const navigate = useNavigate();
  const navigateIndividual = () => {
    // navigate to /
    navigate("/individual");
};

// const [mess, setMess] = useState('Your KYC process has been successfully verified. Your declaration form has been sent to your registered email address. Thank you for choosing our service!');
const [display, setDisplay] = useState(true);



  return (
    <div className='confirmation-container'>
          
          <div className='confirmation'>
              <Navbar/>
              <div className='tick'>
                      <FontAwesomeIcon className='tick-icon' icon={faCircleCheck}/>
                      <div className='thanks'>
                          Congratulations!
                      </div>
                      {/* <div className='explain'>
                            That's all we need to start verifying your identity
                      </div> */}
                     
                      <div className='space'>
                        <div className='desc'>Your KYC process has been successfully verified. </div>
                        <div className='desc'>The declaration form has been sent to your registered email address. </div>
                        <div className='desc'>Thank you for choosing our service! </div>
                      
                       
                      
                      </div>
                      {/* <div>
                          <h1>PDF Download Example</h1>
                          <button onClick={handleDownload}>Download PDF</button>
                      </div> */}

                     {/* <button onClick={navigateIndividual}>Go back</button> */}
                      
              </div> 
          </div>
          <div className='foot'>
               <Footer/>
    
          </div>
          
    </div>
  )
}

export default Confirmation
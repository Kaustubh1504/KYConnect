import "./individual.css";
import React, { useRef, useEffect, useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import Navbar from "../../components/header/Navbar";
import Footer from "../../components/footer/Footer";
import Confirmation from "../confirmation/Confirmation";
import { Routes, Route, useNavigate } from "react-router-dom";

import axios from 'axios'



function Individual() {

  const navigate = useNavigate();

  // ALL VARIABLES
  const [count,setCount] = useState(1);
  const [step, setStep] = useState(0);
  const [phone, setPhone] = useState('');
  const [validPhone, setValidPhone] = useState(false);
  const [errPhone, setErrPhone] = useState('');
  const [PhoneOtpVisible, setPhoneOtpVisible] = useState(false);
  const [validPhoneOtp, setValidPhoneOtp] = useState(false);
  const [phoneOTP, setPhoneOTP] = useState('');
  const [errPhoneOTP, setErrPhoneOTP] = useState('');
  const [email, setEmail] = useState('');
  const [validMail, setValidMail] = useState(false);
  const [errMail, setErrMail] = useState('');
  const [mailOtpVisible, setMailOtpVisible] = useState('');
  const [validMailOtp, setValidMailOtp] = useState(false)
  const [errMailOTP, setErrMailOTP] = useState('');
  const [mailOTP, setMailOTP] = useState('');
  const [oneFilled, setOneFilled] = useState(false);
  const [errFirstName, setErrorFirstName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [errMiddleName, setErrorMiddleName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [errLastName, setErrorLastName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errDOB, setErrDOB] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [marital, setMarital] = useState('');
  const [twofilled, setTwoFilled] = useState(false);
  const [errAddress, setErrAddress] = useState('');
  const [address, setAddress] = useState('');
  const [errCity, setErrCity] = useState('');
  const [city, setCity] = useState('');
  const [errState, setErrState] = useState('');
  const [state, setState] = useState('');
  const [errCountry, setErrCountry] = useState('');
  const [country, setCountry] = useState('');
  const [errPostal, setErrPostal] = useState('');
  const [postal, setPostal] = useState('');
  const [threeFilled, setThreeFilled] = useState(false);
  const [validPanNo, setValidPanNo] = useState(false);
  const [errPanNo, setErrPanNo] = useState('');
  const [panNo, setPanNo] = useState('');
  const [errPanCard, setErrPanCard] = useState(false);
  const [panCard, setPanCard] = useState(null);
  const [errAadharNo, setErrAadharNo] = useState('');
  const [validAadharNo, setValidAadharNo] = useState(false)
  const [aadharNo, setAadharNo] = useState('');
  const [aadharOtp, setAadharOtp] = useState('')
  const [errAadharOtp, setErrAadharOtp] = useState('');
  const [validAadharOtp, setValidAadharOtp] = useState(false);
  const [errAadharFront, setErrAadharFront] = useState('');
  const [aadharfront, setAadharFront] = useState(null);
  const [errAadharBack, setErrAadharBack] = useState('');
  const [aadharback, setAadharBack] = useState(null);
  const [fourFilled, setFourFilled] = useState(false);
  const [errPhoto, setErrPhoto] = useState('');
  const [photo, setPhoto] = useState(null);
  const [errSign, setErrSign] = useState('');
  const [sign, setSign] = useState(null);
  const [account, setAccount] = useState('');
  const [fiveFilled, setFiveFilled] = useState(false);
  const [messageOne, setMessageOne] = useState('');
  const [messageTwo, setMessageTwo] = useState('');
  const [messageThree, setMessageThree] = useState('');
  const [messageFour, setMessageFour] = useState('');
  const [messageFive, setMessageFive] = useState('');
  const [otpVerified, setOtpVerified] = useState('');
  const [mailVerified, setMailVerified] = useState('');


 


  
  
  const defaultData = () => {
    if(!gender){
      setGender("Male");
    }
    if(!marital){
      setMarital("UnMarried");
    }
    if(!account){
      setAccount("Savings");
    }
    if(!dob){
      setDob("00/00/0000");
    }
  }
  
  const backend_url = "http://localhost:8000"


  






  // ALL FUNCTIONS
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if(!e.target.value){
      setErrPhone("Phone is required")
    }
    else if(e.target.value.length != 10){
      console.log("Please Enter Valid phone number")
      setErrPhone("Invalid Phone Number")
    }
    else{
      console.log("Phone no is correct")
      setValidPhone(true)
      setErrPhone('')
    }
  };


  const handlesendOtpPhone = async () => {
    setPhoneOtpVisible(true);
    try {
      axios.post(`${backend_url}/sendandverify/sendPhoneOtp`, {
        Phone : phone
      }).then(
        console.log("Sent OTP to Phone")
      )
    }catch (error) {
      console.error(error);
    }
  }


  const handlePhoneOTPChange = (e) =>{
    setPhoneOTP(e.target.value);
    if(phoneOTP.length != 5){
      setErrPhoneOTP("Please Enter a valid OTP");
      setValidPhoneOtp(false)
    }
    else{
      setErrPhoneOTP('');
      setValidPhoneOtp(true)
    }
    // console.log(validPhoneOtp);
  }


  const handleSubmitOtpPhone = (e) => {
    // console.log("hi");
    e.preventDefault();
    // Call your backend API here to verify the OTP sent to the provided phone number
    const data = {
      Phone : phone,
      otp : phoneOTP,
    };
    
    axios.post(`${backend_url}/sendandverify/verifyPhoneOtp`, data)
    .then((res) => {
      console.log(res);
      if(res.data === "Approved")
        setOtpVerified('Phone Number Verified')
      else  
        setOtpVerified('Phone Number not Verified')
    }).catch((err)=>{
      console.log(err)
    })
  };



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(email) ) {
      // this is a valid email address
      setValidMail(true)
      setErrMail('')
    }
    else {
        // invalid email, maybe show an error to the user.
        setErrMail("Please Enter a valid email address");
    }
  };


  const handlesendOTpEmail = async () => {
    setMailOtpVisible(true)
    try{
      axios.post(`${backend_url}/sendandverifyMail/sendMailOtp`,{
        "mail" : email
      })
      .then((res) => {
        console.log(res)
      })
    }catch(err){
      console.log(err);
    }
  };


  const handleMailOTPChange = (e) =>{
    setMailOTP(e.target.value);
    if(mailOTP.length != 5){
      setErrMailOTP("Please Enter a valid OTP");
      setValidMailOtp(false)
    }
    else{
      setErrMailOTP('');
      setValidMailOtp(true)
    }
  }


  const handleSubmitOtpEmail = (e) => {
    e.preventDefault();
    const data = {
      otp: mailOTP,
    };

    axios.post(`${backend_url}/sendandverifyMail/verifyMailOtp`, data)
    .then((res) => {
      console.log(res);
      if(res.data === "verified")
        setMailVerified('Mail ID Verified')
      else
        setMailVerified('Mail ID not Verified')
    }).catch((err)=>{
      console.log(err)
    })
  };


  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if(!e.target.value){
      setErrorFirstName("First Name is required");
    }
    else{
      setErrorFirstName('');
    }
  }


  const handleMiddleNameChange = (e) => {
    setMiddleName(e.target.value);
    if(!e.target.value){
      setErrorMiddleName("Middle Name is required");
    }
    else{
      setErrorMiddleName('');
    }
  }


  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if(!e.target.value){
      setErrorLastName("Last Name is required");
    }
    else{
      setErrorLastName('');
    }
  }


  const handleDobChange = (e) => {
    setDob(e.target.value)
    if (!e.target.value) {
      setErrDOB("DOB is required");
    } else {
      setErrDOB('');
    }
  }


  const handleAddressChange = (e) => {
    setAddress(e.target.value)
    if(!e.target.value){
      setErrAddress("Address is required");
    }
    else{
      setErrAddress('');
    }
  }


  const handleCityChange = (e) => {
    setCity(e.target.value)
    if(!e.target.value){
      setErrCity("City is required")
    }
    else{
      setErrCity('');
    }
  }


  const handleStateChange = (e) => {
    setState(e.target.value);
    if(!e.target.value){
      setErrState("State is required");
    }
    else{
      setErrState('');
    }
  }


  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    if(!e.target.value){
      setErrCountry("Country is required");
    }
    else{
      setErrCountry('');
    }
  }


  const handlePostalChange = (e) => {
    setPostal(e.target.value);
    if(!e.target.value){
      setErrPostal("Postal Code is required");
    }
    else{
      setErrPostal('');
    }
  }


  const handlePanNoChange = (e) => {
    console.log("pan changed!!!")
    setPanNo(e.target.value);
    // let repan =  new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
    let repan =  new RegExp(/^[A-Z]{5}[0-9]{4}$/);
    if(repan.test(panNo)){
      // this is a valid pan card numer
      setErrPanNo('');
    }
    else{
      // invalid pan card number
      setErrPanNo("Please enter a valid Pan Card Number")
    }
    
  }


  const onPanCardChange = (event) => {
    const fileSize = event.target.files[0].size;
    console.log(fileSize);
    if(fileSize > 500000){
      setErrPanCard("Image dimension should be 750 X 750 px")
      console.log(panCard)
      console.log("hello")
    }
    
        if (event.target.files && event.target.files[0]) {
          setPanCard(event.target.files[0]);
        } else {
          setPanCard("http://static1.squarespace.com/static/5898e29c725e25e7132d5a5a/58aa11bc9656ca13c4524c68/58aa11e99656ca13c45253e2/1487540713345/600x400-Image-Placeholder.jpg?format=original");
        }
        
        if (!event.target.value) {
          setErrPanCard("Pan Card is required");
        } else {
          setErrPanCard('')
        }
    

    
  };

 


  const onAadharNoChange = (e) => {
    setAadharNo(e.target.value);
    let readhar = new RegExp(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{3}$/);
    if(readhar.test(aadharNo)){
      // this is a valid aadhar number
      setErrAadharNo('')
      setValidAadharNo(true)
    }
    else{
      // invalid aadhar number
      setErrAadharNo("Please enter a valid Aadhar Card Number")
      setValidAadharNo(false)
    }
  }
  


  const handleAadharOTPChange = (e) =>{
    setAadharOtp(e.target.value);
    if(aadharOtp.length != 5){
      setErrAadharOtp("Please Enter a valid OTP");
      setValidAadharOtp(false)
    }
    else{
      setErrAadharOtp('');
      setValidAadharOtp(true)
    }
    // console.log(validPhoneOtp);
  }


  const handleSubmitOtpAadhar = (e) => {
    // console.log("hi");
    e.preventDefault();
    // Call your backend API here to verify the OTP sent to the provided phone number
  };



  const onAadharFrontChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAadharFront(event.target.files[0]);
    }
    if(!event.target.value){
      setErrAadharFront("Aadhar Card Front is required")
    }
    else{
      setErrAadharFront('');
    }
  };


  const onAadharBackChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAadharBack(event.target.files[0]);
    }
    if(!event.target.value){
      setErrAadharBack("Aadhar Card Back is required")
    }
    else{
      setErrAadharBack('');
    }
  };


  const onPhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(event.target.files[0]);
    }
    if(!event.target.value){
      setErrPhoto("Photo is required")
    }
    else{
      setErrPhoto('');
    }
  };


  const onSignChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSign(event.target.files[0]);
    }
    if(!event.target.value){
      setErrSign("Sign is required")
    }
    else{
      setErrSign('');
    }
  };


  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleSubmitStep2 = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmitStep3 = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleSubmitStep4 = (e) => {
    e.preventDefault();
    setStep(4);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleNext = () => {
    defaultData();
    setStep(step + 1);
  };
  const navigateConfirmation = () => {
    // navigate to /confrimation
    navigate("/confirmation");
};

  const handlesubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('firstName', firstName); 
    formData.append('middleName', middleName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('gender', gender);
    formData.append('maritalStatus', marital);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('country', country);
    formData.append('postalCode', postal);
    formData.append('panid', panNo);
    formData.append('aadhaarid', aadharNo);
    formData.append('selfieImage', photo);
    formData.append('signature', sign);
    formData.append('panImage', panCard);
    formData.append('aadhaarFrontImage', aadharfront);
    formData.append('aadhaarBackImage', aadharback);
    formData.append('account', account);



    // const navigate = useN/avigate();
    const navigateFinal = () => {
      // navigate to /final
      navigate("/final");
  };



    axios.post(`${backend_url}/customer/saveCustomer`, formData)
    .then((res) => {
      console.log(res.data);
      if(res.data==='nadhar'){
        setErrAadharFront("Aadhar credentials did not match");
        setStep(3);
        console.log(count)
        if(count>=3){
          console.log("Limit Ended")
          navigateFinal();
        }
          

        else  
          setCount(count+1)

      }else if(res.data==='nface'){
        setErrPhoto("Face did not match");
        setStep(4);

      }else if(res.data==='npan'){
        setErrPanNo("Pan Card credentials did not match");
        setStep(3);
      }else if(res.data==='goboi'){
        // setErrPanCard("Pan Card credentials did not match");
        navigateConfirmation()
      }
      // navigateConfirmation()

  
    })
    .catch((err) => {
      console.log(err);
    })
  }

  


  
  
   {/* check if all fields filled */}

   useEffect(() => {
        if (phone && email && phoneOTP && mailOTP && validPhoneOtp && validMailOtp) {
          setOneFilled(true);
          setMessageOne('')
        } 
        else {
          if(oneFilled == false){
            setMessageOne("Please fill all forms")
          }
          setOneFilled(false);
        }

        if (firstName && middleName && lastName && dob && gender && marital) {
          setTwoFilled(true);
          setMessageTwo('')
        } 
        else {
          if(twofilled == false){
            setMessageTwo("Please fill all forms")
          }
          setTwoFilled(false);
        }

        if (address && city && state && country && postal) {
          setThreeFilled(true);
          setMessageThree('');
        } 
        else {
          if(threeFilled == false){
            setMessageThree("Please fill all forms")
          }
          setThreeFilled(false);
        }

        if (panNo && panCard && aadharNo && aadharfront && aadharback) {
          setFourFilled(true);
          setMessageFour('');
        } 
        else {
          if(fourFilled == false){
            setMessageFour("Please fill all forms")
          }
          setFourFilled(false);
        }

        if (phone && sign && account) {
          setFiveFilled(true);
          setMessageFive('')
        } 
        else {
          if(fiveFilled == false){
            setMessageFive("Please fill all forms")
          }
          setFiveFilled(false);
        }
  });

 

  




  const individual = {firstName, middleName, lastName, email, dob, gender, marital, phone, address, city, state, country, postal, panNo, panCard, aadharNo, aadharfront, aadharback, photo, sign, account}
  console.log(individual);



























  return (
    <div className="container">
        
      <div className="form">

      <Navbar/>
      
        <Stepper className="stepper" activeStep={step} alternativeLabel>
        <Step>
            <StepLabel>Verification</StepLabel>
          </Step>
          <Step>
            <StepLabel>Personal Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Address Detials</StepLabel>
          </Step>
          <Step>
            <StepLabel>Documents</StepLabel>
          </Step>
          <Step>
            <StepLabel>Photos</StepLabel>
          </Step>
        </Stepper>

        

        <form onSubmit={step === 0 ? handleSubmitStep1 : step === 1 ? handleSubmitStep2 : step === 2 ? handleSubmitStep3 : step === 3 ? handleSubmitStep4 : null}>
          
        {step === 0 && (
            <>
              <h3 className="indih3">Step 1: Verify Yourself</h3>

              <div className="verify-yourself">
                {/* RegEx pattern corresponding to the numbers input to be whitelisted */}
                  <label className="label">Phone No <span className="star">*</span> </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    name="phone"
                  />
                  <div className="error">{errPhone}</div>
                  
                
                  <div className="button-container">
                    <button onClick={handlesendOtpPhone} disabled={!validPhone}>Send OTP</button>
                  </div>

                  
                  {
                    PhoneOtpVisible &&
                    <div>
                      <label className="label">Enter OTP <span className="star">*</span></label>
                      <input
                        type="text"
                        name = "phoneOTP"
                        required
                        value={phoneOTP}
                        onChange={handlePhoneOTPChange}
                      />
                      <div className="error"  >{errPhoneOTP}</div>
                      <div className="button-container">
                        <button onClick={handleSubmitOtpPhone} disabled={!validPhoneOtp}>Verify</button>
                        <div className="error" style={{color:"green"}}>{otpVerified}</div>
                      </div>
                    </div>
                  }
    
                  

                  <label className="label">Email <span className="star">*</span></label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <div className="error">{errMail}</div>
                      
                                  
                  <div className="button-container">
                    <button onClick={handlesendOTpEmail} disabled={!validMail}>Send OTP</button>
                  </div>

                  {
                    mailOtpVisible && 
                    <div>
                      <label className="label">Enter OTP <span className="star">*</span></label>
                      <input
                        type="text"
                        required
                        value={mailOTP}
                        onChange={handleMailOTPChange}
                      />
                      <div className="error">{errMailOTP}</div>
                          
                      
                      <div className="button-container">
                        <button onClick={handleSubmitOtpEmail} disabled={!validMailOtp}>Verify</button>
                        <div className="error" style={{color:"green"}}>{mailVerified}</div>
                      </div>
                    </div>
                  }

              </div>

              {
                messageOne && <div className="error" style={{paddingLeft: "20px"}}>{messageOne}</div>
              }

              

              
              <div className="button-container" style={{padding: "20px"}} >
                <button type = "submit" onClick={handleNext} disabled={!oneFilled} >Next</button>
              </div>
            </>
          )}


          {step === 1 && (
            <>
              <h3 className="indih3">Step 2: Add Personal Details</h3>

              <div className="personal-details">
                  {/* Whitelisting only characters and setting character limit to 256 characters */}
                  <label className="label">First Name <span className="star">*</span></label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                  <div className="error">{errFirstName}</div>
                      
                  
                  <label className="label">Middle Name <span className="star">*</span></label>
                  <input
                    type="text"
                    required
                    value={middleName}
                    onChange={handleMiddleNameChange}
                  />
                  <div className="error">{errMiddleName}</div>
                      
                  
                  <label className="label">Last Name <span className="star">*</span></label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                  <div className="error">{errLastName}</div>
                      
                  
                  <label className="label">Phone No <span className="star">*</span></label>
                  <input
                    type="text"
                    required
                    value={phone}
                    placeholder = {phone}
                    disabled = {true}
                  />


                  <label className="label">Email <span className="star">*</span></label>
                  <input
                    type="text"
                    required
                    value={email}
                    placeholder = {email}
                    disabled = {true}
                  />


                  <label className="label">Date of Birth <span className="star">*</span></label>
                  <input
                    type="date"
                    required
                    value={dob}
                    onChange={handleDobChange}
                  />
                  <div className="error">{errDOB}</div>
                      
                  
                  <label className="label">Gender <span className="star">*</span></label>
                  <select className="select"
              
                    value={gender}
                    defaultValue="Male"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Non-Binary">Non-Binary</option>
                  </select>


                  <label className="label">Marital Status <span className="star">*</span></label>
                  <select className="select"
                    value={marital}
                    onChange={(e) => setMarital(e.target.value)}
                  >
                    <option value="Married">Married</option>
                    <option value="UnMarried">UnMarried</option>
                  </select>
                
              </div>

              {
                messageTwo && <div className="error" style={{paddingLeft: "20px"}}>{messageTwo}</div>
              }


              <div className="button-container" style={{padding: "20px"}} >
                <button onClick={handleBack}>Previous</button>
                <button onClick={handleNext} disabled={!twofilled}>Next</button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="indih3">Step 3: Add Address Details</h3>

              <div className="address-details">
              
                  <label className="label">Address <span className="star">*</span></label>
                  <textarea 
                      className="textArea"
                      required
                      value = {address}
                      onChange = {handleAddressChange}
                    ></textarea>
                    <div className="error">{errAddress}</div>
                      
                  
                  <label className="label">City <span className="star">*</span></label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={handleCityChange}
                  />
                  <div className="error">{errCity}</div>
                      
                
                  <label className="label">State <span className="star">*</span></label>
                  <input
                    type="text"
                    required
                    value={state}
                    onChange={handleStateChange}
                  />
                  <div className="error">{errState}</div>
                      
                  
                  <label className="label">Country <span className="star">*</span></label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={handleCountryChange}
                  />
                  <div className="error">{errCountry}</div>
                      
                  
                  <label className="label">Postal Code <span className="star">*</span></label>
                  <input
                    type="text"
                    required
                    value={postal}
                    onChange={handlePostalChange}
                  />
                  <div className="error">{errPostal}</div>
                    

              </div>

              {
                messageThree && <div className="error" style={{paddingLeft: "20px"}}>{messageThree}</div>
              }

              <div className="button-container" style={{padding: "20px"}} >
                <button onClick={handleBack}>Previous</button>
                <button onClick={handleNext} disabled={!threeFilled}>Next</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="indih3">Step 4: Add Document Details</h3>

              <div className="document-details">

                  <label className="label">Pan No <span className="star"></span></label>
                  <input
                    type="text"
                    required
                    value={panNo}
                    onChange={handlePanNoChange}
                  />
                  <div className="error">{errPanNo}</div>
                      
                  {/* Allow only valid image formats and extensions. */}
                  <label className="label">Pan Card <span className="star"></span></label>
                  <div className="error">Image dimensions should be 750 X 750 px</div>
                  <input
                    type="file"
                    required
                    onChange={onPanCardChange}
                    className="filetype"
                  />
                  <div className="input">
                      {panCard && (
                            <img className="view" src={URL.createObjectURL(panCard)} alt="Pan Card" />
                          )}
                          {!panCard && (
                            <img className="view-default" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYTiVtZ3rtd6hegNapkmeYcUCLWXqbDcNQw&usqp=CAU" alt="Placeholder" />
                      )}
                  </div>
                  <div className="error">{errPanCard}</div>
                      
                  
                  <label className="label">Aadhar No <span className="star">*</span></label>
                  <input
                    type="text"
                    required
                    value={aadharNo}
                    onChange={onAadharNoChange}
                  />
                  <div className="error">{errAadharNo}</div>



                  {
                    validAadharNo &&
                    <div>
                      <div className="error">OTP has been sent to your linked mobile number</div>
                      <label className="label">Enter OTP <span className="star">*</span></label>
                      <input
                        type="text"
                        name = "AadharOtp"
                        required
                        value={aadharOtp}
                        onChange={handleAadharOTPChange}
                      />
                      <div className="error">{errAadharOtp}</div>
                      <div className="button-container">
                        <button onClick={handleSubmitOtpAadhar} disabled={!validAadharOtp}>Verify</button>
                      </div>
                    </div>
                  }
                      
                  
                  <label className="label"> Aadhar Card Front <span className="star">*</span></label>
                  <div className="error">File size should be less than 500kb</div>
                  <input
                    type="file"
                    required
                    onChange={onAadharFrontChange}
                    className="filetype"
                  />
                  <div className="input">
                      {aadharfront && (
                            <img className="view" src={URL.createObjectURL(aadharfront)} alt="Aadhar Front" />
                          )}
                          {!aadharfront && (
                            <img className="view-default" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYTiVtZ3rtd6hegNapkmeYcUCLWXqbDcNQw&usqp=CAU" alt="Placeholder" />
                      )}
                  </div>
                  <div className="error">{errAadharFront}</div>
                      
                  
      
                  <label className="label"> Aadhar Card Back <span className="star">*</span></label>
                  <div className="error">Image dimensions should be 750 X 750 px</div>
                  <input
                    type="file"
                    required
                    onChange={onAadharBackChange}
                    className="filetype"
                  />
                  <div className="input">
                      {aadharback && (
                            <img className="view" src={URL.createObjectURL(aadharback)} alt="Aadhar Back" />
                          )}
                          {!aadharback && (
                            <img className="view-default" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYTiVtZ3rtd6hegNapkmeYcUCLWXqbDcNQw&usqp=CAU" alt="Placeholder" />
                      )}
                  </div>
                  <div className="error">{errAadharBack}</div>
                    
                
              </div>

              {
                messageFour && <div className="error" style={{paddingLeft: "20px"}}>{messageFour}</div>
              }

              <div className="button-container" style={{padding: "20px"}} >
                <button onClick={handleBack}>Previous</button>
                <button onClick={handleNext} disabled={!fourFilled}>Next</button>
              </div>
            </>
            )}

          {step === 4 && (
            <>
              <h3 className="indih3">Step 5: Smile!</h3>

              <div className="smile">
                  <label className="label">Your Photo <span className="star">*</span></label>
    
                  <div className="error">File size should be less than 500kb</div>
                  <input
                    type="file"
                    required
                    onChange={onPhotoChange}
                    className="filetype"
                  />
                  <div className="input">
                      {photo && (
                            <img className="view" src={URL.createObjectURL(photo)} alt="Photo" />
                          )}
                          {!photo && (
                            <img className="view-default" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYTiVtZ3rtd6hegNapkmeYcUCLWXqbDcNQw&usqp=CAU" alt="Placeholder" />
                      )}
                  </div>
                  <div className="error">{errPhoto}</div>
                      
                  
                  <label className="label">Sign <span className="star">*</span></label>
                  <input
                    type="file"
                    required
                    onChange={onSignChange}
                    className="filetype"
                  />
                  <div className="input">
                      {sign && (
                            <img className="view" src={URL.createObjectURL(sign)} alt="Sign" />
                          )}
                          {!sign && (
                            <img className="view-default" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYTiVtZ3rtd6hegNapkmeYcUCLWXqbDcNQw&usqp=CAU" alt="Placeholder" />
                      )}
                  </div>
                  <div className="error">{errSign}</div>
                      
                  
                  <label className="label">Account <span className="star">*</span></label>
                  <select className="select"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                  >
                    <option value="Savings">Savings</option>
                    <option value="Loan">Loan</option>
                  </select>

              </div>

              {
                messageFive && <div className="error" style={{padding: "20px"}}>{messageFive}</div>
              }

              <div className="button-container" style={{padding: "20px"}} >
                <button onClick={handleBack}>Previous</button>
                <button onClick={handlesubmit} disabled={!fiveFilled}>Submit</button>
              </div>
            </>
          )}

            <Footer/>
        </form>
        
      </div>
      
    </div>
    
  );
}

export default Individual;
import "./corporation.css"
import React, { useEffect, useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

function Corporation() {
  const [step, setStep] = useState(0);
  const [companyName, setCompanyName] = useState('');
  const [registrationNo, setRegistrationNo] = useState('');
  const [companyMail, setCompanyMail] = useState('');
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [businessType, setBusinessType] = useState('');

  const [managerPanID, setManagerPanID] = useState('');
  const [managerName, setManagerName] = useState('');
  const [managerPhone, setManagerPhone] = useState('');
  const [managerMail, setManagerMail] = useState('');
  const [managerPanFront, setManagerPanFront] = useState(null);
  const onManagerPanFrontChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setManagerPanFront(URL.createObjectURL(event.target.files[0]));
    }
  };
  const [managerPanBack, setManagerPanBack] = useState(null);
  const onManagerPanBackChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setManagerPanBack(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [financeManagerPanID, setFinanceManagerPanID] = useState('');
  const [financeManagerName, setFinanceManagerName] = useState('');
  const [financeManagerPhone, setFinanceManagerPhone] = useState('');
  const [financeManagerMail, setFinanceManagerMail] = useState('');
  const [financeManagerPanFront, setFinanceManagerPanFront] = useState(null);
  const onFinanceManagerPanFrontChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFinanceManagerPanFront(URL.createObjectURL(event.target.files[0]));
    }
  };
  const [financeManagerPanBack, setFinanceManagerPanBack] = useState(null);
  const onFinanceManagerPanBackChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFinanceManagerPanBack(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [directorPanID, setDirectorPanID] = useState('');
  const [directorName, setDirectorName] = useState('');
  const [directorMail, setDirectorMail] = useState('');
  const [directorPhone, setDirectorPhone] = useState('');
  const [directorPanFront, setDirectorPanFront] = useState(null);
  const onDirectorPanFrontChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setDirectorPanFront(URL.createObjectURL(event.target.files[0]));
    }
  };
  const [directorPanBack, setDirectorPanBack] = useState(null);
  const onDirectorPanBackChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setDirectorPanBack(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [managerSelfie, setManagerSelfie] = useState(null);
  const onManagerSelfieChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setManagerSelfie(URL.createObjectURL(event.target.files[0]));
    }
  };
  const [financeManagerSelfie, setFinanceManagerSelfie] = useState(null);
  const onFinanceManagerSelfieChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFinanceManagerSelfie(URL.createObjectURL(event.target.files[0]));
    }
  };
  const [directorSelfie, setDirectorSelfie] = useState(null);
  const onDirectorSelfieChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setDirectorSelfie(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [businessDesc, setBusinessDesc] = useState('');
  const [incorpCertificate, setIncorpCertificate] = useState(null);
  const onIncorpCertificateChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setIncorpCertificate(URL.createObjectURL(event.target.files[0]));
    }
  };
  const [businessLicense, setBusinessLicense] = useState(null);
  const onBusinessLicenseChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setBusinessLicense(URL.createObjectURL(event.target.files[0]));
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

  const handleSubmitStep5 = (e) => {
    e.preventDefault();
    setStep(5);
  };



  const handleBack = () => {
    setStep(step - 1);
  };

  const handleNext = () => {
    setStep(step + 1);
  };


  const corporation = {companyName, registrationNo, companyMail, country, startDate, businessType, managerPanID, managerName,
    managerPhone, managerMail, managerPanFront, managerPanBack, financeManagerPanID, financeManagerName, financeManagerPhone,
    financeManagerMail, financeManagerPanFront, financeManagerPanBack, directorPanID, directorName, directorMail, directorPhone,
    directorPanFront, directorPanBack, managerSelfie, financeManagerSelfie, directorSelfie, businessDesc, incorpCertificate, businessLicense}

  console.log(corporation);
    
  

  return (
    <div className='container'>

      <div className="form">
      <Stepper activeStep={step} alternativeLabel>
          <Step>
            <StepLabel>Company Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Manager Detials</StepLabel>
          </Step>
          <Step>
            <StepLabel>Finance Manager Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Director Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Selfies</StepLabel>
          </Step>
          <Step>
            <StepLabel>Documents</StepLabel>
          </Step>
        </Stepper>



        <form onSubmit={step === 0 ? handleSubmitStep1 : step === 1 ? handleSubmitStep2 : step === 2 ? handleSubmitStep3 : step === 3 ? handleSubmitStep4 : step === 4 ? handleSubmitStep5 : null}>
        {step === 0 && (
            <>
              <h3>Step 1: Add Company Details</h3>

              <div className="company-details">
                <label className="label">Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <label className="label">Registration No</label>
                <input
                  type="text"
                  value={registrationNo}
                  onChange={(e) => setRegistrationNo(e.target.value)}
                />
                <label className="label">Company Email</label>
                <input
                  type="text"
                  value={companyMail}
                  onChange={(e) => setCompanyMail(e.target.value)}
                />
                <label className="label">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <label className="label">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                 <label className="label">Business Type</label>
                <input
                  type="text"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                />
                
              </div>

              <div className="button-container">
                <button onClick={handleNext}>Next</button>
              </div>
            </>
          )}

        {step === 1 && (
            <>
              <h3>Step 2: Add Manager Details</h3>

              <div className="manager-details">
              
                <label className="label">Manager Pan ID</label>
                <input
                  type="text"
                  value={managerPanID}
                  onChange={(e) => setManagerPanID(e.target.value)}
                />
                <label className="label">Manager Name</label>
                <input
                  type="text"
                  value={managerName}
                  onChange={(e) => setManagerName(e.target.value)}
                />
                <label className="label">Manager Phone</label>
                <input
                  type="text"
                  value={managerPhone}
                  onChange={(e) => setManagerPhone(e.target.value)}
                />
                <label className="label">Manager Email ID</label>
                <input
                  type="text"
                  value={managerMail}
                  onChange={(e) => setManagerMail(e.target.value)}
                />
                <label className="label">Manager Pan Front</label>
                <input
                  type="file"
                  onChange={onManagerPanFrontChange}
                  className="filetype"
                />
                <img className="view" alt="preview image" src={managerPanFront} />
                <label className="label">Manager Pan Back</label>
                <input
                  type="file"
                  onChange={onManagerPanBackChange}
                  className="filetype"
                />
                <img className="view" alt="preview image" src={managerPanBack} />

              </div>

              <div className="button-container">
                <button onClick={handleBack}>Previous</button>
                <button onClick={handleNext}>Next</button>
              </div>
            </>
        )}

        {step === 2 && (
            <>
              <h3>Step 3: Add Finance Manager Details</h3>

              <div className="finance-manager-details">
              
                <label className="label">Finance Manager Pan ID</label>
                <input
                  type="text"
                  value={financeManagerPanID}
                  onChange={(e) => setFinanceManagerPanID(e.target.value)}
                />
                <label className="label">Finance Manager Name</label>
                <input
                  type="text"
                  value={financeManagerName}
                  onChange={(e) => setFinanceManagerName(e.target.value)}
                />
                <label className="label">Finance Manager Phone</label>
                <input
                  type="text"
                  value={financeManagerPhone}
                  onChange={(e) => setFinanceManagerPhone(e.target.value)}
                />
                <label className="label">Finance Manager Mail</label>
                <input
                  type="text"
                  value={financeManagerMail}
                  onChange={(e) => setFinanceManagerMail(e.target.value)}
                />
                <label className="label">Finance Manager Pan Front</label>
                <input
                  type="file"
                  onChange={onFinanceManagerPanFrontChange}
                  className="filetype"
                />
                <img className="view" alt="preview image" src={financeManagerPanFront} />
                <label className="label">Finance Manager Pan Back</label>
                <input
                  type="file"
                  onChange={onFinanceManagerPanBackChange}
                  className="filetype"
                />
                <img className="view" alt="preview image" src={financeManagerPanBack} />

              </div>

              <div className="button-container">
                <button onClick={handleBack}>Previous</button>
                <button onClick={handleNext}>Next</button>
              </div>
            </>
        )}

        {step === 3 && (
            <>
              <h3>Step 4: Add Director Details</h3>

              <div className="director-details">
              
                <label className="label">Director Pan ID</label>
                <input
                  type="text"
                  value={directorPanID}
                  onChange={(e) => setDirectorPanID(e.target.value)}
                />
                <label className="label">Director Name</label>
                <input
                  type="text"
                  value={directorName}
                  onChange={(e) => setDirectorName(e.target.value)}
                />
                <label className="label">Director Mail</label>
                <input
                  type="text"
                  value={directorMail}
                  onChange={(e) => setDirectorMail(e.target.value)}
                />
                <label className="label">Director Phone</label>
                <input
                  type="text"
                  value={directorPhone}
                  onChange={(e) => setDirectorPhone(e.target.value)}
                />
                <label className="label">Director Pan Front</label>
                <input
                  type="file"
                  onChange={onDirectorPanFrontChange}
                  className="filetype"
                />
                <img className="view" alt="preview image" src={directorPanFront} />
                <label className="label">Director Pan Back</label>
                <input
                  type="file"
                  onChange={onDirectorPanBackChange}
                  className="filetype"
                />
                <img className="view" alt="preview image" src={directorPanBack} />

              </div>

              <div className="button-container">
                <button onClick={handleBack}>Previous</button>
                <button onClick={handleNext}>Next</button>
              </div>
            </>
        )}

        {step === 4 && (
            <>
              <h3>Step 5: Add Images</h3>

              <div className="images">
              
              <label className="label">Manager Selfie</label>
              <input
                type="file"
                onChange={onManagerSelfieChange}
                className="filetype"
              />
              <img className="view" alt="preview image" src={managerSelfie} />
              <label className="label">Finance Manager Selfie</label>
              <input
                type="file"
                onChange={onFinanceManagerSelfieChange}
                className="filetype"
              />
              <img className="view" alt="preview image" src={financeManagerSelfie} />
              <label className="label">Director Selfie</label>
              <input
                type="file"
                onChange={onDirectorSelfieChange}
                className="filetype"
              />
              <img className="view" alt="preview image" src={directorSelfie} />

              </div>

              <div className="button-container">
                <button onClick={handleBack}>Previous</button>
                <button onClick={handleNext}>Next</button>
              </div>
            </>
        )}

        {step === 5 && (
            <>
              <h3>Step 6: Add Documents</h3>

              <div className="documents">
              <label className="label">Business Description</label>
              <textarea 
                  className="textArea"
                  value = {businessDesc}
                  onChange = {(e) => setBusinessDesc(e.target.value)}
              ></textarea>
              <label className="label">Incorporation Ceritificate</label>
              <input
                type="file"
                onChange={onIncorpCertificateChange}
                className="filetype"
              />
              <img className="view" alt="preview image" src={incorpCertificate} />
              <label className="label">Business License</label>
              <input
                type="file"
                onChange={onBusinessLicenseChange}
                className="filetype"
              />
              <img className="view" alt="preview image" src={businessLicense} />
                
              </div>

              <div className="button-container">
                <button onClick={handleBack}>Previous</button>
                <button onClick={(e) => e.preventDefault()}>Submit</button>
              </div>
            </>
          )}






        </form>
      </div>

      
      
    </div>
  )
}

export default Corporation


























// import React, { useEffect, useState } from "react";
// import "./corporation.css"
// import FormInput from "../../components/formInput/FormInput"

// function Corporation() {
//   const [values, setValues] = useState({
//     companyName:"",
//     registrationNo:"",
//     companyMail:"",
//     country:"",
//     startDate:"",
//     businessType:"",

//     managerPanID:"",
//     managerName:"",
//     managerPhone:"",
//     managerEmail:"",
//     managerPanFront:"",
//     managerPanBack:"",


//     financeManagerPanID:"",
//     financeManagerName:"",
//     financeManagerPhone:"",
//     financeManagerMail:"",
//     financeManagerPanFront:"",
//     financeManagerPanBack:"",


//     directorPanID:"",
//     directorName:"",
//     directorMail:"",
//     directorPhone:"",
//     directorPanFront:"",
//     directorPanBack:"",

//     managerSelfie:"",
//     financeManagerSelfie:"",
//     directorSelfie:"",

//     businessDesc:"",
//     incorpCert:"",
//     businessLicense:"",
//   });

//   const inputs = [
//       {
//         id:1,
//         name: "companyName",
//         type: "text",
//         placeholder: "Company Name",
//         label: "Company Name"
//       },
//       {
//         id:2,
//         name: "registrationNo",
//         type: "text",
//         placeholder: "Company Registration Number",
//         label: "Company Registration Number"
//       },
//       {
//         id:3,
//         name: "companyMail",
//         type: "text",
//         placeholder: "Email ID",
//         label: "Company Mail"
//       },
//       {
//         id:4,
//         name: "country",
//         type: "text",
//         placeholder: "Country",
//         label: "Country"
//       },
//       {
//         id:5,
//         name: "startDate",
//         type: "date",
//         placeholder: "Comapny Start Date",
//         label: "Start Date"
//       },
//       {
//         id:6,
//         name: "businessType",
//         type: "text",
//         placeholder: "Type",
//         label: "Business Type"
//       },


//       {
//         id:7,
//         name: "managerPanID",
//         type: "text",
//         placeholder: "Manager Pan ID",
//         label: "Manager Pan ID"
//       },
//       {
//         id:8,
//         name: "managerName",
//         type: "text",
//         placeholder: "Manager Name",
//         label: "Manager Name"
//       },
//       {
//         id:9,
//         name: "managerPhone",
//         type: "text",
//         placeholder: "Manager Phone",
//         label: "Manager Phone No"
//       },
//       {
//         id:10,
//         name: "managerEmail",
//         type: "text",
//         placeholder: "Manager Email",
//         label: "Manager Email"
//       },
//       {
//         id:11,
//         name: "managerPanFront",
//         type: "text",
//         placeholder: "Manager Pan Front",
//         label: "Manager Pan Front"
//       },
//       {
//         id:12,
//         name: "managerPanBack",
//         type: "text",
//         placeholder: "Manager Pan Back",
//         label: "Manager Pan Back"
//       },


//       {
//         id:13,
//         name: "financeManagerPanID",
//         type: "text",
//         placeholder: "Finance Manager Pan ID",
//         label: "Finance Manager Pan ID"
//       },
//       {
//         id:14,
//         name: "financeManagerName",
//         type: "text",
//         placeholder: "Finance Manager Name",
//         label: "Finance Manager Name"
//       },
//       {
//         id:15,
//         name: "financeManagerPhone",
//         type: "text",
//         placeholder: "Finance Manager Phone",
//         label: "Finance Manager Phone"
//       },
//       {
//         id:16,
//         name: "financeManagerMail",
//         type: "text",
//         placeholder: "Finance Manager Mail",
//         label: "Finance Manager Mail"
//       },
//       {
//         id:17,
//         name: "financeManagerPanFront",
//         type: "text",
//         placeholder: "Finance Manager Pan Front",
//         label: "Finance Manager Pan Front"
//       },
//       {
//         id:18,
//         name: "financeManagerPanBack",
//         type: "text",
//         placeholder: "Finance Manager Pan Back",
//         label: "Finance Manager Pan Back"
//       },


//       {
//         id:19,
//         name: "directorPanID",
//         type: "text",
//         placeholder: "Director Pan ID",
//         label: "Director Pan ID"
//       },
//       {
//         id:20,
//         name: "directorName",
//         type: "text",
//         placeholder: "Director Name",
//         label: "Director Name"
//       },
//       {
//         id:21,
//         name: "directorMail",
//         type: "text",
//         placeholder: "Director Mail",
//         label: "Director Mail"
//       },
//       {
//         id:22,
//         name: "directorPhone",
//         type: "text",
//         placeholder: "Director Phone",
//         label: "Director Phone"
//       },
//       {
//         id:23,
//         name: "directorPanFront",
//         type: "text",
//         placeholder: "Director Pan Front",
//         label: "Director Pan Front"
//       },
//       {
//         id:24,
//         name: "directorPanBack",
//         type: "text",
//         placeholder: "Director Pan Back",
//         label: "Director Pan Back"
//       },


//       {
//         id:25,
//         name: "managerSelfie",
//         type: "text",
//         placeholder: "Manager Selfie",
//         label: "Manager Selfie"
//       },
//       {
//         id:26,
//         name: "financeManagerSelfie",
//         type: "text",
//         placeholder: "Finance Manager Selfie",
//         label: "Finance Manager Selfie"
//       },
//       {
//         id:27,
//         name: "directorSelfie",
//         type: "text",
//         placeholder: "Director Selfie",
//         label: "Director Selfie"
//       },

//       {
//         id:28,
//         name: "businessDesc",
//         type: "text",
//         placeholder: "Business Description",
//         label: "Business Desc"
//       },
//       {
//         id:29,
//         name: "incorpCert",
//         type: "text",
//         placeholder: "Incorporation Certification",
//         label: "Incorporation Certification"
//       },
//       {
//         id:30,
//         name: "businessLicense",
//         type: "text",
//         placeholder: "Business License",
//         label: "Business License"
//       }
      
//   ]

//   const [step, setStep] = useState(0);

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//   }

//   const onChange = (e) => {
//       setValues({ ...values, [e.target.name]: e.target.value});
//   };

//   const inputsToShow = inputs.slice(step * 6, (step + 1) * 6);

//   const isLastStep = (step + 1) * 6 >= inputs.length;

//   const handleNext = () => {
//     if (isLastStep) {
//       // Submit the form if it's the last step
//       handleSubmit();
//     } else {
//       setStep(step + 1);
//     }
//   };

//   const handlePrev = () => {
//     setStep(step - 1);
//   };

//   console.log(values)

//   return (
//     <div className='corporation'>
//       <form onSubmit={handleSubmit}>
//       <h2>Fill the form</h2>
//         {inputsToShow.map((input)=>(
//             <FormInput 
//               key={input.id} 
//               {...input} 
//               value={values[input.name]}
//               onChange={onChange}
//             />
//         ))}
//         <div className="buttons">
//           {step > 0 && (
//             <button type="button" onClick={handlePrev}>
//               Prev
//             </button>
//           )}
//           {!isLastStep && (
//             <button type="button" onClick={handleNext}>
//               Next
//             </button>
//           )}
//           {isLastStep && (
//             <button type="submit">
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Corporation
import { Routes, Route, useNavigate } from "react-router-dom";
// import animation from '/Users/harshitajogi/Desktop/KYConnet/src/assets/kyc.gif'
import animation from '../../assets/kyc.gif'
import './welcome.css'

function Welcome() {

    const navigate = useNavigate();

    const navigateToStart = () => {
        // navigate to /start
        navigate("/start");
    };

    return (
        <div className='welcome-container'>
            <img className="gif" src={animation}/>
            <div className='button-container'>
                <button className='get-started-button' onClick={navigateToStart}>
                    <span>Get Started</span>
                </button>
            </div>
        </div>
    );
}

export default Welcome;

import React, { useState } from "react";
import './Login.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Username, setUsername] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        axios.post("http://localhost:9000/Login", {
            email: email,
            password: password,
            // username : Username,
            // phoneNumber : PhoneNumber ,
            // age : age,
            // country: country 
        })

        .then(response => {
            console.log("Login successful:", response.data);
            // setUsername("");
            // setPassword("");
            setEmail("");
            // setPhoneNumber("");
            // setAge("");
            // setCountry("");
            localStorage.setItem('token', response.data.token);

            // localStorage.setItem('userData', JSON.stringify([ Username , email ,  password , PhoneNumber , age , country ]));
            navigate('/');
        })
        .catch(error => {
            console.error("Error submitting data:", error.response.data.error);
            setErrorMessage(error.response.data.error || 'invald Email or password');
        });
    };
    return (
                <div className='Logcontainer'>
            <div className='Logheader'>
                <div className="Logtext">Login</div>
                <div className="Logunderline"></div>
            </div>
            <div className="Loginputs">
                <div className="Loginput">
                    <img src= {MdEmail}   alt="" />
                    <input id = "field" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="Loginput">
                    <img src={ RiLockPasswordFill } alt="" />
                    <input id = "field" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="Logsubmit-container">
                    <div className="Logsubmit" onClick={handleSubmit}> Send </div>
                </div>
            </div>
            <div className="Logaccouunt" > You don't have an account ?  </div>
            <Link to="/signUp">Sign Up</Link>
        </div>

    );
}

export default Login;

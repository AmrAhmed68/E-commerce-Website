import React, { useState } from "react";
import './SignUP.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaCity } from "react-icons/fa";

const SignUP = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const usernameHandler = (value) => {
    setUsername(value);
  };

  const passwordHandler = (value) => {
    setPassword(value);
  };

  const confirmPasswordHandler = (value) => {
    setConfirmPassword(value);
  };

  const emailHandler = (value) => {
    setEmail(value);
  };

  const phoneNumberHandler = (value) => {
    setPhoneNumber(value);
  };

  const AgeHandler = (value) => {
    setAge(value);
  };

  const countryHandler = (value) => {
    setCountry(value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/signup", {
        username: Username,
        password: Password,
        confirmPassword: ConfirmPassword,
        email: Email,
        phoneNumber: PhoneNumber,
        age: age,
        country: country,
      });


      console.log(response.data);
      setErrorMessage('');
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      setPhoneNumber("");
      setAge("");
      setCountry("");
      alert('SignUp successful!');
      localStorage.setItem('token', response.data.token);

      // localStorage.setItem('userData', JSON.stringify([Username,Email,PhoneNumber,age,country]));
      navigate('/Login');

    } catch (error) {
      console.error("Error submitting data:", error.response.data.error);
      setErrorMessage(error.response.data.error || 'An error occurred during sign up');
    }
    
  };

    return (
        <form onSubmit={handleSignIn}>
        <div className='scontainer'>
            <div className='sheader'>
                <div className="stext">Sign Up</div>
                <div className="sunderline"></div>
            </div>
            <div className="sinputs">
               
                <div className="sinput">
                    <img src={MdOutlineAccountCircle} alt="" />
                    <input type="text" placeholder="UserName" value={Username} onChange={(event) => usernameHandler(event.target.value)}/>
                </div>
                <div className="sinput">
                    <img src={ RiLockPasswordFill } alt="" />
                    <input type="password" placeholder="Password" value={Password} onChange={(event) => passwordHandler(event.target.value)}/>
                </div>
                <div className="sinput">
                    <img src={ RiLockPasswordFill } alt="" />
                    <input type="password" placeholder="Confirm Password" value={ConfirmPassword} onChange={(event) => confirmPasswordHandler(event.target.value)}/>
                </div>
                <div className="sinput">
                    <img src={MdEmail} alt="" />
                    <input type="email" placeholder="Email" value={Email} onChange={(event) => emailHandler(event.target.value)}/>
                </div>
                <div className="sinput">
                    <img src={FaPhoneAlt} alt="" />
                    <input type="text" placeholder="Phone number" value={PhoneNumber} onChange={(event) => phoneNumberHandler(event.target.value)}/>
                </div>
                <div className="sinput">
                    <img src={MdOutlineAccountCircle} alt="" />
                    <input type="text" placeholder="Age" value={age} onChange={(event) => AgeHandler(event.target.value)}/>
                </div>
                <div className="sinput">
                    <img src={FaCity} alt="" />
                    <input type="text" placeholder="country" value={country} onChange={(event) => countryHandler(event.target.value)}/>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="ssubmit-container">
                    <div className="ssubmit" onClick={handleSignIn} > Send </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default SignUP;

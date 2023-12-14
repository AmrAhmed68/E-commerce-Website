import "./Profile.css";

// const Profile = () => {
//   const userData = JSON.parse(localStorage.getItem('userData'));
//   return (
//     <div className='profile-container'>
//       <div className="profile-header">  <h1>Hi {userData[0]} !</h1></div>
//       <div className="profile-details">     
//       <p><strong>Email: {userData[1]}</strong> </p>
//       <p ><strong>Password: {userData[2]}</strong> </p>
//       <p><strong>PhoneNumber: {userData[3]}</strong></p>
//       <p><strong>age: {userData[4]}</strong> </p>
//       <p><strong>country: {userData[5]}</strong> </p>
//     </div>
//     </div>
//   );
// };

// export default Profile;
// Profile.js
import { useState, useEffect } from "react";
import React from 'react';
import axios from 'axios';

const Profile = () => {  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:9000/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      return null;
    }
  };

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData();
      setUserData(data);
    };

    fetchData();
  }, []);

  return (
    <div className='profile-container'>
      <div className="profile-header">  <h1>Hi {userData?.username} !</h1></div>
      <div className="profile-details">     
        <p><strong>Email: {userData?.email}</strong> </p>
        <p><strong>PhoneNumber: {userData?.phoneNumber}</strong></p>
        <p><strong>Age: {userData?.age}</strong> </p>
        <p><strong>Country: {userData?.country}</strong> </p>
      </div>
    </div>
  );
};

export default Profile;

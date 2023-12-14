import "./App.css";
import"./Components/Products/products.css"
import SignUp from "./Components/SignUP/SignUP";
import Login from "./Components/Login/Login";
// import Slider from './Components/Slider';
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import React from 'react';
import  Search  from './Components/Search/Search';
import Contact from "./Components/contant/Contact";
import Profile from "./Components/Profile/profile";
import ProductList from './Components/NavBar/ProductList';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/products/:brand" element={<ProductList />} />
          </Routes>
    </div>
  );
}

export default App;
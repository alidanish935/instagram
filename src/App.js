import React from 'react';
// import logo from './logo.svg';
import LoginPage from './Components/LoginPage/LoginPage';
import SignUpForm from './Components/LoginPage/SignUpForm';
import ForgotPassword from './Components/LoginPage/ForgotPassword';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import Navbar from './Components/LoginPage/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/LoginPage/Home';
// import AppBar from './Components/LoginPage/AppBar';

function App() {
  return (
    <div className="App">
      {/* <AppBar/> */}
      {/* <Home /> */}
       <GoogleOAuthProvider clientId="475180653765-j2kiiqs930l43lc7ko642bahhubbeivk.apps.googleusercontent.com">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/SignUpForm' element={<SignUpForm/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
        <Route path='/NavBar' element={<Navbar/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;

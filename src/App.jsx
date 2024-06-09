import React, { useState } from "react";
import NavBar from "./LandingPage/NavBar.jsx";
import Hero from "./LandingPage/Hero.jsx";
import Login from "./Accounts/Login.jsx";
import SignUpForm from "./Accounts/SignUp.jsx";
import SideNav from "./Sidepanel/SideNav.jsx";

import Footer from "./LandingPage/Footer.jsx";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  const handleBackToHome = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    setShowSignUp(false);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <NavBar
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
        onLogoutClick={handleLogoutClick} // Add onLogoutClick prop
        isLoggedIn={isLoggedIn} // Pass isLoggedIn state
        onBackToHome={handleBackToHome}
      />

      {isLoggedIn ? (
        <>
          <SideNav />
          <Footer />
        </>
      ) : (
        <>
          {!showLogin && !showSignUp && (
            <Hero onSignUpClick={handleSignUpClick} />
          )}
          {showSignUp && <SignUpForm />}
          {showLogin && (
            <Login
              onSignUpClick={handleSignUpClick}
              onLoginSuccess={handleLoginSuccess}
            />
          )}
          <Footer />
        </>
      )}
    </>
  );
}

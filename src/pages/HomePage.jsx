import React, { useState, useCallback } from 'react';
import Logo from '../assets/logo.png';
import LogoText from '../assets/logo-text.png';
import LoginApparel from '../assets/login-apparel.png';
import { useNavigate } from 'react-router';
import useGoogleScript from '../hooks/useGoogleScript';
import useFacebookScript from '../hooks/useFacebookScript';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const navigate = useNavigate();

  
  const handleGoogleResponse = useCallback(async (response) => {
    if (!response.credential) {
      console.error('No ID token received.');
      return;
    }
    
    const endpoint =
    activeTab === 'signup'
    ? `${import.meta.env.VITE_BASE_URL}/authentication/google-signup/`
    : `${import.meta.env.VITE_BASE_URL}/authentication/google-signin/`;
    
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_token: response.credential }),
      });
      
      const data = await res.json();
      console.log('Backend response:', data);
      
      if (!res.ok) {
        // Check for known backend error message
        if (
          activeTab === 'signup' &&
          data?.error === 'User with email already exists'
        ) {
          alert('User already exists. Please log in instead.');
          return; // Don't proceed further or redirect
        }
        
        // Handle other errors
        alert(`An error occurred: ${data?.error || 'Unknown error'}`);
        return;
      }
      
      const { access, refresh } = data;
      sessionStorage.setItem('accessToken', access);
      sessionStorage.setItem('refreshToken', refresh); 
      
      alert(
        activeTab === 'signup'
        ? "Sign Up successful, you’ll be redirected to the explore home page."
        : "Login successful, welcome back!"
      );
      
      navigate('/explore');
    } catch (error) {
      console.error(`Error during ${activeTab}:`, error);
      alert('Something went wrong. Please try again later.');
    }
  }, [activeTab, navigate]);
  
  
  const initializeGoogleSignIn = useCallback(() => {
    if (window.google?.accounts?.id) {
      window.google.accounts.id.initialize({
        client_id: `${import.meta.env.VITE_GOOGLE_CLIENT_ID}`,
        callback: handleGoogleResponse,
      });
      
      const buttonDiv = document.getElementById("g-signin-button");
      if (buttonDiv) {
        window.google.accounts.id.renderButton(buttonDiv, {
          theme: "outline",
          size: "large",
          text: activeTab === "signup" ? "Sign up with Google" : "Sign in with Google",
          type: "standard",
        });
      }
    }
  }, [handleGoogleResponse, activeTab]);
  
  
  useGoogleScript(initializeGoogleSignIn);
  
  const handleFacebookClick = () => {
    if (window.FB) {
      window.FB.login((response) => {
        // Wrap the async logic inside a normal function
        const handleLoginResponse = async () => {
          if (response.authResponse) {
            const accessToken = response.authResponse.accessToken;
            
            const endpoint =
            activeTab === 'signup'
            ? `${import.meta.env.VITE_BASE_URL}/authentication/facebook-signup/`
            : `${import.meta.env.VITE_BASE_URL}/authentication/facebook-login/`;
            
            try {
              const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ access_token: accessToken }),
              });
              
              const data = await res.json();
              
              if (!res.ok) {
                if (
                  activeTab === 'signup' &&
                  data?.error === 'User with email already exists'
                ) {
                  alert('User already exists. Please log in instead.');
                  return;
                }
                
                alert(`An error occurred: ${data?.error || 'Unknown error'}`);
                return;
              }
              
              const { access, refresh } = data;
              sessionStorage.setItem('accessToken', access);
              sessionStorage.setItem('refreshToken', refresh);
              
              alert(
                activeTab === 'signup'
                ? 'Sign Up successful via Facebook!'
                : 'Login successful via Facebook!'
              );
              
              navigate('/explore');
            } catch (err) {
              console.error('Facebook auth error:', err);
              alert('Something went wrong with Facebook login.');
            }
          } else {
            console.log('Facebook login cancelled or not authorized.');
          }
        };
        
        handleLoginResponse(); // Call the async function here
      }, { scope: 'email' });
    } else {
      console.error('Facebook SDK not loaded yet.');
    }
  };  
  
  useFacebookScript();
  
  // const handleGoogleClick = () => {
    //   if (window.google?.accounts?.id) {
      //     window.google.accounts.id.prompt();
      //   } else {
        //     console.error('Google Identity Services not initialized.');
        //   }
        // };
        
        return (
    <div className="sign-desk-container">
      <div className="sign-container">
        <div className="nav-logo">
          <img src={Logo} alt="Future Pays Logo" />
          <img src={LogoText} className="logo-text" alt="Future Pays Logo Text" />
        </div>
        <div className="sign-head">
          <div className="sign-title">
            <p className="main-title">Invest in your future!</p>
            <p className="sub-title">
              Unlock wealth, growth, and endless possibilities — your future starts now!
            </p>
          </div>
          <div className="sign-toggle">
            <div
              className={`toggle-button ${activeTab === 'signup' ? 'active' : 'inactive'}`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </div>
            <div
              className={`toggle-button ${activeTab === 'login' ? 'active' : 'inactive'}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </div>
          </div>
        </div>
        <div className="sign-options">
          <div id="g-signin-button" className="google"></div>
          <div className="facebook" onClick={handleFacebookClick}>Facebook</div>
        </div>
        <div className="sign-footer">
          <p className="sign-terms">
            By continuing, you agree to Future Pays{' '}
            <a href="" style={{ color: '#000', textDecoration: 'none' }}>
              Terms of service
            </a>{' '}
            and{' '}
            <a href="" style={{ color: '#000', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
      <div className="sign-apparel">
        <img src={LoginApparel} alt="Future Pays E-commerce Apparel" />
        <p className="apparel-text">
          Get started by purchasing your exclusive T-shirt — your ticket to endless earning
          opportunities.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

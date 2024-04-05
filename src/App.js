import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';

library.add(fab);
// import { useHistory } from 'react-router-dom';

function AuthContainer() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  const toggleView = () => setIsLoginView(!isLoginView);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SONGKICK_API_KEY}`
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        console.log('Sign-in successful');
        // Redirect or perform other actions upon successful sign-in
        // history.push('/'); // Redirect to the home page, modify as needed
      } else {
        console.error('Sign-in failed');
      }
    } catch (error) {
      console.error('Error occurred during sign-in:', error);
    }
  };

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    const handleSignUpClick = () => {
      container.classList.add("right-panel-active");
    };

    const handleSignInClick = () => {
      container.classList.remove("right-panel-active");
    };

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', handleSignUpClick);
      signInButton.addEventListener('click', handleSignInClick);

      // Cleanup the event listeners when the component unmounts
      return () => {
        signUpButton.removeEventListener('click', handleSignUpClick);
        signInButton.removeEventListener('click', handleSignInClick);
      };
    }
  }, []); // Empty dependency array ensures that this effect runs once after initial render

  return (
    <>
      <div>
        <div class="background-img">
          
        </div>

        <div class="container" id="container">
          <div class="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div class="social-container">
                <a href="#" class="social google"><FontAwesomeIcon icon="fa-brands fa-google" style={{color: "#828282",}} /></a>
                <a href="#" class="social spotify"><FontAwesomeIcon icon="fa-brands fa-spotify" style={{color: "#828282",}} /></a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" required/>
              <input type="email" placeholder="Email" required/>
              <input type="password" placeholder="Password" required/>
              <button class="sign">Sign Up</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div class="social-container">
                <a href="#" class="social google"><FontAwesomeIcon icon="fa-brands fa-google" style={{color: "#828282",}} /></a>
                <a href="#" class="social spotify"><FontAwesomeIcon icon="fa-brands fa-spotify" style={{color: "#828282",}} /></a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" required/>
              <input type="password" placeholder="Password" required/>
              <a href="#">Forgot your password?</a>
              <button class="sign">Sign In</button>
            </form>
          </div>
          <div class="logo"></div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back To Songkick!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button class="ghost" id="signIn">Sign In</button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hi from our team at Songkick!</h1>
                <p>Enter your personal details and start journey with Songkick</p>
                <button class="ghost" id="signUp">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthContainer;


// // App.js

// import React from 'react';
// import Header from './Header';
// import HeroSection from './HeroSection';
// import Gallery from './Gallery';
// import ArtistsSection from './ArtistsSection';
// import Footer from './Footer';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <HeroSection />
//       <Gallery />
//       <ArtistsSection />
//       <Footer />
//     </div>
//   );
// }

// export default App;

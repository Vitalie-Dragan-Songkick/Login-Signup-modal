




// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [isLoginView, setIsLoginView] = useState(true);

//   const toggleView = () => setIsLoginView(!isLoginView);

//   return (
//     <div className="App">
//       <div className="modal">
//         <div className="tabs">
//           <button onClick={toggleView} disabled={isLoginView}>SIGN IN</button>
//           <button onClick={toggleView} disabled={!isLoginView}>SIGN UP</button>
//         </div>
//         {isLoginView ? <LoginForm /> : <SignupForm />}
//       </div>
//     </div>
//   );
// }

// function LoginForm() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle the login logic here
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h3>Account Verification POC</h3>
//         <input type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         <button type="submit">SIGN IN</button>
//         <p>Forgot Password?</p>
//         {/* Add the google login logic here */}
//         <button>Sign in with Google</button>
//         <button>Sign in with Spotify</button>
//       </form>
//     </>
//   );
// }

// function SignupForm() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle the signup logic here
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h3>Account Verification POC</h3>
//         <input type="text" placeholder="Name" required />
//         <input type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         <button type="submit">SIGN UP</button>
//         {/* Add the Facebook signup logic here */}
//         <button>Sign in with Google</button>
//         <button>Sign in with Spotify</button>
//       </form>
//     </>
//   );
// }

// export default App;
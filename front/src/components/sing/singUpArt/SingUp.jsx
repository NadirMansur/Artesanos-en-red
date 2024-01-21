import sing from "./singUp.module.css"

import React, { useState } from 'react';

const SignInUpComponent = () => {
  const [signUpData, setSignUpData] = useState({
    signUpName: '',
    signUpEmail: '',
    signUpPassword: ''
  });

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de registro utilizando signUpData
    console.log('Datos de registro:', signUpData);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUpSubmit}>
        <input
          type="text"
          name="signUpName"
          placeholder="Name"
          value={signUpData.signUpName}
          onChange={handleSignUpChange}
        />
        <input
          type="email"
          name="signUpEmail"
          placeholder="Email"
          value={signUpData.signUpEmail}
          onChange={handleSignUpChange}
        />
        <input
          type="password"
          name="signUpPassword"
          placeholder="Password"
          value={signUpData.signUpPassword}
          onChange={handleSignUpChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignInUpComponent;

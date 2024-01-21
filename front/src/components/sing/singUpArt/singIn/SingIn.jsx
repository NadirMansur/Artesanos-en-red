import sing from "../singUp.module.css";

import React, { useState } from "react";

const SignInUpComponent = () => {
  const [signInData, setSignInData] = useState({
    signInEmail: "",
    signInPassword: "",
  });

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de inicio de sesión utilizando signInData
    console.log("Datos de inicio de sesión:", signInData);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignInSubmit}>
        <input
          type='email'
          name='signInEmail'
          placeholder='Email'
          value={signInData.signInEmail}
          onChange={handleSignInChange}
        />
        <input
          type='password'
          name='signInPassword'
          placeholder='Password'
          value={signInData.signInPassword}
          onChange={handleSignInChange}
        />
        <button className={sing["button"]} type='submit'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInUpComponent;

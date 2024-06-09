import React, { useState } from 'react';
import styles from './Login.module.css'; 

function Login({ onSignUpClick, onLoginSuccess }) {
  // State to store input values
  const [email, setEmail] = useState('Admin.123@mail.com');
  const [password, setPassword] = useState('Admin1234');
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle form submission (e.g., sending data to a server)
    console.log('Email:', email);
    console.log('Password:', password);
    if (onLoginSuccess) {
      onLoginSuccess(); // If onLoginSuccess is defined, call it
    }
    // Reset input fields
    setEmail('');
    setPassword('');
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.loginEl}>Login</h2>
     
      <form className={styles.formEL} onSubmit={handleSubmit}>
        <div className={styles.emailContainer}>
          <label className={styles.emailEl}>Username</label>
          <input className={styles.emailInput}
            type="email" 
            placeholder='Email'
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label className={styles.passwordEl}>Password</label>
          <input 
            className={styles.passwordInput}
            placeholder="Password"
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button className={styles.submitBtn} type="submit">Login</button>
      </form>

      <div className={styles.containerTwo}>
        <button onClick={onSignUpClick} className={styles.signUp}>SignUp</button>
        <button className={styles.forgotPassword}>Forgot Password?</button>
      </div>
    </div>
  );
}

export default Login;

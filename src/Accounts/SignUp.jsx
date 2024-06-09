import React, { useState } from 'react';
import styles from './SignUp.module.css';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.logo} >Registration Form</h2>
            <form className={styles.signupForm} onSubmit={handleSubmit}>
              <div>
                    <label></label>
                    <input
                      className={styles.firstName}
                      type="text"
                      name="firstName"
                      placeholder='First Name'
                      value={formData.firstName}
                      onChange={handleChange}
                    />
              </div>
              <div>
                <label></label>
                  <input
                    type="text"
                    name="lastName"
                    className={styles.lastName}
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
              </div>
              <div>
                  <label></label>
                  <input
                    type="email"
                    name="email"
                    className={styles.email}
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                  />
              </div>
              <div>
                  <label></label>
                  <input
                    type="text"
                    name="country"
                    className={styles.country}  
                    placeholder='Country'
                    value={formData.country}
                    onChange={handleChange}
                  />
              </div>
              <div>
                  <label></label>
                  <input
                    placeholder='Password'
                    className={styles.password} 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
              </div>
              <div>
                  <label></label>
                  <input
                    placeholder='Confirm Password'
                    className={styles.confirmPassword} 
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
              </div>
              <div>
                <label>
                  <input
                  className={styles.checked} 
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                  <p className={styles.Agree}>Agree to Terms and Policy</p>
                </label>
              </div>
              <button type="submit"className={styles.button}  disabled={!formData.agreeToTerms}>
                Sign Up
              </button>
            </form>
    </div>
  );
}

export default SignUp;

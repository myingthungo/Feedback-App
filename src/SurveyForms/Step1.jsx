import React from "react";
import styles from "./Step1.module.css";

const FeedbackFormStep1 = ({ formData, setFormData, nextStep }) => {
  return (
    
      <div className={styles.container}>
        <h2> Your Feedback Matters!..</h2>
        <label>
          <h5>Name:</h5>
          <input
            className={styles.name}
            type="text"
            placeholder="Enter your name"
            value={formData.Name}
            onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
          />
        </label>
        <br />
        <label>
          <h5> Contact Number:</h5>
          <input
            className={styles.Number}
            type="number"
            maxLength="10"
            placeholder="enter your number"
            value={formData.ContactNumber}
            onChange={(e) => {
              const inputValue = e.target.value.slice(0, 10);
              setFormData({ ...formData, ContactNumber: inputValue });
            }}
          />
        </label>
        <br />
        <label>
          <h5> Email:</h5>
          <input
            className={styles.email}
            type="email"
            placeholder="enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <br />
        <button className={styles.btn} onClick={nextStep}>
          Next
        </button>
      </div>
    
  );
};

export default FeedbackFormStep1;

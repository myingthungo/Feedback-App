// FeedbackFormStep2.jsx
import React, { useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import styles from "./Step2.module.css";

const FeedbackFormStep2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [satisfaction, setSatisfaction] = useState("");
  const [rating, setRating] = useState(0);

  const handleSatisfactionChange = (event) => {
    setSatisfaction(event.target.value);
    setFormData({ ...formData, satisfaction: event.target.value });
  };
  const handleStarClick = (star) => {
    setRating(star);
    setFormData({ ...formData, rating: star });
  };

  return (
    <div id={styles.step2}>
      <div className={styles.container}>
        <h2> Rating and Suggest</h2>
        <div>
          <h5 className={styles.rating}> Share your experience in scaling</h5>

          {[1, 2, 3, 4, 5].map((star) => (
            <RiStarSFill
              key={star}
              className={
                star <= rating ? styles.star + " " + styles.active : styles.star
              }
              onClick={() => handleStarClick(star)}
            />
          ))}
        </div>
        <br />
        <h5>Satisfaction Level</h5>
        <label>
          <select value={satisfaction} onChange={handleSatisfactionChange}>
            <option value="">Select</option>
            <option value="Very Satisfied">Very Satisfied</option>
            <option value="Satisfied">Satisfied</option>
            <option value="Dissatisfied">Dissatisfied</option>
            <option value="Very Dissatisfied">Very Dissatisfied</option>
          </select>
        </label>
        <label>
          <h5> Suggestions:</h5>
          <input
            className={styles.recmd}
            type="text"
            placeholder="Add your Suggestion"
            value={formData.suggestion}
            onChange={(e) =>
              setFormData({ ...formData, suggestion: e.target.value })
            }
          />
        </label>
        <br />
        <button className={styles.prv} onClick={prevStep}>
          Previous
        </button>
        <button className={styles.btn} onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FeedbackFormStep2;

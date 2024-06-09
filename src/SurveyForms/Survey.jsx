import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import styles from "./Survey.module.css";
import surveyData from './surveyData.json'; // Assuming the JSON file is named surveyData.json and located in the same directory

const Survey = () => {
  const { register, handleSubmit, control } = useForm();
  const { fields } = useFieldArray({ control, name: 'answers' });

  const [currentPage, setCurrentPage] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false); // State variable to control the thank you message

  const totalPages = surveyData.questions.length;

  const onSubmit = (data) => {
    console.log(data);
    setShowThankYou(true); // Show thank you message after form submission
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderOptions = (question) => {
    if (question.type === 'textarea') {
      return (
        <textarea
          className={styles.textarea}
          {...register(`question${question.id}`)}
          placeholder={question.defaultText}
        />
      );
    } else if (question.type === 'radio') {
      return question.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            {...register(`question${question.id}`, { value: option })}
            onClick={() => {
              const otherInput = document.getElementById(`question${question.id}Other`);
              if (option === 'Other') {
                otherInput.style.display = 'block';
              } else {
                otherInput.style.display = 'none';
              }
            }}
          />
          <label>{option}</label>
          {option === 'Other' && (
            <input
              className={styles.inputText}
              type="text"
              id={`question${question.id}Other`}
              style={{ display: 'none' }}
              placeholder="Please specify"
              {...register(`question${question.id}Other`)}
            />
          )}
        </div>
      ));
    } else if (question.type === 'text') {
      return (
        <input
          type="text"
          className={styles.inputText}
          {...register(`question${question.id}`)}
          placeholder={question.placeholder}
        />
      );
    }
  };
  

  const renderPage = () => {
    const question = surveyData.questions[currentPage];
    return (
      <div className={styles.container}>
        <h2 className={styles.banner}>Product/Market Fit Survey Template</h2>
        <div className={styles.Question}>
          <label>{question.question}</label>
          <div className={styles.optionsContainer}>
            {question.options && question.type === 'radio' && renderOptions(question)}
            {question.type === 'textarea' && renderOptions(question)}
            {question.fields && question.fields.map(field => (
              <div key={field.id}>
                <input
                  className={styles.followup}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.id)}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Render navigation buttons */}
        {currentPage !== 0 && <button className={styles.previous} onClick={onPrevPage}>Previous</button>}
        {currentPage !== totalPages - 1 && <button className={styles.nextBtn} onClick={onNextPage}>Next</button>}
        {currentPage === totalPages - 1 && <button className={styles.submit} onClick={handleSubmit(onSubmit)}>Submit</button>}
      </div>
    );
  };

  return (
    <div>
      {showThankYou ? (
        <h3 className={styles.message}>Thank you for your wonderful feedback!</h3>
      ) : (
        renderPage()
      )}
    </div>
  );
};

export default Survey;

import React, { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const FeedbackForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    Name: "",
    ContactNumber: "",
    email: "",
    rating: "",
    suggestion: "",
    featureRequests: "",
    bugReport: "",
    satisfaction: "",
    recommendation: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    console.log(formData);
  };

  switch (step) {
    case 1:
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Step3
          formData={formData}
          setFormData={setFormData}
          submitForm={submitForm}
          prevStep={prevStep}
        />
      );
    default:
      return null;
  }
};

export default FeedbackForm;

import React from "react";
import "./SubmissionMessage.css";

const SubmissionMessage = ({ onClose }) => {
  return (
    <div className="submission-message">
      <h2>Thank You!</h2>
      <p>Your feedback has been submitted successfully.</p>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default SubmissionMessage;

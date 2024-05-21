import React, { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";
import SubmissionMessage from "./SubmissionMessage";
import "./App.css";

const App = () => {
  const [tab, setTab] = useState("form");
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    localStorage.setItem(
      "feedbacks",
      JSON.stringify([...storedFeedbacks, formData])
    );
    setSubmitted(true);
    setTab("message");
  };

  const handleAddNew = () => {
    setTab("form");
  };

  const handleCloseMessage = () => {
    setTab("form");
  };

  return (
    <div>
      <nav>
        <button onClick={() => setTab("form")}>Feedback Form</button>
        <button onClick={() => setTab("list")}>Feedback List</button>
      </nav>
      {tab === "form" && <FeedbackForm onFormSubmit={handleFormSubmit} />}
      {tab === "list" && <FeedbackList onAddNew={handleAddNew} />}
      {tab === "message" && <SubmissionMessage onClose={handleCloseMessage} />}
    </div>
  );
};

export default App;

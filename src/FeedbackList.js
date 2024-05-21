import React, { useEffect, useState } from "react";
import "./FeedbackList.css";

const FeedbackList = ({ onAddNew }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = () => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(storedFeedbacks);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFeedbacks = feedbacks.filter((feedback) =>
    feedback.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="feedback-list">
      <h2>Feedback Submissions</h2>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="refresh-button" onClick={fetchFeedbacks}>
          Refresh
        </button>
        <button className="add-new-button" onClick={onAddNew}>
          Add New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service Quality</th>
            <th>Beverage Quality</th>
            <th>Restaurant Cleanliness</th>
            <th>Dining Experience</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeedbacks.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.phone}</td>
              <td>{feedback.serviceQuality}</td>
              <td>{feedback.beverageQuality}</td>
              <td>{feedback.restaurantCleanliness}</td>
              <td>{feedback.diningExperience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackList;

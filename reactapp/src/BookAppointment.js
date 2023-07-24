import React, { useState } from 'react';
import './BookAppointment.css';

const Appointment = () => {
  const [customerName, setCustomerName] = useState('');
  const [mobileModel, setMobileModel] = useState('');
  const [issue, setIssue] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating appointment submission and validation
    if (customerName && mobileModel && issue && appointmentDate) {
      // Here you can add your logic to handle appointment submission
      // For example, you can send the appointment data to an API endpoint for processing
      setSuccessMessage('Appointment booked successfully!');
      setCustomerName('');
      setMobileModel('');
      setIssue('');
      setAppointmentDate('');
    } else {
      setErrorMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="book-appointment">
      <h2>Order Your Books</h2>
      <form onSubmit={handleSubmit}>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <label htmlFor="customerName">Book Name:</label>
        <input
          type="text"
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />

        <label htmlFor="mobileModel">Author :</label>
        <input
          type="text"
          id="mobileModel"
          value={mobileModel}
          onChange={(e) => setMobileModel(e.target.value)}
        />

        <label htmlFor="issue">Year of Publish:</label>
        <textarea
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />

        <button type="submit">Order</button>
      </form>
    </div>
  );
};

export default Appointment;
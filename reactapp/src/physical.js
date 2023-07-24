import React, { useState } from 'react';
import './software.css';

function Physical() {
  const [patients, setPatients] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = {
      firstName,
      lastName,
      age
    };
    setPatients([...patients, newPatient]);
    setFirstName('');
    setLastName('');
    setAge('');
  };

  return (
    <div class="hi">
      <h2>Check Fiction Books</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Book Name :
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Author Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Year of Publish
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Check availability</button>
      </form>

    </div>
  );
}

export default Physical;
// AgeCalculator.js
import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      const ageInMilliseconds = today - birthDate;
      const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
      setAge(Math.floor(ageInYears));
    } else {
      setAge(null);
    }
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label htmlFor="dob">Enter your Date of Birth:</label>
      <input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        <p>Your age is: {age} years</p>
      )}
    </div>
  );
};

export default AgeCalculator;

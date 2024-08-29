import React from 'react';

const YourInformation = ({ formData, onNext, onChange }) => {
  const handleChange = (e) => {
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className="your-information">
      <div>
        <label htmlFor="Firstname">First Name:</label>
        <br />
        <input
          type="text"
          name="first"
          placeholder="Enter first name"
          value={formData.first}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="LastName">Last Name:</label>
        <br />
        <input
          type="text"
          name="last"
          placeholder="Enter last name"
          value={formData.last}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="Phone">Phone Number:</label>
        <br />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Enter phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <button onClick={onNext} className='nexts'>Next</button>
    </div>
  );
};

export default YourInformation;

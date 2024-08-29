import React from 'react';
import './MultiPageForm.css';

const ServiceSelection = ({ formData, onNext, onChange }) => {
  console.log(formData);
  
  const handleChange = (e) => {
    const selectedService = e.target.value;
    let price = '';

    if (selectedService === 'Dating Coaching') {
      price = '$90.00';
    } else if (selectedService === 'Life Coaching') {
      price = '$60.00';
    }

    onChange({ service: selectedService, price });
  };

  return (
    <div className="service-selection">
      <h6>Service</h6>
      <select value={formData.service} onChange={handleChange} className='option'>
        <option value="">Select a service</option>
        <option value="Dating Coaching" className='value'>
          Dating Coaching
        </option>
        <option value="Life Coaching" className='value'>
          Life Coaching
        </option>
      </select>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default ServiceSelection;

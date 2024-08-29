import React from 'react';

const AllData = ({ formData }) => {
  const { service, date, time, first, last, email, phoneNumber, price } = formData;

  // Function to reload the page
  const handleFinish = () => {
    window.location.reload(); // Reloads the entire page
  };

  return (
    <div className='all-data-summary text-center'>
      <h5>Congratulations</h5>
      <div className='summary-section p-3'>
        <div className='d-flex justify-content-between align-items-center'>
          <h6 className='m-0'>Date:</h6>
          <p className='m-0'>{date}</p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <h6 className='m-0'>Local Time:</h6>
          <p className='m-0'>{time}</p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <h6 className='m-0'>Service:</h6>
          <p className='m-0'>{service}</p>
        </div>
        <div className='d-flex justify-content-between align-items-center'> 
          <h6 className='m-0'>Employee:</h6>
          <p className='m-0'>John Doe pixelwars</p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <h6 className='m-0'>Payment:</h6>
          <p className='m-0'>{price} - On site</p>
        </div>
        <hr />
        <div className='d-flex justify-content-between align-items-center'>
          <h6 className='m-0'>Your name:</h6>
          <p className='m-0'>{first} {last}</p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <h6 className='m-0'>Email:</h6>
          <p className='m-0'>{email}</p>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <h6 className='m-0'>Phone:</h6>
          <p className='m-0'>{phoneNumber}</p>
        </div>
      </div>
      <button className='nexts' onClick={handleFinish}>Finish</button>
    </div>
  );
};

export default AllData;

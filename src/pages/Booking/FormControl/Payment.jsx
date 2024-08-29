import React from 'react';

const Payment = ({ formData, onNext }) => {
  const { service, price } = formData;

  return (
    <>
      <div className='text-center pt-3'>
        <h6>Summary</h6>
        <div className='payment-child'>
          <div className='payment-child-1 pt-2'>
            <h6>Services</h6>
            <div>
              <span>{service} ({price}) x 1 person </span>
              <span>${price}</span>
            </div>
          </div>
          <div className='d-flex justify-content-between border-bottom align-items-center pt-2 pb-2'>
            <h6 className='m-0'>Subtotal:</h6>
            <p>${price}</p>
          </div>
          <div className='d-flex justify-content-between align-items-center pt-2 pb-2'>
            <h6>Total Amount:</h6>
            <p>${price}</p>
          </div>
        </div>
        <p className='text-center payment-footer'>The payment will be done on-site.</p>
      </div>
      <button onClick={onNext} className='nexts'>Next</button>
    </>
  );
};

export default Payment;

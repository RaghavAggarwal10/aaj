import React, { useState } from 'react';

const RegisterForm = () => {
  const [gstRequired, setGstRequired] = useState(true);

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form>
        <label>Email ID</label>
        <input type="email" placeholder="Enter your email" />

        <label>Mobile No.</label>
        <input type="tel" placeholder="Enter your mobile number" />

        <label>Are you a business which needs GST invoice?</label>
        <div className="gst-toggle">
          <button
            type="button"
            className={gstRequired ? 'active' : ''}
            onClick={() => setGstRequired(true)}
          >
            Yes
          </button>
          <button
            type="button"
            className={!gstRequired ? 'active' : ''}
            onClick={() => setGstRequired(false)}
          >
            No
          </button>
        </div>

        <label>Company Name</label>
        <input type="text" placeholder="Enter company name" />

        <label>Company Address</label>
        <input type="text" placeholder="Enter address" />

        <div className="flex-row">
          <div>
            <label>State</label>
            <input type="text" placeholder="State" />
          </div>
          <div>
            <label>Pincode</label>
            <input type="text" placeholder="Pincode" />
          </div>
        </div>

        {gstRequired && (
          <>
            <label>GST Number</label>
            <input type="text" placeholder="Enter GST number" />
            <button type="button" className="add-gst-btn">Add New GST</button>
          </>
        )}

        <button type="submit" className="register-btn">Register</button>
        <p className="terms">
          By continuing you agree to the <a href="#">Terms & Conditions</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
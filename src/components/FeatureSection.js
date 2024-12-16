import React from 'react';

const FeatureSection = () => {
  return (
    <div className="features">
      <h2>More Than Just Logistics:<br />Your Growth Partner</h2>
      <p>
        Our seamless logistics solutions empower brands to grow faster and smarter. <br />
        Let’s move your business forward.
      </p>
      <div className="feature-items">
        <div>
          <img src="assets/truck_delivery.png" alt="Transport" />
          <p>Get top-rated transporters at unbeatable price</p>
        </div>
        <div>
          <img src="assets/truck_delivery.png" alt="On-time Delivery" />
          <p>95% Guaranteed on-time Delivery</p>
        </div>
        <div>
          <img src="assets/map.png" alt="Tracking" />
          <p>Live Shipment Tracking and timely updates</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
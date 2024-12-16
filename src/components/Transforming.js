import React from 'react';

const Transforming = () => {
  const features = [
    {
      title: "Pan-India PTL Transportation",
      description: "Guaranteed on-time delivery across 28,000+ pin codes with minimal ODA.",
      icon: "🚚",
    },
    {
      title: "Wide Transporter Network",
      description: "Choose from 10+ transporters to ensure the best rates for your shipments.",
      icon: "📍",
    },
    {
      title: "Money-Back Guarantee",
      description: "Promised on-time delivery with a money-back guarantee for delays.",
      icon: "💰",
    },
    {
      title: "Real-Time Tracking",
      description: "Full visibility of all your shipments from pickup to delivery.",
      icon: "📡",
    },
    {
      title: "Digital POD Access",
      description: "Seamless access to PODs anytime, eliminating manual processes.",
      icon: "📑",
    },
    {
      title: "In-Transit Insurance",
      description: "Optional insurance coverage to protect your goods during transit.",
      icon: "🛡",
    },
    {
      title: "Fast Customer Support",
      description: "Reliable customer service to resolve queries and ensure smooth operations.",
      icon: "💬",
    },
    {
      title: "Access to TMS",
      description:
        "Get full access to our Transport Management System (TMS) to manage bookings, track shipments, and gain real-time visibility on a single platform.",
      icon: "📊",
    },
  ];

  return (
    <div className="features-page">
      <h1>Transforming Logistics, Scaling Businesses</h1>
      <p>Simplifying transportation so you can focus on growing your business.</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transforming;
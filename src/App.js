import React from 'react';
import FeatureSection from './components/FeatureSection';
import PartnersSection from './components/PartnersSection';
import RegisterForm from './components/RegisterForm';
import './styles.css';

const App = () => {
  return (
    <div className='grid'> 
      <div>
      <FeatureSection />
      <PartnersSection />
      </div>
      <div className="form-wrapper">
        <RegisterForm />
      </div>
    </div>
  );
};

export default App;
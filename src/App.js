import React from 'react';
import FeatureSection from './components/FeatureSection';
import PartnersSection from './components/PartnersSection';
import RegisterForm from './components/RegisterForm';
import Transforming from './components/Transforming';
import './styles.css';

const App = () => {
  return (
    <>
  
    <div className='grid'> 
      <div>
      <FeatureSection />
      <PartnersSection />
      </div>
      <div className="form-wrapper">
        <RegisterForm />
      </div>
    </div>
    <div>
      <Transforming/>
    </div>
    </>

  );
};

export default App;
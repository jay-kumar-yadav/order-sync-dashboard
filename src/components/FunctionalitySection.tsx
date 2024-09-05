import React from 'react';

const FunctionalitySection: React.FC = () => {
  return (
    <section className="functionality-section">
      <div className="functionality-box">
        <h3>Elevate Your Brand Aesthetics</h3>
        <input type="text" placeholder="Accent Color" />
        <input type="text" placeholder="Text Color" />
        <input type="text" placeholder="Background Color" />
        <button>Apply Colors</button>
      </div>
      <div className="functionality-box">
        <h3>Exclusive Onboarding Support</h3>
        <button>Schedule a Call</button>
      </div>
      <div className="functionality-box">
        <h3>Explore Our Integrated Ecosystem</h3>
        <button>Explore Integrations</button>
      </div>
      <div className="functionality-box">
        <h3>Seamlessly Integrate Custom HTML Elements</h3>
        <input type="text" placeholder="HTML Link" />
        <button>Apply Changes</button>
      </div>
    </section>
  );
};

export default FunctionalitySection;

// components/AboutSection.js

import React from "react";

const AboutSection = () => {
  return <section className="py-16" style={{height:'12rem',backgroundColor:'black'}}>
      <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', textAlign: 'center' }}>
        <h2 style={{color:'rgb(254, 192, 10)', fontSize:'45px', marginTop:'-20px',marginLeft:'-50px',fontFamily:'sans-serif', fontWeight:'normal'}}>350 +</h2>
        <p style={{fontSize:'19px',color:'white' }}>Clients Worldwide</p>
      </div>
      <div style={{ flex: '1', textAlign: 'center' }}>
        <h2 style={{color:'rgb(254, 192, 10)', fontSize:'45px', marginTop:'-20px',marginLeft:'-50px',fontFamily:'sans-serif', fontWeight:'normal'}}>20 +</h2>
        <p style={{fontSize:'19px',color:'white' }}>Team Members</p>
      </div>
      <div style={{ flex: '1', textAlign: 'center' }}>
        <h2 style={{color:'rgb(254, 192, 10)', fontSize:'45px', marginTop:'-20px',marginLeft:'-50px',fontFamily:'sans-serif', fontWeight:'normal'}}>100 +</h2>
        <p style={{fontSize:'19px',color:'white' }}>Project Completed</p>
      </div>
      <div style={{ flex: '1', textAlign: 'center' }}>
        <h2 style={{color:'rgb(254, 192, 10)', fontSize:'45px', marginTop:'-20px',marginLeft:'-50px',fontFamily:'sans-serif', fontWeight:'normal'}}>85M +</h2>
        <p style={{fontSize:'19px',color:'white' }}>Revenue Generated</p>
      </div>
    </div>

  </section>;
};

export default AboutSection;

import React from 'react';

const Form = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background:'#F3F4F6',}}>
        <div style={{ flex: '1', paddingBottom:'150px' }}>
          <img src='form1.png' alt="Project"  style={{marginLeft:'auto',marginRight:'auto'}}/>
        </div>
        <div style={{ flex: '1', marginLeft:'auto',marginRight:'auto'}}>
          <h2 className=" text-4xl font-semibold text-center" style={{fontFamily: 'sans-serif', color:'black', textAlign:'right',}}>We'd love to hear from you</h2>
          <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />
          <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />
          <input type="url" placeholder="Your Website URL" style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />
          <textarea placeholder="Project Details" style={{ width: '100%', padding: '10px', marginBottom: '20px' }}></textarea>
          <button type="submit" style={{ height:'50px', width: '100%', padding: '10px', backgroundColor: 'black', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
        </div>
      </div>
    );
  };
  export default Form;
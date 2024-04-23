// components/MainSection.js

import React from "react";
import Image from "next/image";
const MainSection = () => {
  return (
    <section className="lg:p-16 p-8 bg-gray-100 text-black justify-center">
      <p className="text-2xl px-5 font-semibold">Who we are</p>
      <p className="mt-4 px-5 text-xl">
        We love what we do and create partnerships with our clients to ensure
        their digital transformation is positioned for long-term success.We
        believe that the human dimensions essential to start any successful
        project and that this is where splendid emotional relationships between
        the company and people are born.
      </p>
      <Image
        src={"/2.png"}
        width={2500}
        height={2500}
        className="w-full px-5 mt-5"
      ></Image>
      <div className="justfiy-center m-20">
      <p className=" text-4xl font-semibold text-center" style={{fontFamily: 'sans-serif'}}>Meet the heroes behind the magic</p>
      <div className="m-20 "style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ margin: '10px', width: '300px', border: '1px  #ccc', borderRadius: '5px', padding: '10px',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
        <div>
          <img src="av1.png" alt="Photo 1" style={{ width: '100%', borderRadius: '5px' }} />
        </div>
        <div style={{ marginTop: '30px' }}>
           <p className="text-xl" style={{fontFamily:'sans-serif', fontWeight:'bold'}}>Ester Howard</p>
          <p style={{marginTop:'8px', marginBottom:'8px', fontFamily:'sans-serif', fontWeight:'inherit'}}>Founder</p>
        </div>
      </div>
      <div style={{ margin: '10px', width: '300px', border: '1px  #ccc', borderRadius: '5px', padding: '10px' ,boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
        <div>
          <img src="av2.png" alt="Photo 2" style={{ width: '100%', borderRadius: '5px' }} />
        </div>
        <div style={{ marginTop: '30px' }}>
          <p className="text-xl" style={{fontFamily:'sans-serif', fontWeight:'bold'}}>Cody Fisher</p>
          <p style={{marginTop:'8px', marginBottom:'8px', fontFamily:'sans-serif', fontWeight:'inherit'}}>Developer</p>
        </div>
      </div>
      <div style={{ margin: '10px', width: '300px', border: '1px #ccc', borderRadius: '5px', padding: '10px', boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
        <div>
          <img src="/av3.png" alt="Photo 3" style={{ width: '100%', borderRadius: '5px' }} />
        </div>
        <div style={{ marginTop: '30px' }}>
          <p className="text-xl" style={{fontFamily:'sans-serif', fontWeight:'bold'}}>Brooklyn Simmons</p>
          <p style={{marginTop:'8px', marginBottom:'8px', fontFamily:'sans-serif', fontWeight:'inherit'}}>Designer</p>
        </div>
      </div>
    </div>

      </div>
    </section>
  );
};


export default MainSection;

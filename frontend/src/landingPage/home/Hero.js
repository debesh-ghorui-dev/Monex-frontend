import React from 'react'

export default function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img 
          src="media/homeHero.png" 
          alt="Hero" 
          className='mb-5'
        />

        <h1 className='mt-5'>Invest in everything</h1>

        <p>Oline platform to invest in stocks, derivative, mutual funds, and more</p>

        <button 
          className='btn btn-primary p-3 fs-5 mt-5 mb-5' 
          style={{ 
              width: "20%", margin: "0 auto" 
            }} 
        >Signup now</button>
      </div>
    </div>
  );
}
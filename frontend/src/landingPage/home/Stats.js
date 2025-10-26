import React from 'react'

export default function Stats() {
  return (
    <div className='container p-3'>
      <div className='row'>
        <div className='col-6'>
          <h1 className='fs-1 mb-5'>Trust with confidence</h1>
          
          <h2 className='fs-4'>Customer-fist alway</h2>
          <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

          <h2 className='fs-4'>No spam or gimmicks</h2>
          <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#">Our philosophies.</a></p>

          <h2 className='fs-4'>The Zerodha universe</h2>
          <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs. </p>

          <h2 className='fs-4'>Do better with money</h2>
          <p className='text-muted'>With initiatives like <a href="#">Nudge</a> and <a href="#">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money. </p>
        </div>
        <div className='col-6'>
          <img
            src="media/ecosystem.png"
            alt=""
            style={{
              width: "100%"
            }}
          />
          <div className='text-center'>
            <a 
              href="#"
              className='mx-5'
            >Explore our products <i className='fa fa-long-arrow-right'></i></a>
            <a href="#"> Try Kite demo <i className='fa fa-long-arrow-right'></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

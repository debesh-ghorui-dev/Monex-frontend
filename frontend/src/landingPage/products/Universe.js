import React from 'react'

export default function Universe() {
    return (
        <div className='container'>
            <section className="row mt-5 mb-5 text-center">
                <p>Want to know more about our technology stack? Check out the <a href=""> Zerodha.tech</a> blog.</p>
            </section>
            <section className="row mt-5 mb-5 text-center">
                <div className='text-center'>
                    <h2>The Zerodha Universe</h2>
                    <p>Extend your trading and investment experience even further with our partner platforms </p>
                    <div className="col-4 p3">
                        <img src="media/zerodhaFundhouse.png" alt="" />
                        <p className='text-muted'>
                            Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="col-4 p-3">
                        <img 
                            src="media/streakLogo.png" 
                            alt="" 
                            style={{
                                width: "50%"
                            }}
                        />
                        <p className='text-muted'>
                            Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.
                        </p>
                    </div>
                    <div className="col-4 p3">
                        <img src="media/zerodhaFundhouse.png" alt="" />
                        <p className='text-muted'>
                            Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className="col-4 p-3">
                        <img 
                            src="media/streakLogo.png" 
                            alt="" 
                            style={{
                                width: "50%"
                            }}
                        />
                        <p className='text-muted'>
                            Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
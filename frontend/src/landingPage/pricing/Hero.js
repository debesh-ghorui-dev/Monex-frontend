import React from 'react'

export default function Hero() {
    return (
        <div className='container'>
            <div className='row text-center'>
                <h1 className='mt-5'>Charges</h1>
                <p className='mt-2 text-muted'>List of all charges and taxes</p>
                <div className='col-4'>
                    <img src='media/pricingEquity.svg' alt='' />
                    <h2>Free equity delivery</h2>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. </p>
                </div>
                <div className='col-4'>
                    <img src='media/intradayTrades.svg' alt='' />
                    <h2>Intraday and F&O trades</h2>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades. </p>
                </div>
                <div className='col-4'>
                    <img src='media/pricingMF.svg' alt='' />
                    <h2>Free direct MF</h2>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. </p>
                </div>
            </div>
        </div>
    );
}
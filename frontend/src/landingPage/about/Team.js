import React from 'react'

export default function Team() {
    return (
        <div className='container'>
            <section className='row m-5 p-5 text-center'>
                <h2 className="mb-4" style={{ width: "100%", height: "70%" }}>People </h2>
            </section>
            <section className='row mt-5 p-5 border-top text-muted' style={{ lineHeight: "1.8", fontSize: "1.2em" }} >
                <div className='col-6 p-5 mt-5 text-center'>
                    <img 
                        src='media/'
                        alt=''
                        style={{
                            borderRadius: "100%",
                            width: "70%"
                        }}
                    />
                </div>
                <div className='col-6 p-5'>
                    <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors. </p>
                    <p><a href="#">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets. </p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a>blog</a> or see what the media is <a href="#">saying about us</a> or learn more about our business and product <a href="#">philosophies</a>.</p>
                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our <a>blog</a> or see what the media is <a href="#">saying about us</a> or learn more about our business and product <a href="#">philosophies</a>.</p>
                </div>
            </section>
        </div>
    );
}

import React from 'react'

export default function LeftImageSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imageURL} alt={productName} />
                </div>
                <div className="col-6 mt-5">
                    <h1 className='mb-3'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className=''>
                        <a href={tryDemo}>Try demo →</a>
                        <a
                            href={learnMore}
                            style={{
                                marginLeft: "20px"
                            }}
                        >Learn more →</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src="media/googlePlayBadge.svg" alt="google play" /></a>
                        <a
                            href={appStore}
                            style={{
                                marginLeft: "20px"
                            }}
                        >
                            <img
                                src="media/appStoreBadge.svg"
                                alt="app store"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
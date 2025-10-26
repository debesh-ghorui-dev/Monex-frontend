import React from 'react'

export default function RightImageSection({
    productName,
    productDescription,
    URLName,
    URL,
    imageURL,
}) {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1 className='mb-3'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className=''>
                        <a href={URL}>{URLName}</a>
                    </div>
                </div>
                <div className="col-6">
                    <img src={imageURL} alt={productName} />
                </div>
            </div>
        </div>
    );
}

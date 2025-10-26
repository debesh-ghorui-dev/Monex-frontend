import React from 'react'

export default function SupportPage() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div
                    className=''
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <a href="">Support Portal</a>
                    <span className='btn btn-primary'>My tickets</span>
                </div>
                <div
                    className=''
                >
                    <span><i className='fa fa-search'></i></span>
                    <input type="text" name="" id="" placeholder='EG: How do i open my account, How do i activate F&O...'/>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>

                </div>
                <div className="col-4">

                </div>
            </div>
        </div>
    );
}
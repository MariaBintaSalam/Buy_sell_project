import React from 'react';

const ProductRow = ({x}) => {
    const { _id, deviceId, email, deviceModel,phone,meeting, PhotoURL, rPrice} = x;
    return (
        <div className='done'>
            <img className='review-img' src={PhotoURL} alt="" />
            
            <p><span className='okkk'>Model: </span>{deviceModel}</p>
            <p><span className='okkk'>Meeting: </span>{meeting}</p>
            <p><span className='okkk'>Price: </span>{rPrice}</p>
        
        </div>
    );
};

export default ProductRow;
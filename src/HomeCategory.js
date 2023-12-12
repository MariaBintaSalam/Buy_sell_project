import React from 'react';
import { Link } from 'react-router-dom';




const HomeCategory = ({service}) => {
    // console.log(service);
    const {img, name, _id } = service;
    return (
        <div>   
            <h4>{name}</h4>  
            <img  src={img} alt="" />  <br />      
            <Link to={`/allmobile/${_id}`}>Visit Here</Link>
        </div>              
                          
                
    );
};

export default HomeCategory;
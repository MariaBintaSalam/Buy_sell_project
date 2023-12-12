import React, { useContext, useEffect, useState } from 'react';
// import  { useContext,   } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';


const ReviewRow = ({x, handleDelete}) => {
    const { _id, category, userName, email, deviceModel, PhotoURL, uses,oPrice, date} = x;
    // console.log(x)



    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://b-assignment12-server.vercel.app/allmobile');
            const data = await res.json();
            return data;
        } 
    });
    const handleAdvertisement = id => {
        fetch(`https://b-assignment12-server.vercel.app/allmobile/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make Advertise successful.')
                refetch();
            }
        })
    }

   
    const [review, setreview] = useState([])

    useEffect(() => {
        fetch(`https://b-assignment12-server.vercel.app/allmobile`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [])
    console.log(review)



    return (
        <div className='done'>
            <img className='review-img' src={PhotoURL} alt="" />
            <div className='d-flex align-items-center'>
            <p><span className='okkk'>Model: </span>{deviceModel}</p>
            <button onClick={() => handleDelete(_id)} className='blog-container mt-3 mb-5 ms-3'>❌Delete</button>
            
            {
            review.map(a =><div className='d-flex align-items-center' key={a._id}>
            
            { a?.addV !== 'advertise'  && <button onClick={() => handleAdvertisement(_id)} className='btn ms-5 m-1 btn-primary miya1'>Advertise</button>} 
           
            
          </div>)
      }


            
            
            
            </div>
        </div>
    );
};

export default ReviewRow;
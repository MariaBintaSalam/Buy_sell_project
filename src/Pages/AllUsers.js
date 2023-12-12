import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://b-assignment12-server.vercel.app/users');
            const data = await res.json();
            return data;
        } 
    });
    const handleMakeVerify = id => {
        fetch(`https://b-assignment12-server.vercel.app/users/admin/${id}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make verified successful.')
                refetch();
            }
        })
    }


    const [review, setreview] = useState([])
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            fetch(`https://b-assignment12-server.vercel.app/users/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('Deleted Successfully')
                    const remaining = review.filter(odr => odr._id !== id);
                    setreview(remaining);
                }
            })
        }
    }
    
    
    
    return (
        <div className='p-5 '>
            {
        users.map((user, i) =><div className='d-flex miya align-items-center' key={user._id}>
            <p>{i+1}</p>
            <p>. {user.name} — {user.email}</p>
            {user?.newRole === 'verified-seller' && <p>✓</p>}
            {user?.role === 'customer' && <p className='ms-2'>(customer)</p>}
            {user?.role === 'seller' && <p className='ms-2'>(seller)</p>}
            {user?.role === 'admin' && <p className='ms-2'>(admin)</p>}
            <div className='d-grid'>
            { user?.role !== 'admin' && user?.role !== 'customer' && user?.newRole !== 'verified-seller' && <button onClick={() => handleMakeVerify(user._id)} className='btn ms-5 m-1 btn-primary miya1'>Make Verified Seller</button>} 
            <button onClick={() => handleDelete(user._id)} className='blog-container mt-3 mb-3 ms-5'>❌Delete</button>
            </div>
          </div>)
      }
      
        </div>
    );
};

export default AllUsers;
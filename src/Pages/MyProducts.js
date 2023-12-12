import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const [review, setreview] = useState([])

    useEffect(() => {
        fetch(`https://b-assignment12-server.vercel.app/AllMobileEmail?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [user?.email])
    console.log(review)

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            fetch(`https://b-assignment12-server.vercel.app/AllMobileEmail/${id}`, {
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
        

        <div className='p-5'>
            <h1>My Products</h1>
            {
                            review.map(x => <ReviewRow
                                key={x._id}
                                x={x}
                                handleDelete={handleDelete}
                            >
                            </ReviewRow>)
                        }
        </div>
    );
};

export default MyProducts;

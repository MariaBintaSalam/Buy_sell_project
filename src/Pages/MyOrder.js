import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import ProductRow from './ProductRow';

const MyOrder = () => {

    const { user } = useContext(AuthContext);
    const [review, setreview] = useState([])
    useEffect(() => {
        fetch(`https://b-assignment12-server.vercel.app/AllMobileEmaila?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [user?.email])

    return (
        <div className='p-5'>
            <h1>My Order</h1>
            {
                            review.map(x => <ProductRow
                                key={x._id}
                                x={x}
                            >
                                
                            </ProductRow>)
                        }
                        
        </div>
        
    );
};

export default MyOrder;
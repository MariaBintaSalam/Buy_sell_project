import React from 'react';
import  { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Add = () => {


    const [review, setreview] = useState([])

    useEffect(() => {
        fetch(`https://b-assignment12-server.vercel.app/allmobile`)
            .then(res => res.json())
            .then(data => setreview(data))
    }, [])
    console.log(review.deviceModel)




    return (
        <div>
                            {
                                review.map((a) =><div className='' key={a._id}>
                                
                                
                                <>
                            {
                                a?.addV?
                                    <>
                                        <h4>{a.deviceModel}</h4><br />
                                        <img  src={a.PhotoURL} alt="" /> <br />
                                        
                                        <p>Price: {a.rPrice}</p>
                                          
                                    </>
                                    :
                                    <>
                                        
                                    </>
                            }

                        </>
                                    </div>)
                            }

                        </div>
    );
};

export default Add;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCategory from '../HomeCategory';
import Add from './Add';
import ImageSlider from './ImageSlider';
import SlideWrite from './SlideWrite';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <SlideWrite></SlideWrite>
            <ImageSlider></ImageSlider>
            <div className='display-flex m-3'>
                {

                    services.map(service => <HomeCategory
                    key={service._id}
                    service={service}
                    >    
                    </HomeCategory>)
                }
            </div>

            <h2 className='mt-5 mb-0 ms-2 bg-danger p-4'>Advertisement</h2>
            <div className='display-flex m-3'>
            
                <Add></Add>
            </div>

        </div>
        
    );
};

export default Home;


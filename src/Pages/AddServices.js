import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddSingleService from '../AddSingleService';

const AddServices = () => {
    const services = useLoaderData();
    return (
        <div>
                {
                    services.map(service => <AddSingleService
                    key={service._id}
                    service={service}
                    >    
                    </AddSingleService>)
                }
        </div>
    );
};

export default AddServices;
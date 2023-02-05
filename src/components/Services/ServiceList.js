import React from 'react';
import Service from './Service';

const ServiceList = ({ services }) => {

    return (
        <div>
            <h2 className='text-center text-primary font-bold text-3xl mt-10'>All Services</h2>
            <div className=' my-10'>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default ServiceList;
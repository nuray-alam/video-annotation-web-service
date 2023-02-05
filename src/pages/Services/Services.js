import React from 'react';
import ServiceList from '../../components/Services/ServiceList';
import { getAllServices } from '../../dummy-data/services';

const Services = () => {
    const allServices = getAllServices();
    return (
        <div>
            <ServiceList services={allServices}></ServiceList>
        </div>
    );
};

export default Services;
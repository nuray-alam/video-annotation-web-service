import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceHero from '../../components/Hero/ServiceHero';
import ServiceDetail from '../../components/Services/ServiceDetail';
import { getServiceById } from '../../dummy-data/services';

const ServiceDetails = () => {
    let { serviceId } = useParams();
    const service = getServiceById(serviceId);
    return (
        <div>
            <ServiceHero service={service}></ServiceHero>
            <ServiceDetail service={service}></ServiceDetail>

        </div>
    );
};

export default ServiceDetails;
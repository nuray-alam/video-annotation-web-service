import React from 'react';
import LinkButton from '../ui/LinkButton';

const ServiceHero = ({ service }) => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={service.heroImage} alt={service.name} />
                <div>
                    <h1 className="text-5xl font-bold">{service.name}</h1>
                    <p className="py-6">{service.description}</p>
                    <LinkButton link='/contact'>Get Started</LinkButton>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;
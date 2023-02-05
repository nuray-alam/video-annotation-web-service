import React from 'react';
import LinkButton from '../ui/LinkButton';

const Service = ({ service }) => {
    const { id, name, heroImage, description } = service;
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 p-10 border-2 my-10">
            <div className="">
                <img className='aspect-square' src={heroImage} alt={name} />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-center text-2xl text-primary font-bold">{name}</h2>
                <p className='text-center mb-5'>{description}</p>
                <LinkButton link={`/services/${id}`}>See Details</LinkButton>
            </div>
        </div>

    );
};

export default Service;
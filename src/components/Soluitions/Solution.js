import React from 'react';

const Solution = (props) => {
    const { title, image, description } = props.solution;
    return (
        <div className="card border-4">
            <figure><img className='aspect-square' src={image} alt={title} /></figure>
            <div className="card-body p-2">
                <h2 className="text-center text-2xl text-primary font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Solution;
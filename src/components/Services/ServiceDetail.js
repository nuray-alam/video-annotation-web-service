import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={service.image[0]} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Polygonal Annotation</h2>
                    <p>{service.description}</p>

                </div>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Line Annotation</h2>
                    <p>{service.description}</p>

                </div>
                <figure><img src={service.image[1]} alt="Album" /></figure>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={service.image[2]} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Semantic Annotation</h2>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
import React from 'react';
const Client = ({ client }) => {
    return (
        <div className="card border-4">
            <figure><img src={client.image} alt="car!" /></figure>
            <div className="card-body p-2">
                <h2 className="text-center font-bold">{client.name}</h2>
            </div>
        </div>
    );
};

export default Client;
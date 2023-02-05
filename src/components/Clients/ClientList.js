import React from 'react';
import Client from './Client';

const ClientList = ({clients}) => {
    return (
        <div>
            <h2 className='text-center text-primary font-bold text-3xl'>Our Clients</h2>
            <p className='text-center font-bold text-secondary'>We have worked together on inspiring projects</p>
            <div className=' my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10'>
               {
                clients.map(client => <Client key={client.id} client={client}></Client>)
               }
            </div>

        </div>
    );
};

export default ClientList;
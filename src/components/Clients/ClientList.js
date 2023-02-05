import React from 'react';
import Client from './Client';

const ClientList = () => {
    return (
        <div id='clients'>
            <h2 className='text-center text-primary font-bold text-3xl'>Our Clients</h2>
            <p className='text-center font-bold text-secondary'>We have worked together on inspiring projects</p>
            <section className=' my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10'>
                <Client></Client>
                <Client></Client>
                <Client></Client>
                <Client></Client>
            </section>

        </div>
    );
};

export default ClientList;
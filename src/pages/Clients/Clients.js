import React from 'react';
import ClientList from '../../components/Clients/ClientList';
import { getAllClients } from '../../dummy-data/clients';

const Clients = () => {
    const allClients = getAllClients();
    return (
        <div>
            <ClientList clients={allClients}></ClientList>
        </div>
    );
};

export default Clients;
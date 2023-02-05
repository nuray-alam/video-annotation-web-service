const clients = [

    {
        id: 'c1',
        name: 'Circle Company LTD.',
        image: 'https://i.ibb.co/0fvMhqN/circle.png',
        description: 'This company name is Circle Company LTD.'
    },
    {
        id: 'c2',
        name: 'Foxhub Company LTD.',
        image: 'https://i.ibb.co/ngTjLgT/foxhub.png',
        description: 'This company name is Foxhub Company LTD.'
    },
    {
        id: 'c3',
        name: 'Hexa Company LTD.',
        image: 'https://i.ibb.co/SBxmW9m/hexa.png',
        description: 'This company name is Hexa Company LTD.'
    },
    {
        id: 'c4',
        name: 'Treva Company LTD.',
        image: 'https://i.ibb.co/LttP4Ly/treva.png',
        description: 'This Company name is Treva Company LTD.'
    },
    {
        id: 'c5',
        name: 'Amara Company LTD.',
        image: 'https://i.ibb.co/qmhbB77/amara.png',
        description: 'This Company name is Amara Company LTD.'
    },
    {
        id: 'c6',
        name: 'Aven Company LTD.',
        image: 'https://i.ibb.co/8MvxXdC/aven.png',
        description: 'This Company name is Aven Company LTD.'
    },
    {
        id: 'c7',
        name: 'Circle Company LTD.',
        image: 'https://i.ibb.co/0fvMhqN/circle.png',
        description: 'This company name is Circle Company LTD.'
    },
    {
        id: 'c8',
        name: 'Foxhub Company LTD.',
        image: 'https://i.ibb.co/ngTjLgT/foxhub.png',
        description: 'This company name is Foxhub Company LTD.'
    }
]

export const getFeaturedClients = () => {
    const featuredClient = [];
    for (let i = 0; i < 4; i++) {
        featuredClient.push(clients[i]);
    }
    return featuredClient;
}

export const getAllClients = () => {
    return clients;
}
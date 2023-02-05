import React from 'react';
import Clients from '../../components/Clients/ClientList';
import Divider from '../../components/Divider/Divider';
import HomePageHero from '../../components/Hero/HomePageHero';

const HomePage = () => {
    return (
        <div >
            <HomePageHero></HomePageHero>
            <Divider></Divider>
            <Clients></Clients>
        </div>
    );
};

export default HomePage;
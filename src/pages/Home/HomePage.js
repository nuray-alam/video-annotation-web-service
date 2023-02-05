import React from 'react';
import { Link } from 'react-router-dom';
import ClientList from '../../components/Clients/ClientList';
import Divider from '../../components/ui/Divider';
import HomePageHero from '../../components/Hero/HomePageHero';
import LinkButton from '../../components/ui/LinkButton';
import SolutionList from '../../components/Soluitions/SolutionList';
import { getFeaturedClients } from '../../dummy-data/clients';

const HomePage = () => {
const featuredClients = getFeaturedClients();
    return (
        <div >
            <HomePageHero></HomePageHero>
            <Divider></Divider>
            <SolutionList></SolutionList>
            <Divider></Divider>
            <ClientList clients={featuredClients}></ClientList>
            <LinkButton link='/clients'>All Clients</LinkButton>
        </div>
    );
};

export default HomePage;
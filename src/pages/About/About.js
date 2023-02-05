import React from 'react';
import LinkButton from '../../components/ui/LinkButton';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/x63cBK5/about.png")` }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-accent font-bold">Hello there!</h1>
                        <h1 className="mb-5 text-5xl text-accent font-bold"> We are a very Renowned AI Solution Provider</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <LinkButton link='/contact'>Get Started</LinkButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
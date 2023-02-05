import React from 'react';

const HomePageHero = () => {
    return (
        <div className="hero min-h-screen mb-10" style={{ backgroundImage: `url("https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/09/shutterstock_725383498.png")`, opacity: '' }}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-primary p-5 bg-white bg-opacity-60 rounded-lg font-bold">A Great Data Annotation Platform for Computer Vision</h1>
                    <p className="mb-5 text-primary bg-white bg-opacity-60 rounded-lg">We do video annotation in very efficient way.</p>
                    <button className="btn btn-primary rounded-lg">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomePageHero;
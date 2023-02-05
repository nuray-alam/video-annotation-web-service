import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = (props) => {
    const [theme, setTheme] = useState('corporate');

    const themeChangeHandler = () => {
        theme === 'corporate' ? setTheme('night') : setTheme('corporate');
    }

    return (
        <div data-theme={theme} className='min-h-screen flex flex-col'>
            <Navbar themeChangeHandler={themeChangeHandler} theme={theme}></Navbar>
            <main className='relative flex-1'>
                {props.children}
            </main>
            <Footer className=""></Footer>
        </div>
    );
};

export default Layout;
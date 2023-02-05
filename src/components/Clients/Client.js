import React from 'react';
import hexaLogo from '../../images/hexa.png'
const Client = () => {
    return (
        <div className="card glass">
            <figure><img src={hexaLogo} alt="car!" /></figure>
            <div className="card-body p-2">
                <h2 className="text-center font-bold">Hexa Company LTD.</h2>
            </div>
        </div>
    );
};

export default Client;
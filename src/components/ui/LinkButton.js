import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = (props) => {
    const { link } = props;
    return (
        <div className='text-center'>
            <Link to={link} className="btn btn-primary rounded-lg">{props.children}</Link>
        </div>
    );
};

export default LinkButton;
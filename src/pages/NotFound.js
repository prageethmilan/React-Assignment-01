import React from 'react';
import NotFoundImg from '../assets/images/NotFound.png'

const NotFound = () => {
    return (
        <div className='centered'>
            <img src={NotFoundImg} alt="Page Not Found"/>
        </div>
    );
};

export default NotFound;

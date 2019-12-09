import React from 'react';
import './welcome.css'



const Welcome = ({onClick}) => {
    return (
        <div className='left_welcome'>
            
            <div className=''>
                <h1>Welcome to Player Manager</h1>
            </div>
            <div className='left_welcome_link'>
                <a href='#' className='linked link' onClick={()=>onClick(false)} >
                    Register
                </a>
                <a href='#' className='linked link' onClick={()=>onClick(true)} >
                    Sign in
                </a>
            </div>
            
        </div>
    );
};

export default Welcome;
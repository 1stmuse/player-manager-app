import React from 'react';

const Player = ({name}) => {


    return (
        <div>
            <ul>
                <li>{name} </li>
            </ul>
            <td><button className='btn btn-success'>Info</button></td>
        </div>
    );
};

export default Player;
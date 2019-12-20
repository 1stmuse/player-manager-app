import React from 'react';

import './Player.css'

const Player = ({player, onClick, onPlayerRemove}) => {


    return (
        <div className='player_list'>
            <ul>
                <li className='li_name'>{player.name} </li>
                <li><button 
                    onClick={()=>onClick(player)}
                    className=' butt btn btn-success'
                    >
                    Info
                    </button>
                 </li>
                 <li><button 
                    onClick={()=>onPlayerRemove(player.id)}
                    className=' butt btn btn-danger'
                    >
                    remove
                    </button>
                 </li>
                 <li><button 
                    onClick
                    className=' butt btn btn-primary'
                    >
                    sell
                    </button>
                 </li>
            </ul>
        </div>
    );
};

export default Player;
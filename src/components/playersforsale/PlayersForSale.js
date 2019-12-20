import React from 'react';

import './PlayersForSale.css'



const PlayersForSale = ({player}) => {


    

    return (
        <div className='player_desc'>
            <div className='text-center'>
                <img src={`https://robohash.org/${player.id}?200x200`} alt='image' />
            </div>
            <div className='player_short_info'>
                <table className='player_short_info_table'>
                    <tr>
                        <td>name</td>
                        <td>{player.name} </td>
                    </tr>
                    <tr>
                        <td>nationality</td>
                        <td>{player.nationality} </td>
                    </tr>
                    <tr>
                        <td>Position</td>
                        <td>{player.position} </td>
                    </tr>
                    <tr>
                        <td>Value</td>
                        <td>{player.value} </td>
                    </tr>
                </table>
                <div className='buy_button'>
                    <button className='btn-primary'>Buy</button>
                    <button className='btn-danger butt'>Info</button>
                </div>
            </div>
        </div>
    );
};

export default PlayersForSale;
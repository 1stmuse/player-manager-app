import React from 'react';

import './PlayersForSale.css'



const PlayersForSale = () => {




    return (
        <div className='player_desc'>
            <div>
                <img src='' alt='image' />
            </div>
            <div>
                <table className='table player_short_info'>
                    <tr>
                        <td>name</td>
                        <td>____</td>
                    </tr>
                    <tr>
                        <td>club</td>
                        <td>____</td>
                    </tr>
                    <tr>
                        <td>Position</td>
                        <td>____</td>
                    </tr>
                    <tr>
                        <td>Value</td>
                        <td>____</td>
                    </tr>
                </table>
                <button className='btn btn-primary'>Buy</button>
                <button className='btn btn-danger'>Info</button>
            </div>
        </div>
    );
};

export default PlayersForSale;
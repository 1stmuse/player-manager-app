import React, { Component } from 'react';
import PlayersForSale from '../../components/playersforsale/PlayersForSale'
import PlayerInfo from '../../components/playerInfo/PlayerInfo'

import './MarketPlace.css'




class MarketPlace extends Component {




    render() {
        return (
            <div>
                <div>
                    <h2 className='text-center'>Available Player for sale</h2>
                    <form className='form form-inline'>
                        <input type='search' placeholder='name or club'/>
                        <input type='button' className='btn btn-primary' value='search'/>
                    </form>
                </div>
                <div className='players_for_sale'>
                    <PlayersForSale/>
                </div>
                {/* <di>
                    <PlayerInfo/>
                </di> */}
            </div>
        );
    }
}

export default MarketPlace;
import React, { Component } from 'react';
import PlayersForSale from '../../components/playersforsale/PlayersForSale'
import PlayerInfo from '../../components/playerInfo/PlayerInfo'




class MarketPlace extends Component {




    render() {
        return (
            <div>
                <div>
                    <h2>Available Player for sale</h2>
                    <form className='form form-inline'>
                        <input type='search' placeholder='name or club'/>
                        <input type='button' className='btn btn-primary' value='search'/>
                    </form>
                </div>
                <div>
                    <PlayersForSale/>
                </div>
                <di>
                    <PlayerInfo/>
                </di>
            </div>
        );
    }
}

export default MarketPlace;
import React, { Component } from 'react';
import PlayersForSale from '../../components/playersforsale/PlayersForSale'
import PlayerInfo from '../../components/playerInfo/PlayerInfo'

import './MarketPlace.css'




class MarketPlace extends Component {


    

    render() {

        const playersForSale =this.props.players.map(player=>(
            <PlayersForSale key={player.id} player={player} />
        ))

        return (
            <div>
                <div>
                    <h2 className='text-center'>Available Player for sale</h2>
                    <div className='search'>
                        <marquee direction='left'>ljnuhgurgurfhrufhifhifjhriehxebftvsfegudnuefhufh
                            hrfbrufbrfhbrufhbrurnbhueuhfuehfuehhfuehfuefheufheufhufh
                        </marquee>
                        <form className='form form-inline right_form'>
                        <input type='search' placeholder='name or club'/>
                        <input type='button' className='btn btn-primary' value='search'/>
                        </form>
                    </div>
                </div>
                <div className='players_for_sale'>
                    {playersForSale}
                </div>
                {/* <di>
                    <PlayerInfo/>
                </di> */}
            </div>
        );
    }
}

export default MarketPlace;
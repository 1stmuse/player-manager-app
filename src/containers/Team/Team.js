import React, { Component } from 'react';
import PlayerInfo from '../../components/playerInfo/PlayerInfo'
import Player from '.././../components/players/Player'

class Team extends Component {

    state={
        players:[
            {
                id:1,
                name:'john'
            },
            {
                id:2,
                name:'matt'
            },
            {
                id:3,
                name:'ade'
            },
                
        ]
    }

    render() {
        const players= this.state.players.map(player=>{
            return <Player name={player.name} key={player.id} />
        })

        return (
            <div>
                <div>
                    <h3>Arsenal Football Club</h3>
                </div>
                <div>
                    <div>
                        {players}
                    </div>
                    <div>
                        <PlayerInfo/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Team;
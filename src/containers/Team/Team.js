import React, { Component } from 'react';
import PlayerInfo from '../../components/playerInfo/PlayerInfo'
import Player from '.././../components/players/Player'
import './Team.css'

class Team extends Component {

    state={
        id:this.props.players[0].id,
        name:this.props.players[0].name,
        nationality:this.props.players[0].nationality,
        age:this.props.players[0].age,
        strength:this.props.players[0].strength,
        position:this.props.players[0].position,
        status:this.props.players[0].forSale? 'sold':'not sold',
        value:this.props.players[0].value,
        strong_foot:this.props.players[0].strong_foot,
    }

    infoClick=(player)=>{
        // console.log(player)
        this.setState({
            id:player.id,
            name:player.name,
            nationality:player.nationality,
            age:player.age,
            strength:player.strength,
            position:player.position,
            status:player.forSale?'sold': 'not sold',
            value:player.value,
            strong_foot:player.strong_foot
        })
    }





    render() {
        // console.log(this.props.players)
        const players= this.props.players.map(player=>{
            return <Player 
                        player={player}    
                        key={player.id} 
                        onClick={this.infoClick}
                        onPlayerRemove={this.props.onPlayerRemove}  
                        onPlayerSale={this.props.onPlayerSale}  
                    />
        })
        

        return (
            <div className='con_div'>
                <div className='text-center'>
                    <h3>Arsenal Football Club</h3>
                </div>
                <div className='contain_div'>
                    <div>
                        {players}
                    </div>
                    <div>
                        <PlayerInfo player={this.state} />
                    </div>
                </div>
                <p onClick={()=>this.props.onClick()} >{this.props.number} </p>
            </div>
            
        );
    }
}

export default Team;
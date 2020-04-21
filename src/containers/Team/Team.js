import React, { Component } from 'react';
import PlayerInfo from '../../components/playerInfo/PlayerInfo'
import TeamAccount from '../../components/team_account/TeamAccount'
import Player from '.././../components/players/Player'
import {Route} from 'react-router-dom'
import AddPlayer from '../addPlayer/AddPlayer'
import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'
import Aux from '../../components/hoc'
import './Team.css'


class Team extends Component {

    state={
        players:[],
        playerView:{
            id:'',
            name:'',
            nationality:'',
            age:'',
            strength:'',
            position:'',
            status:'',
            value:'',
            strong_foot:''
        },
        user:{
            name:'',
            id:'',
            account:''
        }
    }

    componentWillMount(){
        const {id, name, account}=this.props.user
        console.log(this.props.user)
        this.setState(()=>{
            return{
                user:{
                    name, id, account
                }
            }
        })
    }

    componentDidMount(){
        fetch(`http://localhost:2000/players/${this.state.user.id}`) 
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const {_id,name,nationality,age,strength,position,status,value,strong_foot}=data[0];
                this.setState({
                    players:data,
                    playerView:{
                        id:_id,name,nationality,age,strength,position,status,value,strong_foot
                    }
                })
            })
            console.log('component has mounted wioth the id', this.state.user.id)

    }

    


    addPlayer=(player)=>{
       this.setState({
            players:[{player}, ...this.state.players]
        })
    }
    

    onPlayerRemove=(id)=>{
        fetch(`http://localhost:2000/players/delete${id}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify()
        })
        .then(response=>{
            if(response.ok){
                this.setState(prevState=>{
                    const newState =prevState.players.filter(player=>{
                        return player.id !== id
                    })
                    return{
                        players: newState
                    }
                })
            }else(alert('player cannot be deleted'))
        })
        .catch(err=> alert('bad request' + err.message))
    }

    infoClick=(player)=>{
        this.setState({
           playerView:{
            id:player._id,
            name:player.name,
            nationality:player.nationality,
            age:player.age,
            strength:player.strength,
            position:player.position,
            status:player.forSale,
            value:player.value,
            strong_foot:player.strong_foot
           }
        })
    }





    render() {
        const players= this.state.players.map(player=>{
            return <Player 
                        player={player}    
                        key={player._id} 
                        onClick={this.infoClick}
                        onPlayerRemove={this.onPlayerRemove}  
                        onPlayerSale={this.props.onPlayerSale}  
                    />
        })
        

        return (
            <div className='con_div'>
                <Header/>
                <Aux>
                    <Route path='/team' exact>
                        <div className='text-center'>
                            <h4>{this.state.user.name} </h4>
                            <h3>Arsenal Football Club</h3>
                        </div>
                        <div>
                            <div>{this.state.user.name} </div>
                            <TeamAccount balance={this.state.account} />
                        </div>
                        <div className='contain_div'>
                            <div>
                                {players}
                            </div>
                            <div>
                                <PlayerInfo player={this.state.playerView} />
                            </div>
                        </div>
                    </Route>
                    <Route path='/team/addPlayer'>
                        <AddPlayer addPlayer={this.addPlayer}  managerId ={this.state.user.id} />
                    </Route>
                </Aux>
                <Footer/>
            </div>
            
        );
    }
}

export default Team;
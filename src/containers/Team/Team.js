import React, { Component } from 'react';
import PlayerInfo from '../../components/playerInfo/PlayerInfo'
import TeamAccount from '../../components/team_account/TeamAccount'
import Player from '.././../components/players/Player'
import {Route} from 'react-router-dom'
import AddPlayer from '../addPlayer/AddPlayer'
import Aux from '../../components/hoc'
import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'
import './Team.css'


class Team extends Component {

    state={
        sold:false,
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
            account:'',
            club: ''
        }
    }

    componentWillMount(){
        const {id, name, account, club}=this.props.user
        this.setState(()=>{
            return{
                user:{
                    name, id, account, club
                }
            }
        })
    }

    componentDidMount(){
        console.log(this.state.user)
        fetch(`/api/players/own/${this.state.user.id}`) 
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
            }).catch(err=> console.log('error oo ' + err.message))
            console.log('component has mounted wioth the id', this.state.user.id)

    }


    addPlayer=(player)=>{
       this.setState({
            players:[...this.state.players, player]
        })
    }

    onPlayerSale=(id)=>{
        fetch('/api/players/sale', {
            method: 'PUT',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({id})
        })
            .then(data=> {
                if(data){
                    this.setState(prevState=>{
                        const newState =prevState.players.filter(player=>{
                            return player._id !== id
                        })
                        return{
                            players: newState
                        }
                    })
                }
            })
            .catch(err=> console.log(err))
      }

    onPlayerRemove=(id)=>{
        console.log(id)
        fetch(`/api/players/delete/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify()
        })
        .then(response=>{
            if(response.ok){
                this.setState(prevState=>{
                    const newState =prevState.players.filter(player=>{
                        return player._id !== id
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
                        onPlayerSale={this.onPlayerSale}  
                    />
        })
        

        return (
            <div className='main-team'>
                <Header/>
                <div className='con_div'>
                    <Route path='/team' exact>
                    <Aux>
                        <div className='text-center'>
                            <h4>{this.state.user.name} </h4>
                            <h3>{this.state.user.club} Football Club</h3>
                        </div>
                        <div>
                            <TeamAccount balance={this.state.user.account} />
                        </div>
                        {this.state.players.length <=0 ?
                            <h1 style={{textAlign:'center', margin:'20px auto', width:'50%'}}>no players</h1> :
                        <div className='contain_div'>
                            <div>
                                {players}
                            </div>
                            <div className='info-div'>
                                <PlayerInfo player={this.state.playerView} />
                            </div>
                        </div>}
                    </Aux>
                    </Route>
                    <Route path='/team/addPlayer'>
                        <AddPlayer addPlayer={this.addPlayer}  managerId ={this.state.user.id} />
                    </Route>
                </div>
                <Footer/>
            </div>
            
        );
    }
}

export default Team;
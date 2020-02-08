import React, { Component } from 'react';
import PlayerInfo from '../../components/playerInfo/PlayerInfo'
import TeamAccount from '../../components/team_account/TeamAccount'
import Player from '.././../components/players/Player'
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
            password:'',
            email:''
        },
        balance:'$4,500,000'
    }


    componentDidMount(){
        // console.log(this.state.players)
        // fetch('http://localhost:2000/players/') 
        //     .then(res=>res.json())
        //     .then(data=>{
        //         const {_id,name,nationality,age,strength,position,status,value,strong_foot}=data[0];
        //         this.setState({
        //             players:data,
        //             playerView:{
        //                 id:_id,name,nationality,age,strength,position,status,value,strong_foot
        //             }
        //         })
        //     })
        //     console.log('component has mounted')

        // const {_id,name,nationality,age,strength,position,status,value,strong_foot}=this.props.players[0]
        // console.log(this.state.players)
        console.log('component did mount')
            this.setState({
                players:this.props.players,
            })
    }

    componentWillMount() {
        console.log('component will mount')
    }

    componentWillUpdate(nextProps, nextState) {
        // localStorage.setItem('players', JSON.stringify(nextState.players))
        console.log('component will update')
    }
    


    addPlayer=(data)=>{
        this.setState({
            players:[...this.state.players, {data}]
        })
    }

    // onPlayerRemove=(id)=>{
    //     console.log(id)
    //     this.setState(prevState=>{
    //         const removePlayer= prevState.players.filter(player=>player._id !== id)
    //         return {
    //             players:removePlayer
    //         }
    //     }) 
    //         console.log(this.state.players)
    // }

    // addPlayer=(player)=>{
    //      fetch('http://localhost:5000/players/addPlayer', {
    //         method: 'POST',
    //         headers:{'Content-Type':'application/json'},
    //         body: JSON.stringify(player)
    //     })
    //         .then(res=>res.json())
    //         .then(data=>this.setState({
    //             players:[...this.state.players, {data}]
    //         }))
    //   }

    infoClick=(player)=>{
        // console.log(player)
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
        console.log('render')
        // console.log(this.state.status)
        const players= this.state.players.map(player=>{
            return <Player 
                        player={player}    
                        key={player._id} 
                        onClick={this.infoClick}
                        onPlayerRemove={this.props.onPlayerRemove}  
                        onPlayerSale={this.props.onPlayerSale}  
                    />
        })
        

        return (
            <div className='con_div'>
                <div className='text-center'>
                    <h4>{this.state.user.name} </h4>
                    <h3>Arsenal Football Club</h3>
                </div>
                <div>
                    <div>{this.state.user.name} </div>
                    <TeamAccount balance={this.state.balance} />
                </div>
                <div className='contain_div'>
                    <div>
                        {players}
                    </div>
                    <div>
                        <PlayerInfo player={this.state.playerView} />
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Team;
import React, { Component } from 'react';
import Aux from '../../components/aux'
import Team from '../Team/Team'
import AddPlayer from '../../containers/addPlayer/AddPlayer'
import MarketPlace from '../../containers/marketPlace/MarketPlace'
import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'
import {Route} from 'react-router-dom'

import './HomePage.css'



class Homepage extends Component {
    state={
        players:[],
        loading: true,
        forSale:true,
        searchTerm:'',
        // data:[]
    }

    componentDidMount(){
        // console.log(this.state.players)
        fetch('http://localhost:2000/players/')
            .then(res=>res.json())
            .then(data=>this.setState({
                players:data,
                loading:false
            }))
    }

    onPlayerRemove=(id)=>{
        console.log(id)
        this.setState(prevState=>{
            const removePlayer= prevState.players.filter(player=>player._id !== id)
            return {
                players:removePlayer
            }
        }) 
            console.log(this.state.players)
    }

    onPlayerSale=(id)=>{

        fetch('http://localhost:5000/players/addPlayer', {
            method: 'UPDATE',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(id)
        })
            .then(res=> res.json())
            .then(data=> this.setState({
                players:[...this.state.players,{data}]
            }))


        // this.setState(prevState=>{
        //   let tod =prevState.players.map(player=>{
        //     if(player.id===id){
        //       player.forSale=!player.forSale
        //       console.log(player)
        //     }
        //   })
        //   return{
        //     prevState:tod
        //   }
        // })
      }

      addPlayer=(player)=>{
        // console.log(player)
        //  fetch('http://localhost:5000/players/addPlayer', {
        //     method: 'POST',
        //     headers:{'Content-Type':'application/json'},
        //     body: JSON.stringify(player)
        // })
        //     .then(res=>res.json())
        //     .then(data=>{
        //         if(data){
        //             this.setState({data})
        //             console.log('player added')
        //         }
        //     })
        console.log('added player in homepage', player)
        this.setState({
            players:[...this.state.players, player]
        })
      }

      onSearch=(searchTerm)=>{
        this.setState({searchTerm})
      }

    render() {
        // console.log(this.state.players)
        const {players,searchTerm}= this.state;
        // const filteredPlayers=players.filter(player=>{
        //     return player.name.toLowerCase().includes(searchTerm.toLowerCase()) || player.club.toLowerCase().includes(searchTerm.toLowerCase())
        // })
        return (
            <div>
                <Header/>
                <div className='home_page'>
                     <Aux >
                    <Route path='/home' exact >
                        {this.state.loading? <div className='spinner'>
                            <div className='spin'></div>
                            <div>LOADING</div>
                        </div> :
                        <MarketPlace players={players} onSearch={this.onSearch} />  }  
                    </Route> 
                    <Route path='/home/addPlayer'>
                        <AddPlayer addPlayer={this.addPlayer} />
                    </Route>
                    <Route path='/home/team'>
                        <Team 
                            players={this.state.players}
                            // data={this.state.data}
                            onPlayerRemove={this.onPlayerRemove}  
                            onPlayerSale={this.onPlayerSale}  
                            user={this.props.user}
                        />
                    </Route>
                </Aux>
                    
                   
                </div>
                <Footer/>
            </div>
          
        );
    }
}

export default Homepage;


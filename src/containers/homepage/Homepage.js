import React, { Component } from 'react';
import Aux from '../../components/aux'
import Team from '../Team/Team'
import AddPlayer from '../../containers/addPlayer/AddPlayer'
import MarketPlace from '../../containers/marketPlace/MarketPlace'
import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'
import {Route} from 'react-router-dom'
import Players from '../../components/data/playerData'

import './HomePage.css'



class Homepage extends Component {
    state={
        players:Players
    }

    componentDidUpdate(){
        console.log(this.state.players)
    }

    onPlayerRemove=(id)=>{
        console.log(id)
        this.setState(prevState=>{
            const removePlayer= prevState.players.filter(player=>player.id !== id)
            return {
                players:removePlayer
            }
        }) 
            console.log(this.state.players)
    }

    onPlayerSale=(id)=>{
        this.setState(prevState=>{
          let tod =prevState.players.map(player=>{
            //check if the id corresponds to the player id
            if(player.id===id){
              player.forSale=!player.forSale
              console.log(player)
            }
          })
          // return the updated state
          return{
            prevState:tod
          }
        })
        console.log('button clicked', id)
      }

      createPlayer=(player)=>{
        //   console.log(player)
          const newPlayer={
              id:Math.floor(Math.random() + this.state.players.length),
              forSale:false,
              name:player.name,
              age:player.age,
              nationality:player.nationality,
              strength:player.strength,
              value:player.value,
              club:player.club,
              strong_foot:player.strong_foot,
              position:player.position
          }
          this.setState({
              players:[ {...newPlayer}, ...this.state.players]
          })
      }


    render() {
        return (
            <div>
                <Header/>
                <div className='home_page'>
                    <Aux >
                    <Route path='/home' exact >
                        <MarketPlace players={this.state.players}/>    
                    </Route> 
                    <Route path='/home/addPlayer'>
                        <AddPlayer players={this.state.players} createPlayer={this.createPlayer} />
                    </Route>
                    <Route path='/home/team'>
                        <Team 
                            players={this.state.players}
                            onPlayerRemove={this.onPlayerRemove}  
                            onPlayerSale={this.onPlayerSale}  
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
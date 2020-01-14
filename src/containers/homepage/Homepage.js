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
        loading: true
    }

    componentDidMount(){
        // console.log(this.state.players)
        fetch('http://localhost:5000/players/')
            .then(res=> res.json())
            .then(data=> this.setState({
                players: data,
                loading: false
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



    render() {
        console.log(this.state.players)
        return (
            <div>
                <Header/>
                <div className='home_page'>
                    {this.state.loading? <div className='spinner'>
                        <div className='spin'></div>
                        <div>LOADING</div>
                    </div> 
                    : <Aux >
                    <Route path='/home' exact >
                        <MarketPlace players={this.state.players}/>    
                    </Route> 
                    <Route path='/home/addPlayer'>
                        <AddPlayer />
                    </Route>
                    <Route path='/home/team'>
                        <Team 
                            players={this.state.players}
                            onPlayerRemove={this.onPlayerRemove}  
                            onPlayerSale={this.onPlayerSale}  
                            user={this.props.user}
                        />
                    </Route>
                </Aux> }
                    
                   
                </div>
                <Footer/>
            </div>
          
        );
    }
}

export default Homepage;
import React, { Component } from 'react';
import aux from '../../components/aux'
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

    onPlayerRemove=(id)=>{
        // console.log(id)
        this.setState(prevState=>{
            const removePlayer= prevState.players.filter(player=>{
                return player.id !== id
            })
            return {
                players:removePlayer
            }
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div className='home_page'>
                    <aux players={this.state.players} >
                    <Route path='/home' exact >
                        <MarketPlace players={this.state.players}/>    
                    </Route> 
                    <Route path='/home/addPlayer'>
                        <AddPlayer players={this.state.players} />
                    </Route>
                    <Route path='/home/team'>
                        <Team 
                            players={this.state.players}
                            onPlayerRemove={this.onPlayerRemove}    
                        />
                    </Route>
                    </aux>
                </div>
                <Footer/>
            </div>
          
        );
    }
}

export default Homepage;
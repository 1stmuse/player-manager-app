import React, { Component } from 'react';
import Aux from '../../components/hoc'
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
        searchTerm:''
        // data:[]
    }

    componentDidMount(){
        fetch('http://localhost:2000/players/forSale')
        .then(res=> res.json())
        .then(players=>{
            console.log('from response', players)
            this.setState({
                players:players,
                loading:false
            })
        })
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
      }

      onSearch=(searchTerm)=>{
        this.setState({searchTerm})
      }

    render() {
        console.log(' from homepage',this.state.players)
        const {players,searchTerm}= this.state;
        return (
            <div className='home-container'>
                <Header/>
                <div className='home_page'>
                    <Aux >
                        {/* <Route path='/home' exact > */}
                            {this.state.loading? <div className='spinner'>
                                <div className='spin'></div>
                                <div>LOADING</div>
                            </div> :
                            <MarketPlace players={players} onSearch={this.onSearch} />  }  
                        {/* </Route>  */}
                    </Aux>
                </div>
                <Footer/>
            </div>
          
        );
    }
}

export default Homepage;


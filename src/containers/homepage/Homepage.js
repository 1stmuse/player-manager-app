import React, { Component } from 'react';
import Aux from '../../components/hoc'
import MarketPlace from '../../containers/marketPlace/MarketPlace'
import {Route} from 'react-router-dom'
import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'

import './HomePage.css'
import Team from '../Team/Team';



class Homepage extends Component {
    state={
        players:[],
        loading: true,
        searchTerm:''
    }

    componentDidMount(){
        fetch('/players/forSale')
        .then(res=> res.json())
        .then(players=>{
            console.log('from response', players)
            this.setState({
                players:players,
                loading:false
            })
        })
        console.log(this.props.user, 'from home')
    }

    onSearch=(searchTerm)=>{
        this.setState({searchTerm})
      }

    render() {
        const {players,searchTerm}= this.state;
        return (
            <div className='home-container'>
                <Header/>
                <div className='home_page'>
                    <Aux >
                        {   this.state.loading? <div className='spinner'>
                            <div className='spin'></div>
                            <div>LOADING</div>
                            </div> : 
                             <MarketPlace players={players} onSearch={this.onSearch} />
                        } 
                    </Aux>
                </div>
                <Footer/>
            </div>
          
        );
    }
}

export default Homepage;


import React, { Component } from 'react';
import aux from '../../components/aux'
import Team from '../Team/Team'
import AddPlayer from '../../containers/addPlayer/AddPlayer'
import MarketPlace from '../../containers/marketPlace/MarketPlace'
import Header from '../../components/header_footer/Header'
import Footer from '../../components/header_footer/Footer'
import {Route} from 'react-router-dom'

import './HomePage.css'



class Homepage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='home_page'>
                    <aux>
                    <Route path='/home' exact component={MarketPlace} /> 
                    <Route path='/home/addPlayer' component={AddPlayer}/>
                    <Route path='/home/team' component={Team} />
                    </aux>
                </div>
                <Footer/>
            </div>
          
        );
    }
}

export default Homepage;
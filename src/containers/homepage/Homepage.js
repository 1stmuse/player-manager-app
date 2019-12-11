import React, { Component } from 'react';
import aux from '../../components/aux'
import Team from '../Team/Team'
import AddPlayer from '../../containers/addPlayer/AddPlayer'
import MarketPlace from '../../containers/marketPlace/MarketPlace'
import Footer from '../../components/header_footer/Footer'



class Homepage extends Component {
    render() {
        return (
            <div>
                <aux>
                <header>{this.props.children} </header>
                <MarketPlace/>
                <AddPlayer/>
                <Team/>
                </aux>
                <Footer/>
            </div>
          
        );
    }
}

export default Homepage;
import React, { Component } from 'react';
import PlayersForSale from '../../components/playersforsale/PlayersForSale'
import PlayerModal from '../../components/player_modal/PlayerModal'
import Modal from '../../components/player_modal/Modal'

import './MarketPlace.css'




class MarketPlace extends Component {

    state={
        id:'',
        name:'',
        nationality:'',
        age:'',
        strength:'',
        position:'',
        status:'',
        value:'',
        strong_foot:'',
        show:false
    }

    info=(id)=>{
        this.props.players.map(player=>{
            if(player._id==id){
                this.setState({
                    id:player._id,
                    name:player.name,
                    nationality:player.nationality,
                    age:player.age,
                    strength:player.strength,
                    position:player.position,
                    status:player.status,
                    value:player.value,
                    strong_foot:player.strong_foot,
                    show:true,
                    searchTerm:''
                })
            }
        })

    }

    onSearch=(event)=>{
        this.setState({searchTerm:event.target.value})
        this.props.onSearch(this.state.searchTerm)
    }

    
      hideModal = () => {
        this.setState({ show: false });
      };
    

    render() {

        const playersForSale = this.props.players.map(player=>(
            <PlayersForSale key={player._id} player={player} info={this.info} />
        ))

        return (
            <div>
                <div>
                    <h2 className='text-center'>Available Player for sale</h2>
                    <div className='search'>
                        <form className='form form-inline right_form'>
                        <input type='search' placeholder='name or club'/>
                        <input type='button' className='btn btn-primary' value='search' onChange={this.onSearch} />
                        </form>
                    </div>
                </div>
                <div className='players_for_sale'>
                    {playersForSale}
                </div>
                <di>
                    <Modal hideModal={this.hideModal} show={this.state.show} >
                        <PlayerModal player={this.state} hideModal={this.hideModal} />
                    </Modal>
                </di>
            </div>
        );
    }
}

export default MarketPlace;
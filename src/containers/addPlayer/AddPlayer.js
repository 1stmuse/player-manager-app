import React, { Component } from 'react';

import './AddPlayer.css'



class AddPlayer extends Component {

    state={
            name:'',
            nationality:'',
            age:'',
            strength:'',
            position:'',
            value:'',
            strong_foot:'',
            club:''
    }


    onHandleChange=(event)=>{
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    createPlayer=(event)=>{
        event.preventDefault();
        const player=this.state
        this.props.addPlayer(player)
        // fetch('http://localhost:5000/players/addPlayer', {
        //     method: 'POST',
        //     headers:{'Content-Type':'application/json'},
        //     body: JSON.stringify(this.state)
        // })
        //     .then(res=>res.json())
        //     .then(data=>console.log(data))
        this.setState({
            name:'',
            nationality:'',
            age:'',
            strength:'',
            position:'',
            value:'',
            strong_foot:'',
            club:''
        })
    }


    render() {
        // console.log(this.props.players)
        return (
            <div className='container text-center'>
                <div>
                    <h2>Add New Player</h2>
                </div>
                <div className='big_form'>
                    <form className='form form-group main_form'>
                        <div className='row main_row'>
                            <p>name</p>
                            <input type='text' className='text' name='name' value={this.state.name} onChange={this.onHandleChange} />
                        </div>
                        <div className='row main_row'>
                            <p>nationality</p>
                            <input type='text' className='text' name='nationality' value={this.state.nationality} onChange={this.onHandleChange} />
                        </div>
                        <div className='row main_row'>
                            <p>club</p>
                            <input type='text' className='text' name='club' value={this.state.club} onChange={this.onHandleChange} />
                        </div>
                        <div className='row main_row'>
                            <p>age</p>
                            <input type='text' className='text' name='age' value={this.state.age} onChange={this.onHandleChange} />
                        </div>
                        <div className='row main_row'>
                            <p>position</p>
                            <input type='text' className='text' name='position' value={this.state.position} onChange={this.onHandleChange} />
                        </div>
                        <div className='row main_row'>
                            <p>strength</p>
                            <input type='text' className='text' name='strength' value={this.state.strength} onChange={this.onHandleChange} />
                        </div>
                        <div className='row main_row'>
                            <p>value</p>
                            <input type='text' className='text' name='value' value={this.state.value} onChange={this.onHandleChange} />
                        </div>
                        <div className='row main_row'>
                            <p>strong foot</p>
                            <input type='text' className='text' name='strong_foot' value={this.state.strong_foot} onChange={this.onHandleChange} />
                        </div>
                        <div>
                        <input type='submit' className='btn btn-primary pl-5 pr-5 mb-5 mt-3' value='Add Player' onClick={this.createPlayer} />
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default AddPlayer;
import React, { Component } from 'react';

import './AddPlayer.css'



class AddPlayer extends Component {

    // state={
    //         id:'',
    //         name:player.name,
    //         nationality:player.nationality,
    //         age:player.age,
    //         strength:player.strength,
    //         position:player.position,
    //         status:player.status? 'sold' : 'not sold',
    //         value:player.value,
    //         strong_foot:player.strong_foot
    // }



    render() {
        console.log(this.props.players)
        return (
            <div className='container text-center'>
                <div>
                    <h2>Add New Player</h2>
                </div>
                <div className='big_form'>
                    <form className='form form-group main_form' method='POST'>
                        <div className='row main_row'>
                            <p>name</p>
                            <input type='text' className='text'/>
                        </div>
                        <div className='row main_row'>
                            <p>nationality</p>
                            <input type='text' className='text'/>
                        </div>
                        <div className='row main_row'>
                            <p>club</p>
                            <input type='text' className='text'/>
                        </div>
                        <div className='row main_row'>
                            <p>age</p>
                            <input type='text' className='text'/>
                        </div>
                        <div className='row main_row'>
                            <p>position</p>
                            <input type='text' className='text'/>
                        </div>
                        <div className='row main_row'>
                            <p>strength</p>
                            <input type='text' className='text'/>
                        </div>
                        <div className='row main_row'>
                            <p>height</p>
                            <input type='text' className='text'/>
                        </div>
                        <div>
                        <input type='submit' className='btn btn-primary pl-5 pr-5 mb-5 mt-3' value='Add Player'/>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default AddPlayer;
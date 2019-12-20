import React, { Component } from 'react';

import './AddPlayer.css'



class AddPlayer extends Component {
    render() {
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
import React, { Component } from 'react';



class AddPlayer extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Add New Player</h2>
                </div>
                <div>
                    <form className='form' method='POST'>
                        <div className='form-group'>
                            <p>name</p>
                            <input type='text' className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <p>name</p>
                            <input type='text' className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <p>name</p>
                            <input type='text' className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <p>name</p>
                            <input type='text' className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <p>name</p>
                            <input type='text' className='form-control'/>
                        </div>
                        <input type='submit' className='btn btn-primary pl-5 pr-5 mb-5 mt-3' value='Add Player'/>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default AddPlayer;
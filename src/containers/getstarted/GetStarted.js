import React, { Component } from 'react';
import Welcome from '../../components/welcome/Welcome'
import Login from '../../components/login-register/Login'
import Register from '../../components/login-register/Register'
import './getstarted.css'



class GetStarted extends Component {

    constructor(){
        super();
        this.state={
            signUp:true
        }
    }

    onLinkClick=(value)=>{
        this.setState({
            signUp:value
        })
    }

    render() {
        

        const slide= this.state.signUp?
             <Login loadUser={this.props.loadUser} /> 
            :
             <Register loadUser={this.props.loadUser} />

        return (
            <div className='container-fluid whole_div'>
                <div className='getstart'>
                <Welcome onClick={this.onLinkClick} />
                {slide}
                </div>
            </div>
        );
    }
}

export default GetStarted;
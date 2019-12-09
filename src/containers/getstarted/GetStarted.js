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
        const applystyle=this.state.signUp

        const style={
            // opacity:'1',
            // transition:'opacity 0.5s ease-in-out',
            shadow:'10px 10px 10px 10'
        }

        const slide= this.state.signUp? <Login style={style} apply={applystyle} /> : <Register style={style}/>

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
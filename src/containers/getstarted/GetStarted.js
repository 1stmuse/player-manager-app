import React, { Component } from 'react';
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

    componentDidMount(){
        localStorage.removeItem('users')
        console.log('removed user')
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
                <div className='welcome-flag'>
                    <div className=''>
                        <h1>Player Manager 2020</h1>
                    </div>
                    <div className='links'>
                        <a href='#' className='' onClick={()=>this.onLinkClick(false)} >
                            Register
                        </a>
                        <a href='#' className='' onClick={()=>this.onLinkClick(true)} >
                            Sign in
                        </a>
                    </div>
                </div>

                <div className='fm-div'>
                    {slide}
                </div>
            </div>
        );
    }
}

export default GetStarted;
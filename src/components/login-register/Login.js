import React from 'react';
import './Login.css'



class Login extends React.Component{
   
    state={
        username:'',
        password:''
    }


    handleChange=(event)=>{
        const {name}= event.target;
        this.setState({
             [name]: event.target.value
        })
        console.log(this.state.name)
   }


   onSubmit=()=>{
       fetch('http://localhost:5000/managers/login',{
           method:'POST',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(this.state)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data){
               this.props.loadUser(data)
           }
       })
   }


    render(){
        return (
            <div className='card signup '>
               <form className="form mb-3 text-primary">
                   <div className='form-group'>
                        <p>Username</p>
                        <input type='text' className='form-control' onChange={this.handleChange} />
                   </div>
                   <div className='form-group'>
                        <p>Password</p>
                        <input type='password' className='form-control' onChange={this.handleChange} />
                   </div>
                   <input type='submit' className='btn btn-primary pl-5 pr-5 mb-5 mt-3' value='login' />
                </form>
            </div>
        );
    }
};

export default Login;
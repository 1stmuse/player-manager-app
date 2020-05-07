import React from 'react';
import { withRouter} from 'react-router-dom'
import './Login.css'



class Register extends React.Component {
    constructor(){
         super()
         this.state={
              name:'',
              email:'',
              username:'',
              club:'',
              password:'',
         }
    }

    handleChange=(event)=>{
         const {name}= event.target;
         this.setState({
              [name]: event.target.value
         })
    }

    handleSubmit=(event)=>{
         
               fetch('http://localhost:2000/managers/register', {
                    method: 'POST',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify(this.state)
               })
              .then(res=>res.json())
               . then(data=>{
                    if(data){
                         this.props.loadUser(data)
                         this.props.history.push('/team')
                    }
               } )

          this.setState({
               name:'',
               email:'',
               username:'',
               club:'',
               password:''
          })
    }

    render(){
     return (
          <div className=''>
             <form className="">
             <div className='fm-group'>
                      <p className=''>Name</p>
                      <input type='text' className='' onChange={this.handleChange} name='name' />
                 </div>
                 <div className='fm-group'>
                      <p>Email</p>
                      <input type='' className='' onChange={this.handleChange} name='email' />
                 </div>
                 <div className='fm-group'>
                      <p className='ml-3'>Username</p>
                      <input type='text' className='' onChange={this.handleChange} name='username' />
                 </div>
                 <div className='fm-group'>
                      <p>Club</p>
                      <input type='text' className='' onChange={this.handleChange} name='club' />
                 </div>
                 <div className='fm-group'>
                      <p className='ml-3'>Password</p>
                      <input type='password' className='' onChange={this.handleChange} name='password'/>
                 </div>
                 <input type='submit' className='' value='Sign up' onClick={this.handleSubmit} />
              </form>
          </div>
      );
    }
};

export default withRouter(Register);
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
              enter: true
         }
    }

    handleChange=(event)=>{
         const {name}= event.target;
         this.setState({
              [name]: event.target.value
         })
         console.log(this.state.name)
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
                         this.props.history.push('/home/team')
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
          <div className='signup card'>
             <form className="form mb-3 text-primary">
             <div className='form-group'>
                      <p className='text-center'>Name</p>
                      <input type='text' className='form-control' onChange={this.handleChange} name='name' />
                 </div>
                 <div className='form-group'>
                      <p>Email</p>
                      <input type='email' className='form-control' onChange={this.handleChange} name='email' />
                 </div>
                 <div className='form-group'>
                      <p>Username</p>
                      <input type='text' className='form-control' onChange={this.handleChange} name='username' />
                 </div>
                 <div className='form-group'>
                      <p>Club</p>
                      <input type='text' className='form-control' onChange={this.handleChange} name='club' />
                 </div>
                 <div className='form-group'>
                      <p>Password</p>
                      <input type='password' className='form-control' onChange={this.handleChange} name='password'/>
                 </div>
                 <input type='submit' className='btn btn-primary pl-5 pr-5' value='Sign up' onClick={this.handleSubmit} />
              </form>
          </div>
      );
    }
};

export default withRouter(Register);
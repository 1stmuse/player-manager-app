import React from 'react';
import { withRouter} from 'react-router-dom'
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
        // console.log(this.state)
   }


   onSubmit=(event)=>{
       event.preventDefault();
       fetch('http://localhost:2000/managers/login',{
           method:'POST',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(this.state)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data){
               console.log(' from login click',data[0])
               this.props.loadUser(data[0])
               this.props.history.push('/home/team')
           }else{
               console.log('no response')
           }
       }).catch(err=> alert(err))
   }


    render(){
        return (
            <div className=''>
               <form className="">
                   <div className='fm-group'>
                        <p className='ml-3'>Username</p>
                        <input type='text' name='username' onChange={this.handleChange} />
                   </div>
                   <div className='fm-group'>
                        <p className='ml-3'>Password</p>
                        <input type='password' name='password' onChange={this.handleChange} />
                   </div>
                   <input type='submit' className='' value='login' onClick={this.onSubmit} />
                </form>
            </div>
        );
    }
};

export default withRouter(Login);
import React from 'react';
import './Login.css'



const Login = ({style, apply}) => {
    return (
        <div style={style} className='card signup '>
           <form className="form mb-3 text-primary">
               <div className='form-group'>
                    <p>Username</p>
                    <input type='text' className='form-control'/>
               </div>
               <div className='form-group'>
                    <p>Password</p>
                    <input type='password' className='form-control'/>
               </div>
               <input type='submit' className='btn btn-primary pl-5 pr-5 mb-5 mt-3' value='login'/>
            </form>
        </div>
    );
};

export default Login;
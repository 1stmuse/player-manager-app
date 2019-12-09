import React from 'react';
import './Login.css'



const Register = () => {
    return (
        <div className='signup card'>
           <form className="form mb-3 text-primary">
           <div className='form-group'>
                    <p>Email</p>
                    <input type='email' className='form-control'/>
               </div>
               <div className='form-group'>
                    <p>Username</p>
                    <input type='text' className='form-control'/>
               </div>
               <div className='form-group'>
                    <p>Password</p>
                    <input type='password' className='form-control'/>
               </div>
               <div className='form-group'>
                    <p>Confirm Password</p>
                    <input type='password' className='form-control'/>
               </div>
               <button className='btn btn-primary pl-5 pr-5' >Sign Up</button>
            </form>
        </div>
    );
};

export default Register;
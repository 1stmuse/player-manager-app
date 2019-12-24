import React from 'react';
import './TeamAccount.css'

function TeamAccount({balance}) {
    return (
        <div className='account'>
            <div>
                <h3>Available Balance</h3>
            </div>
            <div>{balance} </div>
        </div>
    );
}

export default TeamAccount;
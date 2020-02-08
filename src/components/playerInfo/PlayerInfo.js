import React from 'react';
import './playerInfo.css'



const PlayerInfo = ({player}) => {
    return (
        <div className='player_info'>
            <div className='head'>
                <h4>Player Information</h4>
            </div>
            <div className='img_div'>
                <img src={`https://robohash.org/${player.id}?200x200`} alt='image'/>
            </div>
            <div>
               <table className='table info_table'>
                   <tbody>
                   <tr>
                        <td>Name</td>
                        <td>{player.name} </td>
                    </tr>
                    <tr>
                        <td>Nationality</td>
                        <td>{player.nationality} </td>
                    </tr>
                    <tr>
                        <td>age</td>
                        <td>{player.age} </td>
                    </tr>
                    <tr>
                        <td>position</td>
                        <td>{player.position} </td>
                    </tr>
                    <tr>
                        <td>status</td>
                        <td>{player.status?'sold':'not sold'} </td>
                    </tr>
                    <tr>
                        <td>value</td>
                        <td>{player.value} </td>
                    </tr>
                    <tr>
                        <td>strength</td>
                        <td>{player.strength} </td>
                    </tr>
                    <tr>
                        <td>strong foot</td>
                        <td>{player.strong_foot} </td>
                    </tr>
                   </tbody>
               </table>
            </div>
        </div>
    );
};

export default PlayerInfo;
import React from 'react';
import './playerInfo.css'



const PlayerInfo = ({player}) => {
    return (
        <div className='player_info'>
            <div className='head'>
                <h4>Player Information</h4>
            </div>
            <div className='img_div'>
                <img src={`https://robohash.org/${player.id}?200x200`} alt='robohash'/>
            </div>
            <div>
               <table className='table info_table'>
                   <tbody>
                   <tr>
                        <td className='td'>{player.name} </td>
                        <td className='td'>Name</td>
                    </tr>
                    <tr>
                        <td className='td'>{player.nationality} </td>
                        <td className='td'>Nationality</td>
                    </tr>
                    <tr>
                        <td className='td'>{player.age} </td>
                        <td className='td'>age</td>
                    </tr>
                    <tr>
                        <td className='td'>{player.position} </td>
                        <td className='td'>position</td>
                    </tr>
                    <tr>
                        <td className='td'>{player.status?'sold':'not sold'} </td>
                        <td className='td'>status</td>
                    </tr>
                    <tr>
                        <td className='td'>{player.value} </td>
                        <td className='td'>value</td>
                    </tr>
                    <tr>
                        <td className='td'>{player.strength} </td>
                        <td className='td'>strength</td>
                    </tr>
                    <tr>
                        <td className='td'>strong foot</td>
                        <td className='td'>{player.strong_foot} </td>
                    </tr>
                   </tbody>
               </table>
            </div>
        </div>
    );
};

export default PlayerInfo;
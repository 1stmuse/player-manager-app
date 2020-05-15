import React from 'react';
import './Modal.css'



const PlayerModal = ({player, hideModal}) => {
    return (
        <div className='player_modal_info'>
            <div className='img_div'>
                <img src={`https://robohash.org/${player.id}?200x200`} alt='robohash'/>
            </div>
            <div>
               <table className='table info_modal_table'>
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
               </table>
               <div className='but_div' ><button className='btn btn-danger bott' onClick={hideModal}>close</button></div>
            </div>
        </div>
    );
};

export default PlayerModal;
import React from 'react';

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {Link} from 'react-router-dom'
// import {scroller} from 'react-scroll'

const SideDrawer = (props) => {



    return (
       
        <Drawer anchor='right'
        open={props.open}
        onClose={()=>props.onClose(false)}
        >

            <List component='nav'>
                <ListItem button onClick={()=>props.onClose(false)}>
                    <Link to='/home'>Transfer Market</Link>
                </ListItem>

                <ListItem button onClick={()=>props.onClose(false)}>
                    <Link to='/home/team'>Team</Link>
                </ListItem>

                <ListItem button onClick={()=>props.onClose(false)}>
                    <Link to='/home/addPlayer'>Add Player</Link>
                </ListItem>

            
            </List>
        </Drawer>
    );
};

export default SideDrawer;
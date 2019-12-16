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
                <ListItem button onClick={()=>props.onClose(true)}>
                    <Link to='/home/team'>Team</Link>
                </ListItem>

                <ListItem button onClick={()=>console.log('venue')}>
                    Venue INFO
                </ListItem>

                <ListItem button onClick={()=>console.log('high')}>
                    Highlight
                </ListItem>

                <ListItem button onClick={()=>console.log('price')}>
                    Pricing
                </ListItem>

                <ListItem button onClick={()=>console.log('location')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;
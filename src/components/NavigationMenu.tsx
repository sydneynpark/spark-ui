import React from 'react';
import {Drawer} from '@material-ui/core';
import {Link} from 'react-router-dom';
import DRAWER_WIDTH_PERCENTAGE from './layout'

class NavigationMenu extends React.Component {

    render() {
        return <Drawer variant="permanent" style={{width: `calc(${DRAWER_WIDTH_PERCENTAGE}%)`}}>
            <Link to="/">Welcome</Link>
            <Link to="/bio">About Me</Link>
            <Link to="/content">Content</Link>
        </Drawer>
    }
}

export default NavigationMenu;
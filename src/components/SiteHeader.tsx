import React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';


class SiteHeader extends React.Component {

    render() {
        return             <AppBar position="relative">
            <Typography variant="h1">
            spark.wiki
            </Typography>
        </AppBar>

    }
}

export default SiteHeader; 
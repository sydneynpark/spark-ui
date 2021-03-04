import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,    
      }
}))

function DrawerContent(props: any) {
        var classes = useStyles();

        return <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
            > {props.children}
            </Drawer>

}

function PrimaryContent(props: any) {
        var classes = useStyles();

        return <main className={classes.content}>
            {props.children}
        </main>
}

export default {DrawerContent, PrimaryContent};
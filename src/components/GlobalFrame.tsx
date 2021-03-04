import React from 'react';
import { Theme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import {HashRouter, Link, Route, Switch} from 'react-router-dom';


import SiteHeader from './SiteHeader';
import NavigationMenu from './NavigationMenu';
import ContentHome from '../pages/contentHome';
import Bio from '../pages/bio';
import SiteBody from './SiteBody';
import DrawerLayout from '../layout/drawer';


class GlobalFrame extends React.Component {

constructor(props: any) {
    super(props);
}

    theme() : Theme {

        /**
         * dark purple: 462255 - primary
         * fire brick red: 8F250C - error
         * dusty rose: CB807D - secondary
         * slate blue: 6D98BA - info
         * whitish gray: F7F4F3
         * mustard yellow: FFCA3A - warning
         */

         return createMuiTheme({
             palette: {
                 primary: {
                     main: "#462255"
                 },
                 secondary: {
                     main: "#CB807D"
                 },
                 error: {
                     main: "#8F250C"
                 },
                 warning: {
                    main: "#FFCA3A"
                 },
                 info: {
                    main: "#6D98BA"
                 },
                 success: {
                    main: "#5B8C5A"
                 },
                 background: {
                     default:  "#F7F4F3"
                 }
             }, 
             typography: {
                 fontFamily: 'cursive'
             }
         })
    }

    render() {

        return <ThemeProvider theme={this.theme()}>
            <HashRouter>

                <CssBaseline/>
                <DrawerLayout.DrawerContent>
                    <NavigationMenu/>
                </DrawerLayout.DrawerContent>

                <DrawerLayout.PrimaryContent>
                    <SiteHeader/>
                    
                    <Container>
                        <Switch>
                            <Route path="/bio">
                                <Bio/>
                            </Route>
                            <Route path="/content">
                                <ContentHome/>
                            </Route>
                            <Route path="/">
                                <SiteBody/>
                            </Route>
                        </Switch>
                    </Container>

                </DrawerLayout.PrimaryContent>

            </HashRouter>
        </ThemeProvider>
    }
}

export default GlobalFrame;
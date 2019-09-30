import React, { Component } from 'react';
import Aux from '../../hoc/Wrapper';
import Header from '../Header/Header';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler = () => {

        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        console.log('toggler clicked');
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }
    render() {
        console.log('[Render in Layout.js] showSideDrawer:', this.props.showSideDrawer);
        return (
            <Aux>
                <Header closeSidedrawer={this.closeSideDrawerHandler} showSidedrawer={this.sideDrawerToggleHandler} show={this.state.showSideDrawer} />
                {this.props.children} 
            </Aux>
        );
    }
} 

export default Layout;

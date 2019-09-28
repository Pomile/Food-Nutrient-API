import React from 'react';
import classes from './Header.css';
import DrawerToggler from '../Navigation/Sidedrawer/DrawerToggler/DrawerToggler';
import Navigation from '../Navigation/NavigationList/NavigationList';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';
import Logo from '../Logo/Logo';
import Backdrop from '../UI/Backdrop/Backdrop';

const Header = (props) => {
    return (
        <div className={classes.Header}>
            <Backdrop show={props.show} />
            <Sidedrawer show={props.show} clicked={props.closeSidedrawer}  />
            <Logo />
            <DrawerToggler clicked={props.showSidedrawer} />
            <Navigation />    
        </div>  
    );
}

export default Header;

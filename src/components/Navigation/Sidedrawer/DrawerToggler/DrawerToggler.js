import React from 'react';
import classes from './DrawerToggler.css';

const DrawerToggler = (props) => (
    <div className={classes.DrawerToggler} onClick={props.clicked}>
        <div className={classes.DrawerTogglerStroke}></div>
        <div className={classes.DrawerTogglerStroke}></div>
        <div className={classes.DrawerTogglerStroke}></div>
    </div>
)

export default DrawerToggler;

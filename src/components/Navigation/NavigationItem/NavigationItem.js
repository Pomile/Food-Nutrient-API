import React from 'react';
import classes from './NavigationItem.css';

const NavigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a href={props.path}>{props.name}</a>
    </li>
);

export default NavigationItem;

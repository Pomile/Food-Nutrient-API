import React from 'react';
import classes from './NavigationList.css';
import NavigationItem from '../NavigationItem/NavigationItem';


const NavigationList = (props) => {
    const list = [
        { path: '/', name: 'Home' },
        { path: '/products', name: 'Products' }
    ];
    return (
        <ul className={classes.Navigation}>
            {list.map((item, index) => <NavigationItem path={item.path} name={item.name} key={index}/>)}
        </ul>
    );
}

export default NavigationList;

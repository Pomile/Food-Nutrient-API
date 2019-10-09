import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidedrawer.css';

const Sidedrawer = (props) => {
    const list = [{ path: '/', name: 'Home' }, { path: '/products', name: 'Products' }];
    const sideDrawerClasses = props.show ? [classes.Sidedrawer, classes.Open].join(' ') :
        [classes.Sidedrawer, classes.Close].join(' ');
    return (
        <div  className={sideDrawerClasses}>
            <button className={classes.SidedrawerCloseBtn} onClick={() => props.clicked()}>x</button>
            <ul className={classes.SidedrawerNav}>
                {list.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink className={classes.SidedrawerNavItem} to={item.path} exact={props.exact}>{item.name}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidedrawer;

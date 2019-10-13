import React from 'react';
import classes from './Backdrop.css';

const Backdrop = (props) => {
    const backDropStatus = props.show ? classes.BackdropShow : classes.BackdropHide;
    return <div className={[classes.Backdrop, backDropStatus].join(' ')} >{props.children}</div>
}

export default Backdrop;

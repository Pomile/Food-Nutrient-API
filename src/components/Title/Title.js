import React from 'react';
import classes from './Title.css';

const Title = (props) => {
    return (
        <div className={classes.titleBox}>
            <p>{props.children}</p>
        </div>
    )
}

export default Title;

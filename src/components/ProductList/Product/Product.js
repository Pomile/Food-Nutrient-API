import React from 'react';
import classes from './Product.css';

const Prod = (props) => {
    return (
        <div className={classes.product}>
            <img className={classes.productImage} src={props.image} />
            <div className={classes.productName}>{props.title}</div>
        </div>
    );
}

export default Prod;

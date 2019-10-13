import React from 'react';
import classes from './Nutrient.css';

const Nutrient = (props) => {
    return (
        <div className={classes.nutrientRow}>
            <div className={classes.nutrient}>{props.name}</div>
            <div className={classes.nutrientUnit}>{props.unit}</div>
        </div>  
    )
}

export default Nutrient;

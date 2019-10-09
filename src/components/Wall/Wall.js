import React from 'react';
import classes from './Wall.css';
import Aux from '../../hoc/Wrapper';

const Wall = (props) => (
    <Aux>
        <div className={
        (props.type === 'full') ? classes.fullWall  :
            (props.type === 'quarter') ? classes.quarterWall : null}>
        {props.children}
        </div>
    </Aux>)
    ;

export default Wall;

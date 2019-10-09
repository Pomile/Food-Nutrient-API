import React from 'react';
import classes from './Error.css';

const Error = (props) => <div className={classes.error}>{props.children}{'. Plaese try again'}</div>

export default Error;

import React from 'react';
import classes from './GridElement.css';

const element = (props)  => {
    return (
        <div className={classes[props.name]}></div>
    );
}

export default element;
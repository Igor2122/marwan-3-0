import React from 'react';
import classes from './GridElem.css';


const gridElem = (props) => {
    return (
        <div className={classes.GrildChildren} >{props.value}</div>
    );
};

export default gridElem;
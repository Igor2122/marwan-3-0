import React from 'react';
import classes from './GridElement.css';
import Img from 'react-image';
import Spinner from '../../components/UI/Spinner/Spinner'

const element = (props)  => {
    return (
        <div className={[classes[props.name], classes.AllImages].join(' ')}>
        <h3>{props.likes}</h3>
            <Img src={[
                props.images,
                'https://www.example.com/bar.jpg'
                ]}
                loader={<Spinner />}
                className={classes.Animated}
            />
        </div>
    );
}

export default element;
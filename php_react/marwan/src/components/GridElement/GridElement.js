import React from 'react';
import classes from './GridElement.css';
import Img from 'react-image';
import Spinner from '../../components/UI/Spinner/Spinner'

const element = (props)  => {
    return (
        <div className={[classes[props.name], classes.AllImages].join(' ')}>
            <Img height="100%" src={[
                props.images,
                'https://www.example.com/bar.jpg'
                ]}
                loader={<Spinner />}
            />
        </div>
    );
}

export default element;
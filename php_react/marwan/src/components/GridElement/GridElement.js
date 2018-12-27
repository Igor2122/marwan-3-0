import React, {Component} from 'react';
import classes from './GridElement.css';
import Img from 'react-image';
import Spinner from '../../components/UI/Spinner/Spinner'

class Element extends Component {
    


    
    
    componentDidMount() {
        

    }
    
    render () {
        
        
        return (
            <div className={[classes[this.props.name], classes.AllImages].join(' ')}>
            <Img src={[
                this.props.images,
                'https://www.example.com/bar.jpg'
            ]}
            loader={<Spinner />}
            className={classes[this.props.animationClass]}
            />
            {/* <h3>{props.likesIndividal}</h3> */}
        </div>
    );
    }
}

export default Element;
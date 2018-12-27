import React, {Component} from 'react';
import classes from './GridElement.css';
import Img from 'react-image';
import Spinner from '../../components/UI/Spinner/Spinner'
import Tags from '../../components/Tags/Tags';
import OverLayInfo from '../UI/OverLayInfo/OverLayInfo'

class Element extends Component {
    
    state = {
        showOverlay: false,
    }

    showLikesHandler () {
        
    }
    
    
    render () {
        let likesTag = <Spinner />
        if(this.props.likesIndividal){
            likesTag = <Tags type={'h3'} value={this.props.likesIndividal}></Tags> ;
        }
        
        return (
            <div onMouseEnter={this.showLikesHandler} className={[classes[this.props.name], classes.AllImages].join(' ')}>
            <OverLayInfo value={this.props.likesIndividal}/>
            <Img src={[
                this.props.images,
                'https://www.example.com/bar.jpg'
            ]}
            loader={<Spinner />}
            className={classes[this.props.animationClass]}
            />
            {likesTag}
        </div>
    );
    }
}

export default Element;
import React, {Component} from 'react';
import Classes from './About.css';
import AboutComp from '../../components/AboutComp/AboutComp';

class About extends Component {
    render () {
        return (
            <div className={Classes.About}>
                <AboutComp />
            </div>
        );
    }
}

export default About;
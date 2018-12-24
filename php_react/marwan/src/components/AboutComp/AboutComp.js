import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from './AboutComp.css';
import linkdnLogo from '../../assets/svg/linkedin.svg';
import Img from 'react-image'
import Tag from '../Tags/Tags';
import Spinner from '../../components/UI/Spinner/Spinner';

const aboutComp =() => {
        return (
            <Container className={classes.Section}>
                <Row>
                  <Col xs="4">
                    <div className={classes.Tagline}>
                        <Tag type='h1' value='Meet The Chef'></Tag>
                        <p>Experienced Executive Chef with a demonstrated history of working in the hospitality industry. Motivated and enthusiastic Chef who has a real passion for food, and who is sure to exceed your customer’s expectations.</p>
                        <Row>
                          <Col xs="4"></Col>
                          <Col xs="auto">
                          <a href="https://www.cssmatic.com/gradient-generator#'\-moz\-linear\-gradient\%28left\%2C\%20rgba\%2863\%2C54\%2C42\%2C1\%29\%200\%25\%2C\%20rgba\%2821\%2C18\%2C14\%2C1\%29\%20100\%25\%29\%3B'">My Linkedin</a></Col>
                          <Col xs="4">
                          <Img width="35px" src={[
                            linkdnLogo,
                            'https://www.example.com/bar.jpg'
                            ]}
                            loader=<Spinner />
                          />
                          </Col>
                        </Row>    
                    </div>
                    
                  </Col>
                  <Col xs="4">.col-auto - variable width content</Col>
                  <Col xs="4"></Col>
                </Row>
            </Container>
        );
}

export default aboutComp;
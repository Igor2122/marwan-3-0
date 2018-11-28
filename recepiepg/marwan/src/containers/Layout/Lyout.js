import React from 'react';
import {Container, Row, Col} from 'reactstrap';

const layout = (props) => {
return (
   <Container>
      <Row>
         <Col md="4">props.children</Col>
         <Col md="auto">Col 1</Col>
         <Col md="4">Col 1</Col>
      </Row>
   </Container>
);
}



export default layout;
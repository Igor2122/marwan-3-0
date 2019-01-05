import React, {Component} from 'react'
import Navigaton from '../../Navigation/Navigation';
import { Route } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import AdminNavigation from './AdminNavigation/AdminNavigation';
import AddRecepies from './AddRecepie/AddRecepie';

class AdminPage extends Component {

  render() {
    let spacer = {
      height: '200px'
    }
    return (
      <div>
        <Navigaton/>
        <Container>
          <Row>
            <Col xs='3'>
            <div style={spacer}></div>
              <AdminNavigation/>
            </Col>
            <Col xs='9'>
                <Route path="/addRecepies" component = {AddRecepies} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminPage;
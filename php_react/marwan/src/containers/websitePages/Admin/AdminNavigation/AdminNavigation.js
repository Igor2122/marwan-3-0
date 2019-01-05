import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as CstmNavLink  } from 'react-router-dom';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <p>List Based</p>
        <Nav vertical>
          <NavItem>
            <CstmNavLink tag={CstmNavLink} to="/addRecepies">See All Recepies</CstmNavLink>
          </NavItem>
          <NavItem>
            <CstmNavLink tag={CstmNavLink} to="">Add New Recepie</CstmNavLink>
          </NavItem>
          <NavItem>
            <CstmNavLink tag={CstmNavLink} to="">See By Category</CstmNavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    );
  }
}
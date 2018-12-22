// eslint-disable-next-line
import React, { Component } from 'react';
import classNamees from './Navigation.css';
// eslint-disable-next-line
import { Route, NavLink, Switch } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';




class Navigation extends Component {
   
   state = {
      isOpen: false
   }
   
   toggle = () => {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }
   
   
   render() {
      return (
         <div>
           <Navbar color="light" light expand="md">
             <NavbarBrand href="/">reactstrap</NavbarBrand>
             <NavbarToggler onClick={this.toggle} />
             <Collapse isOpen={this.state.isOpen} navbar>
               <Nav className="ml-auto" navbar>
                 <NavItem>
                   <NavLink to="/">Home</NavLink> 
                 </NavItem>
                 <NavItem>
                   <NavLink to="/recepies">Recepies</NavLink> 
                 </NavItem>
               </Nav>
             </Collapse>
           </Navbar>
         </div>
         
         
         );
      }
}


export default Navigation;
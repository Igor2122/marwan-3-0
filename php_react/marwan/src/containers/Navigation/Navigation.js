// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import classNamees from './Navigation.css';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import {  NavLink } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
   } from 'reactstrap';
   
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem




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
         <div className="container">
           <Navbar color="light" light expand="sm" >
             <NavbarToggler onClick={this.toggle} />
             <NavbarBrand href="/">reactstrap</NavbarBrand>
             <Collapse isOpen={this.state.isOpen} navbar>
               <Nav className="ml-auto" navbar>
                 <NavItem>
                   <NavLink tag={Link} to="/">Home</NavLink> 
                 </NavItem>
                 <NavItem>
                   <NavLink tag={Link} to="/recepies">Home</NavLink> 
                 </NavItem>
               </Nav>
             </Collapse>
           </Navbar>
         </div>
         
         
         );
      }
}


export default Navigation;
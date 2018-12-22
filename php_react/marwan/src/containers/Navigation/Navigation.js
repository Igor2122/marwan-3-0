// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import classNamees from './Navigation.css';
// eslint-disable-next-line
import { NavLink as CstmNavLink  } from 'react-router-dom';
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
         <div>
           <Navbar color="primary" light expand="sm" >
             <NavbarToggler onClick={this.toggle} />
             <NavbarBrand href="/">reactstrap</NavbarBrand>
             <Collapse isOpen={this.state.isOpen} navbar>
               <Nav className="ml-auto " navbar>
                 <NavItem>
                   <NavLink tag={CstmNavLink} to="/" >Home</NavLink> 
                 </NavItem>
                 <NavItem>
                   <NavLink tag={CstmNavLink} to="/recepies">Recepies</NavLink> 
                 </NavItem>
               </Nav>
             </Collapse>
           </Navbar>
         </div>
         
         
         );
      }
}


export default Navigation;
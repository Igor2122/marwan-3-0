// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import classes from './Navigation.css';
// eslint-disable-next-line
import { NavLink as CstmNavLink  } from 'react-router-dom';
// eslint-disable-next-line
import {  NavLink } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // eslint-disable-next-line
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
         <div className={classes.Navbar}>
           <Navbar expand="sm" >
             <NavbarToggler onClick={this.toggle} />
             <Collapse isOpen={this.state.isOpen} navbar>
               <Nav className="mx-auto" navbar>
                <NavItem>  
                   <NavLink className="px-5" tag={CstmNavLink} to="/" >Home</NavLink> 
                 </NavItem> 
                 <NavItem>
                   <NavLink className="px-5" tag={CstmNavLink} to="/about" >About</NavLink> 
                 </NavItem>
                 <NavItem>
                   <NavLink className="px-5" tag={CstmNavLink} to="/recepies">Recepies</NavLink> 
                 </NavItem>
               </Nav>
             </Collapse>
           </Navbar>
         </div>
         
         
         );
      }
}


export default Navigation;
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div>
      <Navbar className="sticky">
        <div className="navBrandItems">
          <NavbarBrand>
            <i className="fab fa-instagram fa-2x" />{' '}
            <span className="navTitle">Not Instagram</span>
          </NavbarBrand>
        </div>
        <form action="">
          <input type="text" placeholder="Search" />
        </form>
        <Nav>
          <NavItem>
            <NavLink href="#" className="navLinkImgs">
              <i className="far fa-compass fa-2x" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="navLinkImgs">
              <i className="far fa-heart fa-2x" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="navLinkImgs">
              <i className="far fa-user fa-2x" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default SearchBar;

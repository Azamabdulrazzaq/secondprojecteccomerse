

"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from "@/app/styles/Page-module.css";

import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function App() {
  const [openNavColor, setOpenNavColor] = useState(false);

  return (
    <>
      <MDBNavbar sticky expand='lg' className='navbar' >
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='btn-color'>Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColor(!openNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link btn-color' href={"/"}>Products</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link btn-color' href={"/addProduct"}>Add Products</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link btn-color' href={"/Myorders"}>My Orders</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link btn-color' href={"/Yourcart"}>Your Cart</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link btn-color' href={"/Users"}>Users</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link btn-color' href={"/loginform"}>Log In</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link btn-color' href={"/signupform"}>Sign Up</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='nav-link btn-color' href={"/Logout"}>Log Out</Link>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}



{/* <MDBNavbarLink href='/'>Products</MDBNavbarLink> */ }

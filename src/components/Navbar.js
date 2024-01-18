import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../nike.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light px-sm-5">
        <Link to="/">
          <img src={logo} className="navbar-brand" alt="logo" />
        </Link>
        <ul className="navbar-nav ml-auto">
    <Link to="/list" className="nav-link text-dark mr-3" style={{ fontSize: '1.2rem' }}>
      Products
    </Link>
    <Link to="/list" className="nav-link text-dark mr-3" style={{ fontSize: '1.2rem' }}>
      Sneakers
    </Link>
    <Link to="/list" className="nav-link text-dark mr-3" style={{ fontSize: '1.2rem' }}>
    New Arrivals
    </Link>
    <Link to="/list" className="nav-link text-dark mr-3" style={{ fontSize: '1.2rem' }}>
      Explore
    </Link>
    <Link to="/login" className="nav-link text-dark mr-3" style={{ fontSize: '1.2rem' }}>
      Sign-In
    </Link>
  </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" aria-hidden="true"></i>
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </nav>
    );
  }
}

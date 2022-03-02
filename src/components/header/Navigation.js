import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import "./Navigation.css";
import logoImage from "../../assets/images/logo.png";

const Navigation = (props) => {

  return (
    <>
    <Navbar className="navbar" expand="sm">
      <Container fluid>
        <Navbar.Brand href="#" className="color">
          <img
            alt="logo"
            src={logoImage}
            className="logo"
          />
          GUNWAR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            styles={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <main className={props.web3Provider ?  "disconnectBtn" : "connectBtn"}>
              {props.web3Provider ? (
                <a className="btnColor custom-button">{props.account}</a>
              ) : (
                <a className="btnColor custom-button" onClick={props.connect}>Connect Wallet</a>
              )}
              <div className="disconnect">
                <ul>
                  <li>
                    <a onClick={props.disconnect}>Disconnect</a>
                  </li>
                </ul>
              </div>
            </main>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Navigation;

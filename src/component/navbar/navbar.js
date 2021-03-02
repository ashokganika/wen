import React, { Component } from "react";
import { NavBarItems } from "../../constant";
import Bank from "../Bank/Bank";
import Home from "../home/Home";
import NavbarItem from "../NavbarItem/NavbarItem";
import "./navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentId: null,
    };
  }

  handleClick = (id) => {
    console.log(id);
    this.setState({ componentId: id });
  };

  render() {
    let { componentId } = this.state;
    const navBarIttems = NavBarItems;
    return (
      <>
        <div className="navbar">
          <div id="logo" onClick={() => this.handleClick(null)}>
            W<span>EN</span>
          </div>
          {navBarIttems.map(({ id, name }) => (
            <NavbarItem
              key={id}
              name={name}
              onClick={() => this.handleClick(id)}
            />
          ))}
        </div>
        <div className="space"></div>
        <div className="com">
          {" "}
          {componentId === 1 && <Home />}
          {componentId === 2 && <h2>About US</h2>}
          {componentId === 3 && <h2>Products</h2>}
          {componentId === 4 && <Bank />}
          {componentId === 5 && <h2>Gallery</h2>}
        </div>
      </>
    );
  }
}

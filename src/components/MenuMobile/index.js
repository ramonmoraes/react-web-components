import React, { Component } from "react";
import "./style.css";

class MenuMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: (this.props.active) ? this.props.active : false
    };
  }

  toggleMenu = () => {
    this.setState({
      active: !this.state.active
    });
  };

  navStopPropagation(ev) {
    ev.stopPropagation();
  }

  getListOfButtons = () => {
    const { active } = this.state;
    const listOfChildren = this.props.children.length
      ? this.props.children
      : [this.props.children];

    return listOfChildren.map((child, count) => {
      const { action, children } = child.props;
      const onChildClick = () => {
        if (action) action();
        this.toggleMenu();
      };
      return (
        <button key={count} onClick={onChildClick}>
          {children}
        </button>
      );
    });
  };

  render() {
    const { active } = this.state;
    const listOfButtons = this.getListOfButtons();
    const menuMobileClasss = active
      ? "MenuMobile MenuMobile--active"
      : "MenuMobile";
    const overlay = active ? (
      <div className="MenuMobile-overlay" onClick={this.toggleMenu} />
    ) : null;

    return (
      <nav className={menuMobileClasss}>
        <div className="MenuMobile-topBar">
          <button onClick={this.toggleMenu}>
            {" "}
            <b> MENU </b>{" "}
          </button>
        </div>
        {overlay}
        <div className="MenuMobile-sideNav" onClick={this.navStopPropagation}>
          <header className="MenuMobile-sideNav-header">
            <h1 className="datClass">Header</h1>
          </header>
          <div className="MenuMobile-sideNav-buttons">
            {listOfButtons.map(menuButton => menuButton)}
            <button onClick={this.toggleMenu}> Fechar </button>
          </div>
        </div>
      </nav>
    );
  }
}
export default MenuMobile;

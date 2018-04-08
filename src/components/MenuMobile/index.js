import React, { Component } from "react";
import "./style.css";

class MenuMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active ? true : false
    };
  }

  hideMenu = () => {
    this.setState({
      active: false
    });
  };

  showMenu = () => {
    this.setState({
      active: true
    });
  };

  navStopPropagation(ev) {
    ev.stopPropagation();
  }

  render() {
    const { active } = this.state;

    const listOfButtons = this.props.children.length
      ? this.props.children
      : [this.props.children];

    const containerClass = active
      ? "side-nav-container side-nav-container-overlay"
      : "side-nav-container";
    const navClass =
      "side-nav " + (active ? "side-nav-enabled" : "side-nav-disabled");

    return (
      <nav className="sticky-top">
        <div className="top-menu">
          <button onClick={this.showMenu}>
            {" "}
            <b> MENU </b>{" "}
          </button>
        </div>
        <div className={containerClass} onClick={this.hideMenu}>
          <div className={navClass} onClick={this.navStopPropagation}>
            <header>
              <h1 className="datClass">Header</h1>
            </header>

            <div className="btn-wrapper">
              {listOfButtons.map(menuButton => menuButton)}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default MenuMobile;

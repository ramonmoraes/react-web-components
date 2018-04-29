import React, { Component } from "react";
import OverlayFade from '../OverlayFade';
import "./style.css";

class MenuMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active ? this.props.active : false
    };
  }

  toggleMenu = () => {
    this.setState({
      active: !this.state.active
    });
  };

  handleSideNav(ev){
   ev.stopPropagation();
   console.log(ev);
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
    
    return (
      <nav className={menuMobileClasss}>
        <OverlayFade condition={active} handleClick={this.toggleMenu} />
        <div className="MenuMobile-topBar">
          <button onClick={this.toggleMenu}>
            {" "}
            <b> MENU </b>{" "}
          </button>
        </div>
        <div className="MenuMobile-sideNav" ref={(sideNav)=> this.sideNav = sideNav}onClick={this.handleSideNav}>
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

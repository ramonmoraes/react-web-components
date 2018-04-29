import React, { Component } from "react";
import OverlayFade from "../OverlayFade";
import "./style.css";

class MenuMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active ? this.props.active : true,
      slidedX: -5,
    };
  }

  toggleMenu = () => {
    this.state.active ? this.closeMenu() : this.openMenu();
  };

  closeMenu = () => {
    this.setState({ active: false });
  };

  openMenu = () => {
    this.setState({ active: true });
  };

  handleSideNav(ev) {
    ev.stopPropagation();
  }

  componentDidMount() {
    this.addSwipeListener();
  }

  addSwipeListener() {
    const { sideNav } = this;
    let start, distance;

    sideNav.addEventListener("touchstart", ev => {
      start = ev.targetTouches[0].clientX;
    });

    sideNav.addEventListener("touchmove", ev => {
      distance = ev.changedTouches[0].clientX - start;
      const swipeObject = {
        distance,
        ev
      };
      this.swipeAction(swipeObject);
    });

    const endParameter = 140 * -1;
    sideNav.addEventListener("touchend", () => {
      if (distance > endParameter && distance < 0) {
        this.restoreInitialPosition();
      } else if (distance < 0) {
        this.closeMenu();
        this.restoreInitialPosition();
      } else {
        this.restoreInitialPosition();
      }
    });
  }

  swipeAction = swipeObject => {
    const { distance } = swipeObject;
    if (distance < 0) {
      this.setState({
        slidedX: distance
      });
    }
  };

  restoreInitialPosition = () => {
    this.setState({ slidedX: -5 });
  };

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
    const { active, slidedX } = this.state;
    const listOfButtons = this.getListOfButtons();
    const menuMobileClasss = active
      ? "MenuMobile MenuMobile--active"
      : "MenuMobile";
    const leftStyle = { left: slidedX + "px" };
    return (
      <nav className={menuMobileClasss}>
        <OverlayFade condition={active} handleClick={this.toggleMenu} />
        <div className="MenuMobile-topBar">
          <button onClick={this.toggleMenu}>
            {" "}
            <b> MENU </b>{" "}
          </button>
        </div>

        <div
          className="MenuMobile-sideNav"
          ref={sideNav => (this.sideNav = sideNav)}
          onClick={this.handleSideNav}
          style={leftStyle}
        >
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

import React, { Component } from "react";
import OverlayFade from "../OverlayFade";
import "./style.css";

class MenuMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active ? this.props.active : true,
      dragged: false,
      slidedX: -5
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
    const { sideNav, sideNavHelper } = this;
    let start, distance, timeStart;

    sideNav.addEventListener("touchstart", ev => {
      start = ev.targetTouches[0].clientX;
    });

    sideNav.addEventListener("touchmove", ev => {
      distance = ev.changedTouches[0].clientX - start;
      this.swipeAction(distance);
    });

    sideNav.addEventListener("touchend", () => {
      if (distance > 140 * -1 && distance < 0) {
        this.restoreInitialPosition();
      } else if (distance < 0) {
        this.closeMenu();
      } 
      this.restoreInitialPosition();
    });

    sideNavHelper.addEventListener("touchstart", ev => {
      start = ev.targetTouches[0].clientX;
      timeStart = ev.timeStamp;
    });

    sideNavHelper.addEventListener("touchend", (ev) => {
      distance = ev.changedTouches[0].clientX - start;
      const moveDuration = ev.timeStamp - timeStart;
      if(moveDuration < 300 && distance > 70) {
        this.openMenu();
      }
    });
  }

  swipeAction = distance => {
    if (distance < 0) {
      this.setState({
        slidedX: distance,
        dragged: true,
      });
    }
  };

  restoreInitialPosition = () => {
    this.setState({ 
      slidedX: -5,
      dragged: false,
    });
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
      };

      if (child.type === "button") {
        return (
          <button key={count} onClick={onChildClick}>
            {children}
          </button>
        );
      }

      return child;
    });
  };

  render() {
    const { active, slidedX, dragged } = this.state;
    const listOfButtons = this.getListOfButtons();
    const menuMobileClasss = active
      ? "MenuMobile MenuMobile--active"
      : "MenuMobile";
    let draggableStyle = { left: slidedX + "px" };
    const sideNavClass = (dragged) 
      ? "MenuMobile-sideNav MenuMobile-sideNav--dragged"  
      : "MenuMobile-sideNav";
      return (
      <nav className={menuMobileClasss}>
        <OverlayFade condition={active} handleClick={this.toggleMenu} />
        <span
          ref={sideNavHelper => (this.sideNavHelper = sideNavHelper)}
          className="MenuMobile-sideNav-helper"
        />
        <div className="MenuMobile-topBar">
          <button className="MenuMobile-topBar-icon" onClick={this.toggleMenu}>
            <b className="material-icons">menu</b>
          </button>
        </div>

        <div
          className={sideNavClass}
          ref={sideNav => (this.sideNav = sideNav)}
          onClick={this.handleSideNav}
          style={draggableStyle}
        >
          <header className="MenuMobile-sideNav-header">
            <h1 className="datClass">Header</h1>
          </header>
          <div className="MenuMobile-sideNav-buttons" onClick={this.closeMenu}>
            {listOfButtons.map(menuButton => menuButton)}
            <button onClick={this.toggleMenu}> Fechar </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default MenuMobile;

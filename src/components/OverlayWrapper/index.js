import React, { Component } from "react";
import "./style.css";

class OverlayFade extends Component {
  handleClick = ev => {
    ev.stopPropagation();
    this.props.handleClick(ev);
  };

  render() {
    return (
      <div className="OverlayFade" onClick={this.handleClick}></div>
    );
  }
}
export default OverlayFade;

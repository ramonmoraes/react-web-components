import React, { Component } from "react";
import "./style.css";

class OverlayWrapper extends Component {
  handleClick = ev => {
    ev.stopPropagation();
    this.props.handleClick(ev);
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleClick}></div>
    );
  }
}
export default OverlayWrapper;

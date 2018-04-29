import React, { Component } from "react";
import "./style.css";

class OverlayFade extends Component {
  handleClick = ev => {
    ev.stopPropagation();
    this.props.handleClick(ev);
  };

  render() {
    const { condition = true} = this.props;
    return condition 
    ? (<div className="OverlayFade" onClick={this.handleClick}></div>)
    : null;
  }
}
export default OverlayFade;

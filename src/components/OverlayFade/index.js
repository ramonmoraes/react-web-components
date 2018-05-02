import React, { Component } from "react";
import "./style.css";

class OverlayFade extends Component {
  handleClick = ev => {
    ev.stopPropagation();
    this.props.handleClick(ev);
  };
  
  render() {
    const { condition = true} = this.props;
    const body = document.body; 
    if (condition) {
      body.classList.add('unscrollable');
    } else {
      body.classList.remove('unscrollable');
    }

    return condition 
    ? (<div className="OverlayFade" onClick={this.handleClick} onTouchMove={this.handleClick}></div>)
    : null;
  }
}
export default OverlayFade;

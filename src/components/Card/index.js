import React, { Component } from "react";
import "./style.css";

class OverlayWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleClick = ev => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    let descriptionClass = "CardComponent-description";
    if (this.state.isOpen) descriptionClass += " CardComponent-description--toggled";

      return (
        <div className="CardComponent">
          <div className="CardComponent-header" onClick={this.handleClick}>
            <img
              className="CardComponent-image"
              src={"/" + this.props.image}
              alt={this.props.title + "-image"}
            />
          </div>

        <h2 className="CardComponent-title"> {this.props.title} </h2>
        <span className="CardComponent-subtitle"> {this.props.subtitle} </span>

          <div className={descriptionClass}>
            <p className="CardComponent-text"> {this.props.text} </p>
          </div>

          <div className="CardComponent-actions">
            <button className="CardComponent-button"> + </button>
          </div>
        </div>
      );
  }
}
export default OverlayWrapper;

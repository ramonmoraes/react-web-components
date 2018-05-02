import React, { Component } from "react";
import RoundedButton from '../RoundedButton';

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

  renderReadMore = () => {
    let readMoreClass="CardComponent-readmore";
    if (!this.state.isOpen) readMoreClass += " CardComponent-readmore--visible";

    return (
      <div className={readMoreClass}onClick={this.handleClick}>
        Leia mais!
      </div>
    );
  }

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
          {this.renderReadMore()}
          <div className="CardComponent-actions">
            <RoundedButton
              icon="phone"
            />
          </div>
        </div>
      );
  }
}
export default OverlayWrapper;

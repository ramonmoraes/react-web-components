import React, { Component } from "react";
import "./style.css";

class OverlayWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { children: null };
  }

  componentDidMount() {
    this.setState({ children: this.props.children });
  }

  handleClick = ev => {
    ev.stopPropagation();
    this.props.handleClick(ev);
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleClick}>
        {this.state.children}
      </div>
    );
  }
}
export default OverlayWrapper;

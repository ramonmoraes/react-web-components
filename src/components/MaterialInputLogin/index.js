import React, { Component } from "react";
import "./style.css";

class MaterialInputLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      value: this.props.value || ""
    };
  }

  handleChange = ev => {
    this.setState({ value: ev.target.value });
  };
  handleFocus = () => {
    this.setState({ isActive: true });
  };
  handleBlur = () => {
    if (this.state.value === "") {
      this.setState({ isActive: false });
    }
  };

  render() {
    const materialClass = this.state.isActive
      ? "MaterialLogin MaterialLogin--active"
      : "MaterialLogin";
    return (
      <div className={materialClass}>
        <label
          className="MaterialLogin-placeholder"
          onClick={this.handleFocus}
          htmlFor={this.props.name + "-input"}
        >
          {this.props.placeholder}
        </label>
        <input
          className="MaterialLogin-input"
          name={this.props.name}
          id={this.props.name + "-input"}
          ref={thisInput => (this.input = thisInput)}
          value={this.state.value}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          placeholder={this.props.placeholder}
          type={this.props.type || "text"}
        />
      </div>
    );
  }
}

export default MaterialInputLogin;

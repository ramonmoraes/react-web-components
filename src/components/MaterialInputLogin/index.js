import React, { Component } from "react";
import "./style.css";

class MaterialInputLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isIdle: false,
      value: this.props.value || ""
    };
  }

  handleChange = ev => {
    this.setState({ value: ev.target.value });
  };

  handleFocus = () => {
    this.setState({
      isActive: true,
      isIdle: false
    });
  };

  handleBlur = () => {
    if (this.state.value === "") {
      this.setState({
        isActive: false,
        isIdle: false
      });
    } else {
      this.setState({
        isIdle: true
      });
    }
  };

  getId = () => `${this.props.name}-input`;
  getIcon = () => {
    const { icon } = this.props;
    return icon ? <span className={`icon-${icon}`}> </span> : null;
  };
  render() {
    const { isActive, isIdle } = this.state;
    const { error } = this.props;

    let materialClass = isActive
      ? "MaterialLogin MaterialLogin--active"
      : "MaterialLogin";

    if (isIdle) materialClass += " MaterialLogin--idle";
    if (error) materialClass += " MaterialLogin--error";

    const inputClass = error
      ? "MaterialLogin-input MaterialLogin-input--error"
      : "MaterialLogin-input";

    return (
      <div className={materialClass}>
        {this.getIcon()}
        <div className="MaterialLogin-content">
          <label className="MaterialLogin-placeholder" htmlFor={this.getId()}>
            {this.props.placeholder}
          </label>
          <input
            className={inputClass}
            name={this.props.name}
            id={this.getId()}
            ref={thisInput => (this.input = thisInput)}
            value={this.state.value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            placeholder={this.props.placeholder}
            type={this.props.type || "input"}
            autocomplete={this.props.autoComplete}
          />
          <span className="MaterialLogin-guide-line"> </span>
          <div className="MaterialLogin-error"> {error} </div>
        </div>
      </div>
    );
  }
}

export default MaterialInputLogin;

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

  getAuxiliaryMsg = () => {
    const { error, helper} = this.props;
    return ( error )
    ? (<div className="MaterialLogin-error"> {error} </div>)
    : (<div className="MaterialLogin-helper"> {helper} </div>)
  };
  render() {
    const { isActive, isIdle } = this.state;
    const { error, disabled } = this.props;

    let materialClass = "MaterialLogin";
    if (isActive) materialClass += " MaterialLogin--active";
    if (isIdle) materialClass += " MaterialLogin--idle";
    if (error) materialClass += " MaterialLogin--error";

    let inputClass = "MaterialLogin-input";
    if (error) inputClass += " MaterialLogin-input--error";
    if (disabled) inputClass += " MaterialLogin-input--disabled";

    return (
      <div className={materialClass}>
        {this.getIcon()}
        <div className="MaterialLogin-content">
          <label className="MaterialLogin-label" htmlFor={this.getId()}>
            {this.props.label}
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
            autoComplete={this.props.autoComplete}
            disabled={this.props.disabled}
          />
          <span className="MaterialLogin-guide-line"> </span>
          {this.getAuxiliaryMsg()}
        </div>
      </div>
    );
  }
}

export default MaterialInputLogin;

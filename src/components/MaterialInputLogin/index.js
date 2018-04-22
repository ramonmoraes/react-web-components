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

  render() {
    const { isActive, isIdle } = this.state;
    let materialClass = isActive
      ? "MaterialLogin MaterialLogin--active"
      : "MaterialLogin";

    if (isIdle) {
      materialClass =
        "MaterialLogin MaterialLogin--active MaterialLogin--completed";
    }

    return (
      <div className={materialClass}>
        <label className="MaterialLogin-placeholder" htmlFor={this.getId()}>
          {this.props.placeholder}
        </label>
        <input
          className="MaterialLogin-input"
          name={this.props.name}
          id={this.getId()}
          ref={thisInput => (this.input = thisInput)}
          value={this.state.value}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          placeholder={this.props.placeholder}
          type={this.props.type || "text"}
        />
        <span className="MaterialLogin-complementary"> </span>
      </div>
    );
  }
}

export default MaterialInputLogin;

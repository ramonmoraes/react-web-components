import React, { Component } from "react";
import "./style.css";

class MaterialInputLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isCompleted: false,
      value: this.props.value || ""
    };
  }

  handleChange = ev => {
    this.setState({ value: ev.target.value });
  };

  handleFocus = () => {
    this.setState({
      isActive: true,
      isCompleted: false
    });
  };

  handleBlur = () => {
    if (this.state.value === "") {
      this.setState({
        isActive: false,
        isCompleted: false
      });
    } else {
      this.setState({
        isCompleted: true
      });
    }
  };

  getId = () => `${this.props.name}-input`;

  render() {
    const { isActive, isCompleted } = this.state;
    let materialClass = isActive
      ? "MaterialLogin MaterialLogin--active"
      : "MaterialLogin";

    if (isCompleted) {
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

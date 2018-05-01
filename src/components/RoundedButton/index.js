import React, { Component } from "react";
import "./style.css";

class RoundedButton extends Component {
  getOffSet = () => {
    const { offSet } = this.props;
    let styleObj = {};

    if (offSet) {
      styleObj = {
        position: "absolute",
      };
      const offSetPositionList = offSet.split(" ");
      offSetPositionList.forEach(offSetPosition => {
        switch (offSetPosition) {
          case "left":
            styleObj["left"] = "-15px";
            break;
          case "middle":
            styleObj["left"] = "50%";
            break;
          case "right":
            styleObj["right"] = "-15px";
            break;
          case "top":
            styleObj["top"] = "-15px";
            break;
          case "bottom":
            styleObj["bottom"] = "-15px";
            break;
          default:
          break;
        }
      });
    }
    return styleObj;
  };

  render() {
    const { text, icon, style } = this.props;
    const newStyle = {
      ...style,
      ...this.getOffSet()
    };
    console.log(newStyle);
    let content;
    if (text) content = text;
    if (icon) content = <i className="material-icons">{icon}</i>;
    this.getOffSet();

    return (
      <button
        className="RoundedButton"
        onClick={this.props.onClick}
        style={newStyle}
      >
        {content}
      </button>
    );
  }
}

export default RoundedButton;

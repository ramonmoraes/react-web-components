import React, { Component } from "react";
import "./style.css";

class AppSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSlide: true,
      slideIndex: this.props.slideIndex || 0
    };
  }

  componentDidMount() {
    this.addSwipeListener();
  }
  
  addSwipeListener = () => {
    const listOfChildren = this.props.children;
    listOfChildren.forEach(element => {
      element.addEventListener("touchmove", this.swipeAction());
    });
  };

  swipeAction = () => {};
  render() {
    return <div className="AppSlider">{this.props.children}</div>;
  }
}

export default AppSlider;

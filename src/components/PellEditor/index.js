import React, { Component } from "react";
import pell from "pell";

import RoundedButton from '../RoundedButton';
import "./style.css";

class PellEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = text => {
    const onChange = this.props;
    this.setState({
      text
    });
    if(onChange) {
      onChange(text);
    }
  };

  handleSubmit = () => {
    const { handleSubmit } = this.props;
    if( handleSubmit ) {
      handleSubmit(this.state.text);
    }
  }
  
  componentDidMount() {
    const pellInitOptions = {
      actions,
      classes,
      element: document.querySelector(".PellEditor-wrapper"),
      onChange: this.handleChange
    };
    pell.init(pellInitOptions);
  }

  render = () => (
    <div className="PellEditor">
      <div className="PellEditor-wrapper" />
      <RoundedButton
        onClick={this.handleSubmit}
        offSet="bottom right"
        icon={"send"}
      />
    </div>
  );
}

export default PellEditor;

const classes = {
  actionbar: "PellEditor-actionbar",
  content: "PellEditor-content",
  button: "PellEditor-button"
};

const actions = [
  "bold",
  "underline",
  {
    name: "italic",
    result: () => pell.exec("italic")
  },
  {
    name: "image",
    result: () => {
      const url = window.prompt("Enter the image URL");
      if (url) pell.exec("insertImage", url);
    }
  },
  {
    name: "link",
    result: () => {
      const url = window.prompt("Adicione o link da imagem");
      if (url) pell.exec("createLink", url);
    }
  }
];

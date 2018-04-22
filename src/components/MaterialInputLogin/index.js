import React, { Component } from "react";
import "./style.css";

class MaterialInputLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            value: this.props.value
        }
    }

    render() {
        return(
            <div className="material">
                <input value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange} />
                <span className="material"></span>
            </div>
        )
    }

}

export default MaterialInputLogin;

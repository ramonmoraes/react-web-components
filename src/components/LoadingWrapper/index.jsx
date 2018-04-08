import React, { Component } from 'react';
const loadingImg = 'spinner.svg';

class LoadingWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        }
    }

    setLoaded =()=> {
        this.setState({
            loaded: true,
        });
    }

    spinner =()=> <img src={loadingImg} alt={'loading'}/>;

    render() {
        const { loaded } = this.state;
        const { children } = this.props;
        
        const props = {
            ...children.props,
            setLoaded : this.setLoaded,
        };

        const newChildren = {
            ... children,
            props,
        };
        
        return (loaded) ? newChildren : this.spinner();
    }

}
export default LoadingWrapper;
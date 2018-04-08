import React, { Component } from 'react';
import './style.css';

class MenuTabletDynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
        }
    }

    toggleMenu =() => {
        const { active } = this.state;
        this.setState({
            active: !active,
        });
    }
    
    render() {
        const menuClass = (this.state.active) ? 'menu-tablet-dynamic menu-tablet-dynamic-active' : 'menu-tablet-dynamic';

        return (
            <div className={menuClass}>
                <button className='menu-tablet-dynamic-toggle-btn' onClick={this.toggleMenu}>
                    XXX
                </button>
                <nav className='menu-tablet-dynamic-wrapper'>
                    {this.props.children.map(item => item)}
                </nav>
            </div>
        );
    }
}
export default MenuTabletDynamic;
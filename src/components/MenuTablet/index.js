import React, { Component } from 'react';
import './style.css';

class MenuTablet extends Component {
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
    
    getListOfButtons = () => {
        const { active } = this.state;
        const listOfChildren = this.props.children.length
          ? this.props.children
          : [this.props.children];
    
        return listOfChildren.map((child, count) => {
          const { action, children } = child.props;
          const onChildClick = () => {
            if (action) action();
            this.toggleMenu();
          };
          return (
            <button key={count} onClick={onChildClick}>
              {children}
            </button>
          );
        });
      };

    render() {
        const menuClass = (this.state.active) ? 'menu-tablet-dynamic menu-tablet-dynamic-active' : 'menu-tablet-dynamic';
        const listOfButtons = this.getListOfButtons();
        console.log(listOfButtons);
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
export default MenuTablet;
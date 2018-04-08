import React, { Component } from 'react';
import MenuMobile from './components/MenuMobile';
import MenuTabletDynamic from './components/MenuTabletDynamic';

class App extends Component {
render() {
return  (
    <div>
        <MenuMobile>
            <button> Oi </button>
            <button> Oi </button>
        </MenuMobile>

        <MenuTabletDynamic>
            <button> button </button>
            <button> button </button>
            <button> button </button>
            <button> button </button>
            <button> button </button>
            <button> button </button>
        </MenuTabletDynamic>
            
    </div>
    );
}
}
export default App;
import React, { Component } from 'react';
import MenuMobile from './components/MenuMobile';
import LoadingWrapper from './components/LoadingWrapper';


class App extends Component {
render() {
    // <LoadingWrapper src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Big_Pinnacle_of_Pilot_Mountain_high_res.jpg"/>
return  (
    <div>
        <MenuMobile active="false">
            <button> Oi </button>
            <button> Oi </button>
            <button> Oi </button>
        </MenuMobile>
        <p> Olá</p>

        <LoadingWrapper>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Big_Pinnacle_of_Pilot_Mountain_high_res.jpg"/>
        </LoadingWrapper>
    </div>
    );
}
}
export default App;
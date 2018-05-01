import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import MenuMobile from "./components/MenuMobile";
import MenuTablet from "./components/MenuTablet";
import PellEditor from "./components/PellEditor";
import MaterialInputLogin from "./components/MaterialInputLogin";
import CardComponent from "./components/Card";

import "./index.css";

class App extends Component {
  render() {
    const pushElements = {
      margin: 20 + "px"
    };
    
    const defaultComponent = ()=> (
      <h1> Escolha o component no menu </h1>
    );

    return (
      <BrowserRouter>
        <div className="example-playground">
          <MenuMobile active={false}>
            <Link to="/MaterialInputs"> MaterialInputs </Link>
            <Link to="/CardComponent"> CardComponent </Link>
            <Link to="/MenuTablet"> MenuTablet </Link>
            <Link to="/PellEditor"> PellEditor </Link>
          </MenuMobile>

          <span style={pushElements} />

          <div className="centered">
            <Route exact path="/" component={defaultComponent} />
            <Route path="/MaterialInputs" component={MaterialInputs} />
            <Route path="/CardComponent" component={CardComponentExample} />
            <Route path="/MenuTablet" component={MenuTabletExample} />
            <Route path="/PellEditor" component={PellEditorExample} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

const MaterialInputs = () => (
  <div className="card">
    <MaterialInputLogin
      autoComplete={"disabled"}
      name={"name"}
      label={"Nome"}
    />

    <MaterialInputLogin
      autoComplete={"disabled"}
      name={"sobrenome"}
      label={"Sobrenome"}
      helper={"Apenas letras"}
    />

    <MaterialInputLogin
      autoComplete={"disabled"}
      name={"error"}
      label={"Input com error"}
      error={"Msg via props"}
    />

    <MaterialInputLogin
      autoComplete={"disabled"}
      name={"numero"}
      label={"Numero"}
      type={"number"}
      icon={"face"}
    />

    <MaterialInputLogin
      autoComplete={"disabled"}
      name={"Disabled"}
      label={"Disabled"}
      type={"text"}
      disabled
    />
  </div>
);

const CardComponentExample = () => (
  <CardComponent
    image={"margoh.jpg"}
    title={"Margarida"}
    subtitle={"margoh"}
    text={
      "Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum,"
    }
  />
);

const MenuTabletExample = () => (
  <MenuTablet active={false}>
    <button> X </button>
    <button> C </button>
    <button> A </button>
  </MenuTablet>
);

const PellEditorExample = ()=> (
  <PellEditor />
)
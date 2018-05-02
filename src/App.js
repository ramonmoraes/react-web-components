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
            <Link to="/MaterialInputs"> Material Inputs </Link>
            <Link to="/CardComponent"> Card Component </Link>
            {/* <Link to="/MenuTablet"> Menu Tablet </Link> */}
            <Link to="/PellEditor"> Pell Editor </Link>
          </MenuMobile>

          <span style={pushElements} />

          <div className="centered">
            <Route exact path="/" component={defaultComponent} />
            <Route path="/MaterialInputs" component={MaterialInputs} />
            <Route path="/CardComponent" component={CardComponentExample} />
            <Route path="/MenuTablet" component={MenuTabletExample} />
            <Route path="/PellEditor" component={PellEditorExample} />
          </div>
          <div>
            <p> o contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32. </p>
            <p>O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados. Seções 1.10.32 e 1.10.33 de "de Finibus Bonorum et Malorum" de Cicero também foram reproduzidas abaixo em sua forma exata original, acompanhada das versões para o inglês da tradução feita por H. Rackham em 1914. </p>
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
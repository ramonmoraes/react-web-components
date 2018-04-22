import React, { Component } from "react";
import MenuMobile from "./components/MenuMobile";
import MenuTablet from "./components/MenuTablet";
import LoadingWrapper from "./components/LoadingWrapper";
import MaterialInputLogin from "./components/MaterialInputLogin";
import "./index.css";

class App extends Component {
  render() {
    const padding10 = {
      padding: 10 + "px"
    };

    return (
      <div className="example-playground">
        <MenuMobile active={false}>
          <button> Oi </button>
        </MenuMobile>

        {/* <MenuTablet active={false}>
          <button> X </button>
          <button> C </button>
          <button> A </button>
        </MenuTablet> */}

        <p style={padding10}> Olá</p>
        <p style={padding10}>
          De onde ele vem? Ao contrário do que se acredita, Lorem Ipsum não é
          simplesmente um texto randômico. Com mais de 2000 anos, suas raízes
          podem ser encontradas em uma obra de literatura latina clássica datada
          de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney
          College na Virginia, pesquisou uma das mais obscuras palavras em
          latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e,
          procurando por entre citações da palavra na literatura clássica,
          descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32
          e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do
          Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria
          da ética muito popular na época da Renascença. A primeira linha de
          Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção
          1.10.32. O trecho padrão original de Lorem Ipsum, usado desde o século
          XVI, está reproduzido abaixo para os interessados. Seções 1.10.32 e
          1.10.33 de "de Finibus Bonorum et Malorum" de Cicero também foram
          reproduzidas abaixo em sua forma exata original, acompanhada das
          versões para o inglês da tradução feita por H. Rackham em 1914.{" "}
        </p>
        <div className="card">
          <MaterialInputLogin
            autoComplete={"disabled"}
            name={"name"}
            placeholder={"Nome"}
          />
          <MaterialInputLogin
            autoComplete={"disabled"}
            name={"juricema"}
            placeholder={"Sobrenome"}
          />
          <MaterialInputLogin
            autoComplete={"disabled"}
            name={"error"}
            placeholder={"Input com error"}
            error={"Msg via props"}
          />

          <MaterialInputLogin
            autoComplete={"disabled"}
            name={"numero"}
            placeholder={"Numero"}
            type={"number"}
            icon={"face"}
          />

          <MaterialInputLogin
            autoComplete={"disabled"}
            name={"Disabled"}
            placeholder={"Disabled"}
            type={"text"}
            disabled
          />

        </div>
      </div>
    );
  }
}
export default App;

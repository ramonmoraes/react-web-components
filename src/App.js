import React, { Component } from "react";
import MenuMobile from "./components/MenuMobile";
import MenuTabletDynamic from "./components/MenuTabletDynamic";
import LoadingWrapper from "./components/LoadingWrapper";

class App extends Component {
  render() {
    return (
      <div>
        <MenuMobile active="false">
          <button> Oi </button>
          <button> Oi </button>
        </MenuMobile>

        <p> Olá</p>
        <p>
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
        
        <ul className='listOfLi'>
            <li> Li-item </li>
            <div> div </div>
            <img/>
            <a href='#'> a </a>
        </ul>
            
        <LoadingWrapper>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Big_Pinnacle_of_Pilot_Mountain_high_res.jpg" />
        </LoadingWrapper>
      </div>
    );
  }
}
export default App;

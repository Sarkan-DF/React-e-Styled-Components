import "./App.css";
import CardsItensStyled from "./components/CardsItensStyled";
import CardsStyled from "./components/CardsStyled";
import HeadMarStyled from "./components/HeadMarStyled";
import MediaItemStyled from "./components/MediaTextStyled";
import MediaStyled from "./components/MedianStyled";
import ParagraphApp from "./components/ParagraphApp";
import TitleApp from "./components/TitleApp";
// import TitleH3App from "./components/TitleH3App";
import GlobalStyled from "./config/GlobalStyled";
import MediaimageStyled from "./components/MediaimageStyled";
import WrapperStyled from "./components/WrapperStyled";
import zebra from "./img/zebra.jpg";
import flores from "./img/flowers.jpg";
import ButtonStyled from "./components/ButtonStyled";
import { useState } from "react";

function App() {
  const [darkMod, setDarkMod] = useState<boolean>(false);
  console.log(darkMod);
  function modoEscuro() {
    setDarkMod(!darkMod);
    console.log(darkMod);
  }

  return (
    <>
      <GlobalStyled />
      <HeadMarStyled>
        <TitleApp text="My First Page React!"></TitleApp>
      </HeadMarStyled>

      <CardsStyled>
        <CardsItensStyled backgroundColor="#f0f0e0">
          Igor Matos
        </CardsItensStyled>
        <CardsItensStyled>Igor Matos</CardsItensStyled>
        <CardsItensStyled backgroundColor="#f0f0e0">
          Igor Matos
        </CardsItensStyled>
      </CardsStyled>

      <ButtonStyled onClick={modoEscuro}>Modo Escuro</ButtonStyled>

      <WrapperStyled
        backgroundcolor={darkMod ? "black" : "white"}
        color={darkMod ? "white" : "black"}
      >
        <MediaStyled>
          <MediaItemStyled>
            {/* <TitleH3App text="Lorens"/> */}
            <ParagraphApp text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </MediaItemStyled>
          <MediaItemStyled>
            <MediaimageStyled backgroundImage={zebra}></MediaimageStyled>
          </MediaItemStyled>
        </MediaStyled>

        <MediaStyled>
          <MediaItemStyled>
            <MediaimageStyled backgroundImage={flores}></MediaimageStyled>
          </MediaItemStyled>
          <MediaItemStyled>
            {/* <TitleH3App text="Lorens" /> */}
            <ParagraphApp text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </MediaItemStyled>
        </MediaStyled>

        <MediaStyled>
          <MediaItemStyled>
            {/* <TitleH3App text="Lorens"/> */}
            <ParagraphApp text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </MediaItemStyled>
          <MediaItemStyled>
            <MediaimageStyled backgroundImage={flores}></MediaimageStyled>
          </MediaItemStyled>
        </MediaStyled>
      </WrapperStyled>

      <HeadMarStyled height="150px">
        <TitleApp text="Contact"></TitleApp>
      </HeadMarStyled>
    </>
  );
}

export default App;

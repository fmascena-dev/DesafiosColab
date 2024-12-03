import { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import Main from './components/Main/Main';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Archivo", sans-serif;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Inicio />
      <Main />
    </>
  );
}

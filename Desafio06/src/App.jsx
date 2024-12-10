import Footer from './components/Footer/Footer';
import Habilidades from './components/Habilidades/Habilidades';
import Header from './components/Header/Header';
import Inicio from './components/Inicio/Inicio';
import Projetos from './components/Projetos/Projetos';
import Servicos from './components/Servicos/Servicos';
import SobreMim from './components/SobreMim/SobreMim';

export default function App() {
  return (
    <>
      <Header />
      <Inicio />
      <SobreMim />
      <Projetos />
      <Servicos />
      <Habilidades />
      <Footer />
    </>
  );
}

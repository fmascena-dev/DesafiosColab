import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import './HeaderStyle.scss';

export default function Header() {
  return (
    <header>
      <h2>
        <FaAngleLeft className='fa-angle-left' />
        FelipeMascena /<FaAngleRight className='fa-angle-left' />
      </h2>
      <nav>
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="#sobre">Sobre mim</a>
        </li>
        <li>
          <a href="#project">Projetos</a>
        </li>
        <li>
          <a href="">Serviços</a>
        </li>
        <li>
          <a href="">Habilidades</a>
        </li>
      </nav>
    </header>
  );
}

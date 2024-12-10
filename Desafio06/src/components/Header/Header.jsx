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
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="#servicos">Serviços</a>
        </li>
        <li>
          <a href="/habilidades">Habilidades</a>
        </li>
      </nav>
    </header>
  );
}

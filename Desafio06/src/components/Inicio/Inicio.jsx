import logo from '../../../public/logo.svg'
import './InicioStyle.scss'

export default function Inicio() {
  return (
    <main id='inicio'>
      <section className='inicio-section'>
        <h3>Olá, eu sou</h3>
        <h1>
          <span>Felipe Mascena</span>
        </h1>
        <p>Desenvolvedor Frontend</p>
        <a href="">Baixar currículo</a>
      </section>
      <section className='inicio-image'>
        <img src={logo} alt="logo" />
      </section>
    </main>
  );
}

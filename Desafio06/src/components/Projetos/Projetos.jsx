import imgBack from '../../assets/fundo.jpg';
import './ProjetosStyle.scss';

export default function Projetos() {
  return (
    <main id="project">
      <h2>Projetos</h2>
      <div className="projetos-section">
        <section className="projetos-unicos">
          <figure>
            <img src={imgBack} alt="imagem de fundo" />
          </figure>
          <div>
            <h3>Nome do projeto</h3>
            <p>Tecnologias usadas no projeto</p>
          </div>
          <div className="btn-project">
            <a className="access">Acessar projeto</a>
            <a className="repository">Acessar repositório</a>
          </div>
        </section>
        <section className="projetos-unicos">
          <figure>
            <img src={imgBack} alt="imagem de fundo" />
          </figure>
          <div>
            <h3>Nome do projeto</h3>
            <p>Tecnologias usadas no projeto</p>
          </div>
          <div className="btn-project">
            <a className="access">Acessar projeto</a>
            <a className="repository">Acessar repositório</a>
          </div>
        </section>
        <section className="projetos-unicos">
          <figure>
            <img src={imgBack} alt="imagem de fundo" />
          </figure>
          <div>
            <h3>Nome do projeto</h3>
            <p>Tecnologias usadas no projeto</p>
          </div>
          <div className="btn-project">
            <a className="access">Acessar projeto</a>
            <a className="repository">Acessar repositório</a>
          </div>
        </section>
        <section className="projetos-unicos">
          <figure>
            <img src={imgBack} alt="imagem de fundo" />
          </figure>
            <div>
              <h3>Nome do projeto</h3>
              <p>Tecnologias usadas no projeto</p>
            </div>
            <div className="btn-project">
              <a className="access">Acessar projeto</a>
              <a className="repository">Acessar repositório</a>
            </div>
        </section>
      </div>
    </main>
  );
}

import './Servicos.scss';
import code from '../../assets/Servicos/code.svg';
import figma from '../../assets/Servicos/figma.svg';
import smartphone from '../../assets/Servicos/smartphone.svg';

const servicos = [
  {
    id: 'codigo',
    img: code,
    title: 'Criação de sites',
  },
  {
    id: 'figma',
    img: figma,
    title: 'UI/UX Design',
  },
  {
    id: 'smartphone',
    img: smartphone,
    title: 'Sites responsivos',
  }
];

export default function Servicos() {
  return (
    <>
      <section id="services">
        <div>
          <h2>Serviços</h2>
        </div>
        <div className="services-section">
          {servicos.map((servico) => (
            <figure key={servico.id}>
              <img src={servico.img} alt={servico.title} />
              <h4>{servico.title}</h4>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

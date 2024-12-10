import './HabilidadeStyle.scss';
import html from '../../assets/Tech/html.svg';
import css from '../../assets/Tech/css.svg';
import javascript from '../../assets/Tech/js.svg';
import tailwind from '../../assets/Tech/tailwind.svg';
import react from '../../assets/Tech/react.svg';
import next from '../../assets/Tech/next.svg';

export default function Habilidades() {
  return (
    <>
      <section className="habilidade" id="#habilidades">
        <h2>Habilidades</h2>
        <div className="tecnologias">
          <figure>
            <img src={html} alt="" />
          </figure>
          <figure>
            <img src={css} alt="" />
          </figure>
          <figure>
            <img src={javascript} alt="" />
          </figure>
          <figure>
            <img src={tailwind} alt="" />
          </figure>
          <figure>
            <img src={react} alt="" />
          </figure>
          <figure>
            <img src={next} alt="" className='next'/>
          </figure>
        </div>
      </section>
    </>
  );
}

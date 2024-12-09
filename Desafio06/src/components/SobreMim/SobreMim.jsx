import emoji from '../../assets/Redes/emoji.svg';
import email from '../../assets/Redes/email.svg';
import insta from '../../assets/Redes/insta.svg';
import phone from '../../assets/Redes/phone.svg';
import './SobreMimStyle.scss';

export default function SobreMim() {
  return (
    <>
      <section id="sobre">
        <h2>Sobre mim</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum diam non nunc ultricies, vitae bibendum arcu scelerisque.
          Quisque faucibus, purus non consectetur placerat, metus enim gravida
          velit, ut varius ligula nunc a nunc. Donec vulputate, nunc id bibendum
          sagittis, lectus ligula semper velit, vel dictum neque dolor sit amet
          ipsum.
        </p>
      </section>
      <section className='redes'>
        <figure>
          <img src={emoji} alt="emoji" />
          <h5>Nome</h5>
          <p>Felipe Mascena</p>
        </figure>
        <figure>
          <img src={email} alt="" />
          <h5>E-mail</h5>
          <p>exemple@email.com</p>
        </figure>
        <figure>
          <img src={insta} alt="" />
          <h5>Intagram</h5>
          <p>@exemple</p>
        </figure>
        <figure>
          <img src={phone} alt="" />
          <h5>Telefone</h5>
          <p>(21) 99999-9999</p>
        </figure>
      </section>
    </>
  );
}

import styled from 'styled-components';
import logo from '../../assets/image-michael-jordan.png';
import logoShoes from '../../assets/logo.svg';

export const Section = styled.section`
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 50vh;
  padding: 5rem 10rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 40%;
    color: #fff;

    img {
      width: 30%;
    }
  }
`;

export default function Inicio() {
  return (
    <Section>
      <div>
        <img src={logoShoes} alt="Logo Jordan Shoes" />
        <h1>A melhor loja de Jordan</h1>
        <p>
          O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o
          jogador Michael Jordan.
        </p>
      </div>
    </Section>
  );
}

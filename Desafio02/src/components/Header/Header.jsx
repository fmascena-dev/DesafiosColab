import styled from 'styled-components';

export const Cabecalho = styled.header`
  background-color: #ffffff;
  color: #000;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.2rem;

  p {
    width: 20%;
  }
`;

export default function Header() {
  return (
    <Cabecalho>
      <p>Frete grátis para todo o Brasil</p>
    </Cabecalho>
  );
}

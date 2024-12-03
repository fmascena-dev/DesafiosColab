import styled from 'styled-components';

export const MainPrincipal = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 5rem 5rem;
`;

export const SectionText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;

export const Text = styled.p`
  width: 50%;
  font-size: 1.3rem;
  font-weight: 400;
`;

export const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 4rem;
  background-color: #f5f5f5;

  @media (min-width: 550px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas menores */
  }

  @media (min-width: 250px) and (max-width: 549px) {
    grid-template-columns: 1fr; /* 1 coluna em telas pequenas */
  }
`;

export const ItemGrid = styled.div`
  background-color: #ffffff; // Fundo branco dos cards
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.4); // Sombra para destacar os cards
  overflow: hidden;
  display: flex;
  flex-direction: column; // Conteúdo alinhado verticalmente
  justify-content: space-between;

  figure {
    background: rgba(233, 247, 255, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35vh;
    padding: 2rem;
  }

  img {
    width: 85%;
    height: auto;
    object-fit: cover;
    margin-bottom: 15px;
    background-size: cover;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
    margin: 10px 0 10px 5px;
  }

  section {
    padding: 0.5rem 0;
  }
`;

export const Category = styled.p`
  color: rgba(124, 162, 244, 1);
  font-size: 14px;
  margin: 15px 0 5px 5px;
`;

export const Preco = styled.p`
  font-size: 1.1rem;
  color: #000;
  font-weight: bold;
  margin: 15px 0 3px 5px;
`;

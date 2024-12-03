import {
  MainPrincipal,
  SectionText,
  Text,
  SectionGrid,
  ItemGrid,
  Category,
  Preco,
} from './MainStyles';
import tenis1 from '../../assets/tenis1.svg';
import tenis2 from '../../assets/tenis2.svg';
import tenis3 from '../../assets/tenis3.svg';
import tenis4 from '../../assets/tenis4.svg';
import tenis5 from '../../assets/tenis5.svg';
import tenis6 from '../../assets/tenis6.svg';

const produtos = [
  {
    id: 1,
    nome: 'Air Jordan 1 Mid Dutch Green',
    categoria: 'Tênis Air Jordan',
    preco: 'R$ 1.199,99',
    imagem: tenis1,
  },
  {
    id: 2,
    nome: 'Air Jordan 1 Mid Dutch Green',
    categoria: 'Tênis Air Jordan',
    preco: 'R$ 1.049,00',
    imagem: tenis2,
  },
  {
    id: 3,
    nome: 'Air Jordan 1 Mid Dutch Green',
    categoria: 'Tênis Air Jordan',
    preco: 'R$ 1.350,00',
    imagem: tenis3,
  },
  {
    id: 4,
    nome: 'Air Jordan 1 Mid GS "Light Smoke Grey"',
    categoria: 'Tênis Air Jordan',
    preco: 'R$ 1.585,00',
    imagem: tenis4,
  },
  {
    id: 5,
    nome: 'Air Jordan 1 Mid SE Bright Citrus',
    categoria: 'Tênis Air Jordan',
    preco: 'R$ 949,99',
    imagem: tenis5,
  },
  {
    id: 6,
    nome: 'Air Jordan 1 Mid Grey Camo',
    categoria: 'Tênis Air Jordan',
    preco: 'R$ 999,99',
    imagem: tenis6,
  },
];

export default function Main() {
  return (
    <MainPrincipal>
      <SectionText>
        <h2>Os melhores em um só lugar!</h2>
        <Text>
          A marca Jordan na JordanShoes é a escolha certa para os amantes de
          sneakers que buscam estilo e conforto.
        </Text>
      </SectionText>
      <SectionGrid>
        {produtos.map((produto) => (
          <ItemGrid key={produto.id}>
            <figure>
              <img src={produto.imagem} alt={produto.nome} />
            </figure>
            <section>
            <h3>{produto.nome}</h3>
              <Category>{produto.categoria}</Category>
              <Preco>{produto.preco}</Preco>
            </section>
          </ItemGrid>
        ))}
      </SectionGrid>
    </MainPrincipal>
  );
}

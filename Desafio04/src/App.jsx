import imagem from '../public/svg.svg';
import logoGoogle from './assets/icon-google.svg';
import { createGlobalStyle } from 'styled-components';
import { Button, CheckboxContainer, Container, DivCheck, DivTitles, Form, FormContainer, ImageContainer, Input, Label, Link, SecondaryButton, Section, SignUpLink, Subtitle, Title } from './Style/AppStyle';

const GlobalStyle = createGlobalStyle`
* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

export default function App() {
  return (
    <Container>
      {' '}
      <GlobalStyle />{' '}
      <Section>
        {' '}
        <ImageContainer>
          {' '}
          <img src={imagem} alt="imagem principal" />{' '}
        </ImageContainer>{' '}
        <FormContainer>
          {' '}
          <DivTitles>

          <Subtitle>Bem-vindo de volta</Subtitle>{' '}
          <Title>Faça login na sua conta</Title>{' '}
          </DivTitles>
          <Form>
            {' '}
            <Label htmlFor="email">E-mail</Label>{' '}
            <Input
              type="email"
              id="email"
              placeholder="exemplo@email.com"
              required
            />{' '}
            <Label htmlFor="senha">Senha</Label>{' '}
            <Input
              type="password"
              id="senha"
              placeholder="*********"
              required
            />{' '}
            <DivCheck>

            <CheckboxContainer>
              {' '}
              <input type="radio" id="lembrar" name="lembrar" />{' '}
              <Label htmlFor="lembrar">Lembre de mim</Label>{' '}
            </CheckboxContainer>{' '}
            <Link href="#">Esqueceu sua senha?</Link>{' '}
            </DivCheck>
            <Button type="submit">Entrar na conta</Button>{' '}
            <SecondaryButton type="button">
              <img src={logoGoogle} alt="" />
              Ou faça login com o Google
            </SecondaryButton>{' '}
          </Form>{' '}
          <SignUpLink>
            Não tem uma conta? <Link href="#">Cadastre-se</Link>
          </SignUpLink>{' '}
        </FormContainer>{' '}
      </Section>{' '}
    </Container>
  );
}

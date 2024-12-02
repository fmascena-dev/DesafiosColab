# Projeto DesafioColab - Aplicação Responsiva com Cronômetro e Funcionalidades de Doação

*Este projeto foi desenvolvido utilizando Vue 3 com a Composition API e inclui funcionalidades como um cronômetro dinâmico, uma seção de doação, e uma página de início com um layout responsivo que se adapta a diferentes tamanhos de tela (celular, tablet, monitor).*

#### Tecnologias e Ferramentas Utilizadas:

- Vue 3 (com Composition API)
- SCSS (para estilização)
- Vite (para desenvolvimento e build do projeto)
- npm (gerenciador de pacotes)
- JavaScript (para lógica de cronômetro e reatividade)
- HTML5 (estruturação das páginas)

#### Estrutura do Projeto:

- **O projeto está dividido em 4 componentes principais:**

    - **Inicio.vue:** *Página inicial com um cronômetro e um botão de ação;*
    - **Cronometro.vue:** *Componente dedicado ao cronômetro que exibe o tempo restante;*
    - **Doacao.vue:** *Componente com um formulário e botão de doação;*
    - **Footer.vue:** *Rodapé com ícones de redes sociais.*

#### Principais Funcionalidades:

**1. Cronômetro Responsivo:**

- *Um cronômetro que conta o tempo restante até um evento, com uma contagem regressiva no formato 10d 24h 01m 52s. A lógica do cronômetro foi implementada utilizando o hook* **onMounted** *para iniciar o contador assim que o componente é montado.*

**2. Componentes Responsivos:**

- **As páginas foram feitas para serem totalmente responsivas, utilizando media queries no SCSS, que ajustam o layout para diferentes tamanhos de tela:**

    - *Celular;*
    - *Tablet;*
    - *Monitores até 1300px;*
    - *Monitores com mais de 1301px;*

**3. Doação:**

- *Uma seção onde os usuários podem clicar em um botão para fazer uma doação. O botão aumenta de tamanho ao passar o mouse sobre ele, utilizando a propriedade transform no SCSS.*

**4. Efeitos de Hover no Botão:**

- *Ao passar o mouse sobre os botões, ocorre um efeito de escala e alteração de cor, melhorando a interação do usuário.*

#### Instalação e Execução:

##### Requisitos:

- *Node.js (versão 16 ou superior)*
- *npm (gerenciador de pacotes)*

**Passos para rodar o projeto localmente:**

- Clone este repositório:

```
git clone https://github.com/fmascena-dev/DesafiosColab.git
```

- Navegue para a pasta do projeto:

```
cd Desafio10
```

- Instale as dependências do projeto:

```
npm install
```

- Inicie o servidor de desenvolvimento:

```
npm run dev --host
```

- Acesse a aplicação no seu navegador:

```
http://localhost:3000
```
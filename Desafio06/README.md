# Desafio06 - Mini Portfólio

*Este é um projeto de mini portfólio desenvolvido com* **React**, **SCSS**, **React Icons** *e* **React Router DOM**. *O portfólio apresenta informações sobre o desenvolvedor, incluindo habilidades, projetos, serviços e um resumo pessoal. O design é responsivo e moderno, utilizando boas práticas de componentização e estilização.*

### 🛠️ Tecnologias Utilizadas

- **React:** *Biblioteca JavaScript para a criação de interfaces de usuário;*
- **React Router DOM:** *Navegação de páginas no estilo SPA (Single Page Application);*
- **React Icons:** *Conjunto de ícones para personalizar o design;*
- **SCSS:** *Pré-processador CSS para estilos modulares e reutilizáveis.*

### 📂 Estrutura do Projeto

*O projeto está organizado em componentes reutilizáveis, cada um com sua respectiva folha de estilo em SCSS. A estrutura é a seguinte:*

```
src/
├── components/
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── FooterStyle.scss
│   ├── Habilidades/
│   │   ├── Habilidades.jsx
│   │   └── HabilidadeStyle.scss
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── HeaderStyle.scss
│   ├── Inicio/
│   │   ├── Inicio.jsx
│   │   └── InicioStyle.scss
│   ├── Projetos/
│   │   ├── Projetos.jsx
│   │   └── ProjetosStyle.scss
│   ├── Servicos/
│   │   ├── Servicos.jsx
│   │   └── Servicos.scss
│   └── SobreMim/
│       ├── SobreMim.jsx
│       └── SobreMimStyle.scss
├── App.jsx
├── GlobalReset.scss
└── index.js
```

### ✨ Funcionalidades

- **Header:**
    - *Navegação entre as seções do site;*
    - *Ícones estilizados ( ex.:* **FaAngleLeft**, **FaAngleRight** *).*
- **Seção de Início:**
    - *Introdução do desenvolvedor com nome e descrição;*
    - *Botão para download do currículo.*
- **Sobre Mim:**
    - *Apresentação pessoal;*
    - *Informações de contato (ex.: nome, e-mail, Instagram, telefone).*
- **Projetos:**
    - *Lista de projetos com imagem, descrição e links para acessar o repositório e o projeto.*
- **Serviços:**
    - *Descrição dos serviços oferecidos (ex.: Criação de sites, UI/UX Design, Sites responsivos).*
- **Habilidades:**
    - *Ícones que representam tecnologias dominadas.*
- **Footer:**
    - *Links para redes sociais (GitHub e LinkedIn).*

### 🚀 Como Executar o Projeto

- **Pré-requisitos:**
    - *Node.js instalado (versão 16 ou superior).*
    - *Gerenciador de pacotes npm ou yarn.*

##### Passo a Passo

- *Clone o repositório:*
```
git clone https://github.com/fmascena-dev/Desafio06.git
```

- *Instale as dependências:*

```
npm install
# ou
yarn install
```

- *Inicie o servidor de desenvolvimento:*

```
npm run dev
# ou
yarn start
```

- *Abra o navegador e acesse:*

```
http://localhost:3000
```

### 🌟 Melhorias Futuras
- *Adicionar animações nas transições de seções;*
- *Implementar um tema dark/light switch;*
- *Adicionar mais projetos e serviços.*
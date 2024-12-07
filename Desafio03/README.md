## Desafio 03

- **Link do desafio:** https://www.figma.com/design/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---CodeLab?node-id=3725-2

# Projeto de Exemplo em Vue 3 com SCSS

*Este projeto é um exemplo de aplicação feita com Vue 3 que utiliza SCSS para estilização. Ele apresenta uma página inicial com três seções principais: introdução, lista de artigos e um formulário de contato.*

## Estrutura do Projeto

- **Arquivos Principais:**

    - **App.vue:** *Componente raiz que importa e renderiza os componentes principais da aplicação;*
    - **Inicio.vue:** *Seção inicial da página com um texto de boas-vindas e um link de navegação;*
    - **Artigos.vue:** *Lista de artigos com título, descrição e imagens renderizadas dinamicamente a partir de um array de objetos;*
    - **Formulario.vue:** *Formulário de contato com campos de entrada para nome, email e mensagem.*

### Componentes

- **Inicio.vue**
    - **Seção de introdução com:**
        - **Texto de destaque:** *"Encontre os melhores artigos de programação em um só lugar".*
        - **Botão de navegação:** *Estilizado com hover e transições suaves.*
        - **Imagem decorativa:** *Um SVG localizado em /assets.*

- **Artigos.vue**
    - **Lista de artigos que exibe:**
        - **Título:** *Nome do artigo.*
        - **Descrição:** *Breve descrição do conteúdo.*
        - **Imagem:** *Uma imagem correspondente ao artigo.*
        - **Estilização:** *Layout em grade com 3 colunas, estilização responsiva e efeito de hover nas caixas.*

- **Formulario.vue**
    - **Formulário de contato com:**
        - *Campos para nome, email e mensagem.*
        - *Botão para enviar.*
        - **Estilização:** *SCSS com espaçamento consistente e sombras nas caixas de entrada.*
    - **Funcionalidades**
        - **Layout em Grid:** *O componente Artigos.vue organiza os artigos em uma grade responsiva.*
    - **Animações e Interatividade:**
        - *Efeito de hover nas caixas de artigos para ampliar.*
        - *Transições suaves nos botões.*
        - **Formulário de Contato:** *Inclui validações obrigatórias para todos os campos.*

- **Estilo**
    - *Os estilos foram escritos em SCSS e estão escopados para cada componente. Alguns destaques incluem:*
        - *Transições suaves para interatividade.*
        - *Sombras decorativas para botões e caixas.*
        - *Layouts flexíveis e baseados em grid.*

### Como Executar:

- **Pré-requisitos:**
    - *Node.js instalado na máquina.*
    - *Gerenciador de pacotes como npm ou yarn.*

#### Passos:

- **Instale as dependências:**
```
npm install
```
- **Inicie o servidor de desenvolvimento:**
```
npm run dev
```

- **Acesse a aplicação no navegador em** http://localhost:5173.

#### Melhorias Futuras:

- *Implementar rotas utilizando vue-router para navegar entre seções.*
- *Tornar o formulário funcional com integração a um backend.*
- *Adicionar responsividade completa para dispositivos móveis.*

##### Se precisar de mais ajustes ou melhorias, sinta-se à vontade para contribuir! 😊
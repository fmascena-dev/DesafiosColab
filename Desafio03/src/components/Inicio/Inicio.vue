<script setup></script>

<template>
  <section>
    <div class="texts">
      <h1>
        Encontre os <span>melhores artigos</span> de programação em um só lugar
      </h1>
      <div class="paragrafo">
        <p>Explore o topo da programação em um só lugar!</p>
        <p>Seu destino único para dicas e tendências atuais.</p>
      </div>
      <a href="">BUSCAR ARTIGOS</a>
    </div>
    <figure>
      <img src="../../assets/imagem1.svg" alt="Logo" />
    </figure>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 1rem;
}

.texts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  text-shadow: 1px 1px 12px rgba(0, 0, 0, 0.2);

  h1 {
    margin-bottom: 1.5rem;
    font-size: 2.29rem;

    span {
      color: #846aff;
    }
  }

  .paragrafo {
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
  }

  a {
    background-color: rgba(132, 106, 255, 1);
    padding: 0.5rem 2rem;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: 0.3s ease;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: none;
    box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.5);

    &:hover {
      background-color: #ffffff;
      color: #2b00ff;
      box-shadow: 1px 1px 10px 10px rgba(132, 106, 255, 1);
    }
  }
}

figure {
  width: 20%;
  img {
    width: 100%;
  }
}
</style>

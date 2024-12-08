<script setup></script>

<template>
  <main>
    <section>
      <div class="texts">
        <h1>
          Encontre os <span>melhores artigos</span> de programação em um só
          lugar
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
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 250px) and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 1rem 2rem;
  }
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
  }
}

.texts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-shadow: 1px 1px 12px rgba(0, 0, 0, 0.2);

  h1 {
    margin-bottom: 1.5rem;
    font-size: 2.29rem;
    width: 40%;

    span {
      color: #846aff;
    }

    @media (min-width: 250px) and (max-width: 768px) {
      width: 100%;
      font-size: 1.8rem;
      text-align: left;
    }
  }

  .paragrafo {
    margin-bottom: 1.5rem;
    font-size: 1.4rem;

    @media (max-width: 768px) {
      text-align: left;
      font-size: 1.4rem;
      width: 100%;
    }
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

    @media (max-width: 768px) {
      text-align: center;
      width: 50%;
      font-size: 1rem;
      padding: 0.5rem;
    }
  }
}

figure {
  width: 30%;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
}
</style>

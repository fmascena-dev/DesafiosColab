<script setup></script>

<template>
  <main>
    <section class="lado-direito">
      <h4>HAYAO MIYAZAKI</h4>
      <h1>A VIAGEM DE CHIHIRO</h1>
      <p>
        Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a
        desobedecem são transformados em animais.
      </p>
      <div class="buttons">
        <button class="btn-assistir">
          <img
            src="../../assets/Button/play.svg"
            alt="ícone de play"
            class="play"
          />ASSISTIR AGORA
        </button>
        <button class="btn-assista">ASSISTA O TRAILER</button>
      </div>
    </section>
    <section>
      <figure class="imagem-principal">
        <img
          src="../../assets/Image/ilustração-main.svg"
          alt="imagem de máscaras"
        />
      </figure>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  color: #fff;
  margin-bottom: 3rem;
  padding: 0 8rem;
}

.lado-direito {
  width: 40%;
  display: flex;
  flex-direction: column;
  margin: 3rem 7rem;
}

h1 {
  width: 90%;
  font-size: 3.2rem;
  margin: 1rem 0;
}

p {
  width: 100%;
  font-size: 1.2rem;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-assistir {
  background-color: #f1a5b1;
  border: none;
  padding: 0.5rem 1rem;
  color: #000;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: bold;

  &:hover {
    background-color: transparent;
    box-shadow: 1px 1px 8px 5px rgba(241, 165, 177, 1);
    color: #fff;

    .play {
      filter: invert(66%) sepia(34%) saturate(466%) hue-rotate(300deg)
        brightness(100%) contrast(100%);
    }
  }
}

.btn-assista {
  background-color: transparent;
  border: 1px solid rgba(241, 165, 177, 1);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: rgba(241, 165, 177, 1);
    color: #000;
  }
}

.imagem-principal {
  width: 80%;

  img {
    width: 70%;
  }
}
</style>

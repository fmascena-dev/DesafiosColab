<script setup>
import logo from '../assets/logo2.svg';
</script>

<template>
  <header>
    <section class="section-inicio">
      <div class="inicio">
        <img :src="logo" alt="logo com feliz natal" />
        <h1>Uma <span>plataforma de doação</span> para espalhar alegria</h1>
        <p>
          Nessas festas de fim de ano mande um presente para a pessoa amada e
          compartilhe a alegria do Natal.
        </p>
        <button class="btn">FAZER UMA DOAÇÃO</button>
      </div>
      <div class="loja">
        <img src="../assets/loja.png" alt="imagem de loja" />
      </div>
    </section>
  </header>
</template>
<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc8c5;
  padding: 3rem 5rem;
}

.section-inicio {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
}

.inicio {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  gap: 1.5rem;

  h1 {
    font-size: 1.8rem;
  }

  img {
    width: 25%;
  }

  span {
    color: rgb(205, 60, 50);
  }

  p {
    font-size: 1.4rem;
  }

  .btn {
    background-color: rgb(205, 60, 50);
    color: white;
    border: none;
    width: 40%;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.1);
      font-weight: bold;
      background-color: rgb(255, 0, 0);
      text-decoration: underline;
      box-shadow: 1px 1px 10px 1px #000;
    }
  }
}

.loja {
  display: flex;
  justify-content: center;

  img {
    width: 90%;
  }
}
/* Responsividade para celular */
@media (min-width: 250px) and (max-width: 450px) {
  .section-inicio {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

  .inicio {
    width: 100%;
    align-items: center;

    h1 {
      font-size: 1.2rem;
      text-align: center;
    }

    img {
      width: 50%;
    }

    p {
      font-size: 1rem;
      text-align: center;
    }

    .btn {
      width: 100%;
    }
  }

  .loja img {
    width: 100%;
  }
}

@media (min-width: 451px) and (max-width: 959px) {
  .section-inicio {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

  .inicio {
    width: 100%;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      text-align: center;
    }

    img {
      width: 40%;
    }

    p {
      font-size: 1rem;
      text-align: center;
      font-weight: 500;
    }

    .btn {
      width: 70%;
    }
  }
}
</style>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// Configurando a data limite
const targetDate = new Date('2024-12-25T00:00:00');

//Refs para os dados
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

// Função para atualizar o cronômetro
const updateTimer = () => {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    days.value = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    minutes.value = Math.floor((timeLeft / (1000 * 60)) % 60);
    seconds.value = Math.floor((timeLeft / 1000) % 60);
  } else {
    days.value = hours.value = minutes.value = seconds.value = 0;
    clearInterval(timer);
  }
};

// Atualizando os segundos do cronômetro
let timer;
onMounted(() => {
  updateTimer();
  timer = setInterval(updateTimer, 1000);
});

// limpando o intervalo
onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <main>
    <section class="section-main">
      <div class="primeiro">
        <h2>Tempo limitado</h2>
        <p>
          Nessas festas de fim de ano mande um presente para a pessoa amada e
          compartilhe a alegria do Natal
        </p>
        <p class="timer">
          <span>{{ days }}d - </span>
          <span>{{ hours }}h - </span>
          <span>{{ minutes }}m - </span>
          <span>{{ seconds }}s</span>
        </p>
        <img src="../assets/presentes.png" alt="imagem de presentes de Natal" />
      </div>
    </section>
  </main>
</template>
<style scoped lang="scss">
main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4rem;
  width: 80%;

  .primeiro {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
    gap: 2rem;
    width: 100%;

    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.4rem;
      width: 45%;
      font-weight: 500;
    }

    .timer {
      width: 100%;
      font-weight: bold;
      font-size: 4rem;

      span {
        color: rgba(205, 60, 50, 1);
      }
    }

    img {
      max-width: 100%;
    }
  }
}

@media (min-width: 250px) and (max-width: 450px) {
  main {
    padding: 0;
  }

  .section-main {
    width: 100%;
  }

  .primeiro {
    width: 100%;
    height: auto;
    gap: 1rem;

    h2 {
      font-size: 1.8rem;
    }

    p {
      width: 100%;
    }

    span {
      font-size: 1.8rem;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

@media (min-width: 451px) and (max-width: 959px) {
  .section-main {
    width: 100%;
  }

  .primeiro {
    width: 100%;
    height: auto;
    gap: 1rem;

    h2 {
      font-size: 1.8rem;
    }

    p {
      width: 100%;
    }

    span {
      font-size: 2.8rem;
    }

    img {
      width: 75%;
      height: auto;
    }
  }
}

@media (min-width: 1351px) and (max-width: 1959px){
  .section-main {
    width: 100%;
  }
}
</style>

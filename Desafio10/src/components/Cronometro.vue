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
    <section>
      <div>
        <h2>Tempo limitado</h2>
        <p>
          Nessas festas de fim de ano mande um presente para a pessoa amada e
          compartilhe a alegria do Natal
        </p>
        <p>
            <span>{{ days }}d</span> -
            <span>{{ hours }}</span> -
            <span>{{ minutes }}</span> -
            <span>{{ seconds }}</span>
        </p>
        <img src="../assets/presentes.png" alt="imagem de presentes de Natal">
      </div>
      <div>
        <figure>
            <img src="../assets/decoracao.png" alt="Colocando decoração">
        </figure>
        <div>
            <h2>Conectando generosidade ao redor do mundo</h2>
            <p>Celebre a magia do Natal de uma maneira especial! Descubra a plataforma que permite a doação de presentes significativos para aqueles que mais precisam. Faça parte do movimento e compartilhe o verdadeiro espírito da generosidade.</p>
        </div>
      </div>
    </section>
  </main>
</template>
<style lang="scss"></style>

<script setup>
import naoCurtida from './assets/images/s2_border.svg';
import curtida from './assets/images/s2_complete.svg';
import { ref } from 'vue';

// Criando um estado para cada um dos corações
const heartStates = ref([false, false, false]);

// Função para alternar o estado de um coração específico
const toggleHeart = (index) => {
  heartStates.value[index] = !heartStates.value[index];
};

const getDateByIndex = (index) =>
  ['17 de ago, 2024', '12 de jul, 2024', '21 de jun, 2024'][index];
const getTitleByIndex = (index) =>
  [
    'O que é linguagem de programação? Conheça as principais',
    'GitHub agora permite fazer login sem precisar de senha',
    'Por que os hiperlinks são azuis em sua maioria?',
  ][index];
const getDescriptionByIndex = (index) =>
  [
    'Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.',
    'O GitHub anunciou nesta quarta-feira (12) o acesso a partir das passkeys, método de autenticação sem senhas. A novidade está disponível em uma versão beta pública e pode substituir a autenticação em dois fatores.',
    'Quem navega na internet, certamente já percebeu que ela conta com diversos recursos para tornar a nossa vida mais fácil. Entre essas opções podemos mencionar os hiperlinks – uma palavra ou termo clicável que direciona o leitor.',
  ][index];
</script>

<template>
  <header>
    <h1><span>Code</span>Lab em <span>Vue</span></h1>
    <input type="text" placeholder="Pesquisar no blog: " />
  </header>
  <main>
    <!-- Usando v-for para criar cada seção dinamicamente -->
    <section v-for="(heartState, index) in heartStates" :key="index">
      <div class="date">
        <p>{{ getDateByIndex(index) }}</p>
        <img
          :src="heartState ? curtida : naoCurtida"
          class="iconHeart"
          @click="toggleHeart(index)"
          alt="Like com coração"
        />
      </div>
      <div>
        <h3>{{ getTitleByIndex(index) }}</h3>
        <p>{{ getDescriptionByIndex(index) }}</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
header {
  background-color: rgba(23, 23, 26, 0.97);
  color: #e07b67;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  h1 {
    color: #dddddd;
    margin: 1.7rem;
    text-shadow: 0px 2px 15px rgba(255, 255, 255, 0.6);

    span {
      color: #e07b67;
    }
  }

  input {
    background-color: #202024;
    border: none;
    padding: 10px;
    width: 65%;
    margin: 1rem;
    border-radius: 10px;
    color: #fff;
    box-shadow: 1px 1px 10px 1px rgba(255, 255, 255, 0.6);

    &::placeholder {
      color: #fff;
    }
  }
}

main {
  background-color: #17171a;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  gap: 2rem;

  section {
    background-color: #202024;
    display: flex;
    flex-direction: column;
    width: 65%;
    margin-bottom: 2rem;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 1px 1px 10px 1px rgba(255, 255, 255, 0.6);
    transition: all 0.5s ease;

    &:hover {
      border: 1px solid #e07b67;
      transform: scale(1.2);
    }

    .date {
      color: #e07b67;
      display: flex;
      justify-content: space-between;
      margin: 0.5rem 0;
      font-weight: bold;

      p {
        color: #e07b67;
      }

      .iconHeart {
        cursor: pointer;
        transition: 0.5s ease-in-out;

        &:hover {
          transform: scale(1.8);
        }
      }
    }

    div {
      color: #fff;

      h3 {
        padding: 15px 0;
      }

      p {
        color: #b4b4b4;
      }
    }
  }
}
</style>

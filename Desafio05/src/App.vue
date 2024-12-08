<script setup>

import Header from './components/Header/Header.vue';
import Main from './components/Main/Main.vue';

</script>

<template>
  <section class="hero">
    <Header />
    <Main />   

  </section>
  
</template>

<style scoped>
.hero {
  position: absolute;
  background: url('/background.svg') center/cover no-repeat;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}

</style>

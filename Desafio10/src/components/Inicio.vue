<script setup>
import logo from '../assets/logo2.svg';
</script>

<template>
  <section>
    <div>
      <img :src="logo" alt="logo com feliz natal" />
      <h1>Uma <span>plataforma de doação</span> para espalhar alegria</h1>
      <p>
        Nessas festas de fim de ano mande um presente para a pessoa amada e
        compartilhe a alegria do Natal.
      </p>
      <button>Fazer uma doação</button>
    </div>
    <div>
      <img src="../assets/loja.png" alt="imagem de loja" />
    </div>
  </section>
</template>
<style scoped lang="scss">
section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background: linear-gradient(180deg, #f7f9fc 0%, #e5e9f2 100%);
}
</style>

<script setup></script>

<template>
  <footer>
    <figure>
      <img src="../assets/logo2.svg" alt="logo de natal" />
    </figure>
    <div class="redes">
      <figure class="redes-sociais">
        <img src="../assets/logo-twitter.svg" alt="icon twitter" />
        <img src="../assets/logo-whatsapp2.svg" alt="icon whatsapp" />
        <img src="../assets/logo-instagram.svg" alt="icon instagram" />
        <img src="../assets/logo-facebook.svg" alt="icon facebook" />
        <img src="../assets/logo-google.svg" alt="icon google" />
      </figure>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: #ffc8c5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;

  .redes {
    display: flex;
    align-items: center;

    .redes-sociais {
      display: flex;
      gap: 2rem;
    }
  }
}
</style>

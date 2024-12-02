<script setup></script>

<template>
  <footer>
    <figure>
      <img src="../assets/logo2.svg" alt="logo de natal" />
    </figure>
    <div class="redes">
      <figure class="redes-sociais">
        <a href="">
          <img src="../assets/logo-twitter.svg" alt="icon twitter" />
        </a>
        <a href="">
          <img src="../assets/logo-whatsapp2.svg" alt="icon whatsapp" />
        </a>
        <a href="">
          <img src="../assets/logo-instagram.svg" alt="icon instagram" />
        </a>
        <a href="">
          <img src="../assets/logo-facebook.svg" alt="icon facebook" />
        </a>
        <a href="">
          <img src="../assets/logo-google.svg" alt="icon google" />
        </a>
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

      a{
        transition: scale 0.5s ease;

        &:hover {
        transform: scale(1.3);
      }
    }
    }
  }
}

@media (min-width: 250px) and (max-width: 450px){
    footer {
    flex-direction: column;
    text-align: center;
    padding: 1rem 2rem;
    gap: 1rem;

    .redes {
      flex-direction: column;

      .redes-sociais {
        gap: 1rem;
      }
    }
  }
}

@media (min-width: 451px) and (max-width: 959px){
    footer {
    flex-direction: column;
    text-align: center;
    padding: 1rem 2rem;
    gap: 1rem;

    .redes {
      flex-direction: column;

      .redes-sociais {
        gap: 1rem;
      }
    }
  }
}
</style>

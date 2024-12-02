<script setup>
</script>

<template>
    <section>
        <div class="segundo">
        <figure>
          <img
            src="../assets/decoracao.png"
            alt="Colocando decoração"
            class="presente"
          />
        </figure>
        <div class="conect">
          <h2>Conectando generosidade ao redor do mundo</h2>
          <p>
            Celebre a magia do Natal de uma maneira especial! Descubra a
            plataforma que permite a doação de presentes significativos para
            aqueles que mais precisam. Faça parte do movimento e compartilhe o
            verdadeiro espírito da generosidade.
          </p>
          <button class="btn">FAZER UMA DOAÇÃO</button>
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
.segundo {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  margin-bottom: 3rem;

  .conect {
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 1rem;
    text-align: left;
  }

  .btn {
    background-color: rgb(205, 60, 50);
    color: white;
    border: none;
    width: 55%;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgb(255, 0, 0);
      text-decoration: underline;
      box-shadow: 1px 1px 10px 1px #000;
    }
  }
}
</style>
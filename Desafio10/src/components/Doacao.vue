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
    gap: 1.5rem;
    text-align: left;

    p {
      font-weight: 500;
      font-size: 1.2rem;
    }
  }

  .btn {
    background-color: rgb(205, 60, 50);
    color: white;
    border: none;
    width: 55%;
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

@media (min-width: 250px) and (max-width: 450px) {
  .segundo {
    flex-direction: column;
    text-align: center;
    gap: 2rem;

    .presente {
       width: 100%;
       margin-bottom: 2rem;
 
    }

    .conect {
      width: 80%;
      align-items: center;
      justify-content: center;
      text-align: center;

      p {
        font-size: 1rem;
      }
    }

    .btn {
      width: 70%;
    }
  }
}
@media (min-width: 451px) and (max-width: 959px) {
  .segundo {
    flex-direction: column;
    text-align: center;
    gap: 2rem;

    .presente {
       width: 100%;
       margin-bottom: 2rem; 
    }

    .conect {
      width: 80%;
      align-items: center;
      justify-content: center;
      text-align: center;

      p {
        font-size: 1rem;
      }
    }

    .btn {
      width: 70%;
    }
  }
}
</style>
<template>
  <section>
    <div>
      <h2>Entre em contato</h2>
    </div>
    <form action="">
      <input type="text" placeholder="Nome" required />
      <input type="email" placeholder="Email" required />
      <textarea name="Assunto" rows="8" placeholder="Assunto da mensagem" required></textarea>
      <button type="submit">ENTRAR EM CONTATO</button>
    </form>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-bottom: 5rem;

  h2 {
    font-size: 2.5rem;
  }
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 40%;

  input {
    font-size: 1.2rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
    box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.5);
  }

  textarea {
    font-size: 1.2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.5);
  }
}

button {
    background-color: rgba(132, 106, 255, 1);
    padding: 0.5rem 2rem;
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: 0.3s ease;
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: none;
    box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.5);

    &:hover {
      background-color: #ffffff;
      color: #2b00ff;
      box-shadow: 1px 1px 10px 10px rgba(132, 106, 255, 1);
    }
}
</style>

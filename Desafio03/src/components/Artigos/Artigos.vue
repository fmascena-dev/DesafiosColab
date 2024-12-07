<script setup>
import { ref } from 'vue';

// Array de artigos
const articles = ref([
  {
    id: 1,
    titulo: 'O que é linguagem de programação? Conheça as principais',
    descricao:
      'Uma das mais populares vertentes da tecnologia da informação, a área de...',
    imagem: new URL('../../assets/ImagemArtigos/item1.png', import.meta.url)
      .href,
  },
  {
    id: 2,
    titulo:
      'Python: por que a linguagem é tão usada para Data Science e finanças?',
    descricao:
      'O mundo da programação conta com algumas opções de linguagem para...',
    imagem: new URL('../../assets/ImagemArtigos/item2.png', import.meta.url)
      .href,
  },
  {
    id: 3,
    titulo: 'GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários',
    descricao:
      'O popular serviço de repositório de código GitHub foi adquirido pela...',
    imagem: new URL('../../assets/ImagemArtigos/item3.png', import.meta.url)
      .href,
  },
  {
    id: 4,
    titulo: '15 comandos no GIT que os desenvolvedores precisam saber',
    descricao:
      'Dominar os comandos GIT é uma habilidade que se conquista com...',
    imagem: new URL('../../assets/ImagemArtigos/item4.png', import.meta.url)
      .href,
  },
  {
    id: 5,
    titulo: 'GIT e GitHub: o que são e quais as diferenças entre eles?',
    descricao:
      'Git e GibHub são dois softwares de controle de versão essenciais para...',
    imagem: new URL('../../assets/ImagemArtigos/item5.png', import.meta.url)
      .href,
  },
  {
    id: 6,
    titulo:
      'GitHub Copilot ganha integração com GPT-4 e interface conversacional',
    descricao:
      'O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...',
    imagem: new URL('../../assets/ImagemArtigos/item6.png', import.meta.url)
      .href,
  },
]);
</script>

<template>
  <section>
    <div v-for="item in articles" :key="item.id" class="article">
      <img :src="item.imagem" alt="Imagem do artigo" />
      <div class="textos">
        <h3>{{ item.titulo }}</h3>
        <p>{{ item.descricao }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 5rem;
}


.article {
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 1rem;
  border: none;
  border-radius: 10px 10px 0 0;
  box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
}

.article img {
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.textos {
    padding: 1.3rem 1.3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
}
</style>

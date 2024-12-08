<script setup>
</script>

<template>
    <header>
        <figure class="logo">
            <img src="../../assets/logo.svg" alt="logo studio ghibli">
        </figure>
        <figure class="redes-sociais">
            <a href=""><img src="../../assets/Image/link-google.svg" alt=""></a>
            <a href=""><img src="../../assets/Image/link-facebook.svg" alt=""></a>
            <a href=""><img src="../../assets/Image/link-twitter.svg" alt=""></a>
            <a href=""><img src="../../assets/Image/link-instagram.svg" alt=""></a>
        </figure>
    </header>
</template>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0rem;

    img {
        filter: invert(36%) sepia(34%) saturate(966%) hue-rotate(300deg) brightness(100%) contrast(100%);
    }

    .redes-sociais {
        display: flex;
        gap: 1rem;

        img {
            filter: invert(36%) sepia(34%) saturate(966%) hue-rotate(300deg) brightness(100%) contrast(100%);
        }
    }
}
</style>
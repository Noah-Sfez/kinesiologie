<template>
    <div class="temoignages">
        <h2>Témoignages</h2>
        <img src="../assets/home/Capture d’écran 2022-02-02 à 21_42_17.avif" alt="">
        <img src="../assets/home/Capture d’écran 2023-03-17 à 00_02_42.avif" alt="">
        <img src="../assets/home/Capture d’écran 2023-03-17 à 00_03_05.avif" alt="">
        <img src="../assets/home/Capture d’écran 2023-03-17 à 00_03_17.avif" alt="">
        <img src="../assets/home/Capture d’écran 2023-03-17 à 00_03_38.avif" alt="">
    </div>
</template>

<style scoped>
.temoignages {
    background-image: url("../assets/home/flou.avif");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 2% 20%;
    color: white;
}
@media screen and (max-width: 768px) {
    .temoignages {
        padding: 2% 5%;
    }
}
h2 {
    font-size: 3.5rem;
    font-weight: bold;
    font-family: 'Dancing Script', cursive;
}
@media screen and (max-width: 768px) {
    h2 {
        font-size: 2rem;
    }
}
img {
    width: 100%;
}

</style>
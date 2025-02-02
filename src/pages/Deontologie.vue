<template>
    <div class="deontologie">
        <img src="../assets/home/zen.jpeg" alt="">
        <div>
            <h2>Déontologie</h2>
            <br><br>
            <p>Le kinésiologue ne soigne pas, mais vous aide à activer vos ressources qui seront essentielles dans votre processus de guérison.</p>
            <br>
            <p>Ainsi, la kinésiologie ne peut en aucun cas se substituer à la médecine conventionnelle.</p>
            <br>
            <p>Le kinésiologue ne pose aucun diagnostic médical et ne prescrit aucun traitement.</p>
            <br>
            <p>Il ne peut demander la suspension d’un traitement médical en cours.</p>
            <br>
            <p>Même en dehors de l'exercice de sa fonction, le kinésiologue est tenu au respect de la confidentialité des informations dont il peut avoir connaissance lors des séances.</p>
            <img src="../assets/home/skpf.png" alt="">
            <p>Je suis membre du SKPF (Syndicat des Kinésiologues Professionnels Francophones) et à ce titre je me suis engagée à respecter le <a href="https://www.skpf.fr/gifs/pdf/Code-de-deontologie.pdf" target="_blank">code de déontologie</a> de ce syndicat.</p>
        </div>
    </div>
</template>

<style scoped>
.deontologie {
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 20px;
    padding: 2%;
    background-image: url(../assets/home/mer.jpeg);
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    color: black;
}
@media screen and (max-width: 768px) {
    .deontologie {
        grid-template-columns: 1fr;
        padding: 2% 0%;
    }
}
.deontologie img {
    width: 100%;
}
.deontologie div {
    background-color: rgba(255, 255, 255);
    padding: 10% 20%;
    color: rgb(0, 0, 0);
    font-size: 1.2rem;
    line-height: 1.5
}
@media screen and (max-width: 768px) {
    .deontologie div {
        padding: 5% 10%;
    }
}
.deontologie a {
    color: #659ba3;
    font-weight: bold;
}
.deontologie > div img {
    width: 30%;
    margin: 0 35%;
}
.deontologie h2 {
    font-size: 2.5rem;
    font-weight: 300;
    font-family: "Dancing Script", cursive;
}
</style>
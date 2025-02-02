<template>
    <div class="background">
        <img src="../assets/home/profil.avif" alt="">
        <div>
            <p>J’ai découvert la kinésiologie grâce à une proche.</p>
            <p>Après plusieurs années de parcours PMA (Procréation Médicalement Assistée) laborieux et infructueux*, il lui a suffi de 3 séances de kinésiologie pour lever le blocage émotionnel qui l’empêchait de tomber enceinte et de devenir mère… naturellement.</p>
            <p>Son expérience a été une révélation pour moi.</p>
            <p>A travers elle, cette citation d’Anne Ancelin Schützenberger prenait tout son sens :</p>
            <p>« Ce qui ne s’exprime pas en mots s’imprime et s’exprime alors en maux ».</p>
            <br>
            <p>Je me suis alors passionnée pour cette technique qui a littéralement transformé ma vie en changeant mon regard sur les évènements du passé, au point de décider d’en faire mon métier.</p>
            <br>
            <p>Aujourd’hui je suis Kinésiologue certifiée EKMA (École de Kinésiologie et Méthodes Associées) et j’accompagne les adultes, les adolescents, les enfants, les bébés et les femmes enceintes.</p>
            <p>La kinésiologie s’adresse à tous car tout au long de notre vie et même avant notre naissance, nous sommes amenés à vivre des émotions.</p>
            <p>Elle permet d’identifier et libérer les stress et les blocages émotionnels non évacués, en utilisant la mémoire cellulaire du corps.</p>
            <br>
            <p>* après examens approfondis aucun problème physiologique n’avait été détecté</p>
        </div>
    </div>
</template>

<style scoped>

.background {
    background-image: url(../assets/home/ble.avif);
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    padding: 20px;
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
}
@media screen and (max-width: 768px) {
    .background img {
        width: 80%;
    }
}

.background div {
    background-color: rgba(0, 0, 0, 0.416);
    padding: 20px;
    color: white;
    font-size: 1.2rem;
}

</style>
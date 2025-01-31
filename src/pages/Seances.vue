<template>
    <div class="bandeau_nav">
        <button>
            <a href="#une-seance">Une séance</a>
        </button>
        <button>
            <a href="#tarifs">Tarifs et durée</a>
        </button>
    </div>
    <div class="grid_tier" id="une-seance">
        <img src="../assets/home/main-seance.avif" class="mains" alt="">
        <div class="deroulement">
            <h2>Comment se déroule une séance ?</h2>
            <br><br>
            <p>La séance se fait allongée.</p>
            <p>Certains mouvements peuvent être effectués debout ou assis.</p>
            <p>Vous restez habillé.</p>
            <br>
            <p>Le test musculaire (pression légère de ma part sur l'avant bras) s’effectue essentiellement sur le brachial antérieur ou le deltoïde antérieur.</p>
            <p>Pour les besoins de la séance et de façon ponctuelle, d’autres muscles (des jambes par exemple) pourront être sollicités pendant la séance.</p>
            <br>
            <p>La consultation se déroule en 4 temps :</p>
            <ul>
                <li>Nous élaborons ensemble l’objectif de la séance</li>
                <li>Je recherche et identifie le(s) blocage(s)/stress d'origine grâce au test musculaire</li>
                <li>Je procède au rééquilibrage du corps à l'aide des différentes techniques de la kinésiologie</li>
                <li>Je vérifie si l’objectif de la séance n'est plus considéré comme un stress pour le corps</li>
            </ul>
            <br>
            <p>Le kinésiologue accompagne le consultant dans sa démarche, au rythme de ce dernier. </p>
            <p>1 à 3 séances sont généralement nécessaires pour traiter une problématique ou une thématique.</p>
        </div>
    </div>
    <div class="grid_tier_reverse" id="tarifs">
        <div class="tarifs bold">
            <h2>Tarifs Neuilly sur Seine</h2>
            <br>
            <p class="blue-txt">Adulte : 90€</p>
            <p class="blue-txt">Durée 1h15 - 1h30</p>
            <br>
            <p class="blue-txt">Enfant (de 7 à 15 ans) : 75€</p>
            <p class="blue-txt">Durée 1h</p>
            <p>A Neuilly je reçois les enfants exclusivement à partir de 7 ans.</p>
            <br>
            <p>Paiements acceptés : chèque ou espèces.</p>
            <br>
            <p>Certaines mutuelles remboursent les consultations de kinésiologie.</p>
            <br>
            <p class="blue-txt">Possibilité de reporter/annuler sa séance jusqu'à 48h avant.</p>
            <p class="blue-txt">Passé ce délais la séance sera due.</p>
            <p class="blue-txt">Merci de votre compréhension.</p>
        </div>
        <img src="../assets/home/coeur-lacet.avif" alt="">
    </div>
    <div class="neuilly grid_tier">
        <img src="../assets/home/cabinet_neuilly.avif" alt="">
        <div>
            <h2>Le cabinet à Neuilly sur Seine</h2>
            <br>
            <h2>Consultations sur rendez-vous</h2>
            <h2>Uniquement le Lundi</h2>
        </div>
    </div>
    <div class="grid_tier_reverse origyn">
        <div>
            <h2>Tarifs "Origyn"</h2>
            <br>
            <p class="blue-txt">Adulte</p>
            <p class="blue-txt">Tarif adhérent Origyn : 80€</p>
            <p class="blue-txt">Tarif non adhérent Origyn : 90€</p>
            <p class="blue-txt">Durée 1h15 - 1h30</p>
            <br>
            <p class="blue-txt">Enfants (- de 15 ans) :</p>
            <p class="blue-txt">Tarif adhérent Origyn : 70€</p>
            <p class="blue-txt">Tarif non adhérent Origyn : 75€</p>
            <p class="blue-txt">Durée 1h</p>
            <p>A Puteaux je reçois les nourrissons et enfants en bas âge sans distinction d'âge.</p>
            <br>
            <p>Paiements acceptés : chèque ou espèces.</p>
            <br>
            <p>Certaines mutuelles remboursent les consultations de kinésiologie.</p>
            <br>
            <p class="blue-txt">Possibilité de reporter/annuler sa séance jusqu'à 48h avant.</p>
            <p class="blue-txt">Passé ce délais la séance sera due.</p>
            <p class="blue-txt">Merci de votre compréhension.</p>
        </div>
        <img src="../assets/home/origyn.webp" alt="">
    </div>
    <div class="grid_tier cabinet_origyn">
        <img src="../assets/home/cabinet_origyn.avif" alt="">
        <div>
            <h2>Le cabinet au centre "Origyn" à Puteaux</h2>
            <br>
            <h2>Consultations sur rendez-vous du mardi au vendredi inclus</h2>
        </div>
    </div>
</template>

<style scoped>
.blue-txt {
    color: #659ba3;
    font-weight: bold;
}
.bold {
    font-weight: bold;
}
.bandeau_nav {
    display: flex;
    justify-content: center;
    gap: 60px;
    padding: 20px;
    background-color: #b9d6da;
    margin-bottom: 10px;
}
button {
  border-radius: 30px;
  border: none;
  text-decoration: none;
  padding: 0.5%;
  background-color: #fffdf3;
  transition: ease-in-out 0.1s;
}
a {
  text-decoration: none;
  color: inherit;
  font-size: 1.5rem;
  font-family: 'Dancing Script', cursive;
}
.grid_tier {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 20px;
    padding: 1%;
}
.grid_tier_reverse {
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 20px;
    padding: 1%;
}
.grid_tier_reverse img {
    width: 100%;
}
.mains {
    width: 100%;
}
.deroulement {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    padding: 7%;
    background-color: #f2f2f2;
    box-shadow: 2px 2px 5px #00000073;
}
.deroulement p, .tarifs p {
    line-height: 1.2;
    font-size: 1.5rem;
}
h2 {
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Dancing Script', cursive;
}
ul {
    list-style-type: circle;
    line-height: 1.5;
    padding: 0;
    color: #659ba3;
    font-weight: bold;
}
li {
    font-size: 1.5rem;
    margin-left: 20px;
}
.tarifs {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    padding: 10%;
    background-color: #f2f2f2;
    box-shadow: 2px 2px 5px #00000073;
}
.neuilly img {
    width: 100%;
}
.neuilly div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
}
.neuilly h2 {
    font-size: 2.5rem;
}
.origyn img {
    width: 100%;
}
.origyn div {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    padding: 10%;
    background-color: #f2f2f2;
    box-shadow: 2px 2px 5px #00000073;
}
.origyn h2 {
    font-size: 2.5rem;
}
.origyn p {
    line-height: 1.2;
    font-size: 1.5rem;
}
.cabinet_origyn img {
    width: 100%;
}
.cabinet_origyn div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    padding: 15%;
}
.cabinet_origyn h2 {
    font-size: 2.5rem;
}
</style>
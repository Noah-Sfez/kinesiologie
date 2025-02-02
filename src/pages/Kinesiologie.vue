<template>
    <div class="bandeau_nav">
        <button>
            <a href="#kinesiologie">Qu'est-ce que la kinésiologie ?</a>
        </button>
        <button>
            <a href="#pour-qui">Pour qui ? Pour quoi ?</a>
        </button>
        <button>
            <a href="#emotions">Kinésiologie et émotions</a>
        </button>
    </div>
    <div class="grid_two w-100" id="kinesiologie">
        <img src="../assets/home/pont.jpeg" alt="">
        <div>
            <h2>Qu'est-ce que la Kinésiologie ?</h2>
            <br>
            <p>La kinésiologie est une technique de santé non médicale qui permet de rétablir l’harmonie entre les 4 éléments essentiels de l’être humain :</p>
            <br>
            <ul>
                <li>- Le corps</li>
                <li>- Le mental</li>
                <li>- Les émotions</li>
                <li>- L’énergie</li>
            </ul>
            <br>
            <p>La Kinésiologie permet d'identifier les stress et les blocages émotionnels non évacués, en utilisant la mémoire cellulaire du corps.</p>
            <p>C'est par le test musculaire (du bras essentiellement) que l'on va rechercher et déterminer le ou les blocages inconscients.</p>
            <br>
            <br>
            <p>C'est un outil d'accompagnement qui permet de retrouver son équilibre, en réactivant ses propres ressources. </p>
            <p>C'est aussi l'outil idéal pour retrouver le plaisir d’être vous-même et vous permettre de : </p>
            <h3>Transformer vos blessures en une véritable force, dans votre vie.</h3>
        </div>
    </div>
    <div class="for-what" id="pour-qui">
        <div>
            <h2>La kinésiologie pour qui, pour quoi ?</h2>
            <p>Ma kinésiologie s'adresse à tous et à chaque étape de la vie : </p>
            <p class="blue-txt">Adultes, adolescents, enfants, bébés, femmes enceintes</p>
            <br><br>
            <p>De nombreux travaux de neurosciences montrent qu’une exposition à un stress chronique affecte l’hippocampe, le siège de la mémoire et des émotions. </p>
            <p>Lorsque le cerveau ne sait plus faire face aux émotions, c’est le corps qui prend le relais :</p>
            <h3>« Ce qui ne s’exprime pas en mots s’imprime et s'exprime alors en maux »</h3>
            <br>
            <p class="blue-txt txt-end">Anne Ancelin Schützenberger</p>
            <br><br>
            <p>Il existe autant de champs d’application de la kinésiologie que de sources de stress.</p>
            <p>En voici une liste non exhaustive :</p>
            <br><br>
            <ul>
                <li>Stress chronique ou ponctuel (examen scolaire, permis de conduire, entretien d’embauche, prise de parole en public etc…)</li>
                <li>Troubles du sommeil </li>
                <li>Troubles du comportement alimentaire (surpoids, sous poids, boulimie, anorexie)</li>
                <li>Allergies, intolérances alimentaires</li>
                <li>Problèmes de peau (eczéma, psoriasis etc…)</li>
                <li>Angoisse, surmenage</li>
                <li>Douleurs chroniques (maux de dos, migraines, entorses, cycles douloureux etc…)</li>
                <li>Manque de confiance en soi, estime de soi</li>
                <li>Peurs, phobies, dépendances (affective, tabagisme...)</li>
                <li>Problèmes d’apprentissage, de concentration, irritabilité</li>
                <li>Amélioration des performances sportives</li>
            </ul>
        </div>
    </div>
    <div class="grid_four w-100" id="emotions">
        <div>
            <h2>La Kinésiologie et les émotions</h2>
            <p class="line-height">L'émotion est un signal d'alarme.</p>
            <p class="line-height">Tenter de ne pas ressentir ses émotions (peur, colère, tristesse) revient à chercher à éteindre un signal d'alarme, quand la maison brûle, parce qu'on est dérangé par le bruit.</p>
        </div>
        <img src="../assets/home/think.jpeg" alt="">
        <div class="txt-center blue-txt">
            <p class="line-height">La kinésiologie peut vous permettre de changer de point de vue, de réaction face aux évènements qu'on ne peut maitriser et qui ne dépendent pas de vous.</p>
        </div>
        <img src="../assets/home/two_people.jpeg" alt="">
    </div>
</template>

<style scoped>
.bandeau_nav {
    display: flex;
    justify-content: center;
    gap: 60px;
    padding: 20px;
    background-color: #b9d6da;
    margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
    .bandeau_nav {
        flex-direction: column;
        gap: 10px;
    }
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
.grid_two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 2% 20%;
}
@media screen and (max-width: 768px) {
    .grid_two {
        grid-template-columns: 1fr;
        padding: 2% 5%;
        grid-template-areas: 
            "text"
            "image";
    }
}
.grid_two img {
    width: 100%;
    grid-area: image;
}
.grid_two > div {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    padding: 7% 5%;
    background-color: #f2f2f2;
    box-shadow: 2px 2px 5px #00000073;
    grid-area: text;
}
h2 {
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Dancing Script', cursive;
}
@media screen and (max-width: 768px) {
    h2 {
        font-size: 1.5rem;
    }
}
ul {
    list-style-type: none;
    padding: 0;
    color: #659ba3;
    font-weight: bold;
}
h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #659ba3;
}
.for-what {
    display: flex;
    justify-content: center;
    padding: 2% 0%;
    background-image: url('../assets/home/montagnes.jpeg');
}
.for-what > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    padding: 2%;
    background-color: #f2f2f2;
    box-shadow: 2px 2px 5px #00000073;
    gap: 2px;
    font-size: 1.2rem;
}
@media screen and (max-width: 768px) {
    .for-what > div {
        width: 90%;
        font-size: 1rem;
        line-height: 1.2;
    }
}
.for-what h2 {
    font-size: 2.8rem;
    font-weight: 300;
    margin-bottom: 30px;
}
@media screen and (max-width: 768px) {
    .for-what h2 {
        font-size: 1.8rem;
    }
}
.for-what ul {
    list-style-type: circle;
    padding: 1%;
    margin-left: 10%;
}
.for-what ul li {
    margin-bottom: 5px;
}
.blue-txt {
    color: #659ba3;
    font-weight: bold;
}
.txt-end {
    text-align: end;
}
.txt-center {
    text-align: center;
}
.grid_four {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
@media screen and (max-width: 768px) {
    .grid_four {
        grid-template-columns: 1fr;
        grid-template-areas: 
            "text1"
            "image1"
            "text2"
            "image2";
    }
}
.grid_four img {
    width: 100%;
}
.grid_four > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0% 20%;
    background-color: #fcf8ed;
    font-size: 1.2rem;
}
@media screen and (max-width: 768px) {
    .grid_four > div {
        padding: 5%;
    }
}
.grid_four h2 {
    margin-bottom: 30px;
    font-weight: 300;
    color: #b89c9c;
}
.line-height {
    line-height: 1.5;
}
</style>
<template>
  <div class="parallax">
    <div class="citation">
      <p>"La porte du changement ne peut s'ouvrir que de l'intérieur,<br>chacun en détient la clé."</p>
      <p class="text-end">Jacques Salomé</p>
    </div>
  </div>
  <div class="b-color-white w-100 content_center">
    <div class="grid_four">
      <div class="b-color-blue-vert">
        <p>La kinésiologie : à quoi ça sert et à qui cela s'adresse ?</p>
        <button>
          <router-link to="/la-kinesiologie">EN SAVOIR +</router-link>
        </button>
      </div>
      <div class="b-color-blue-turquoise">
        <p>Une séance de kinésiologie, comment ça se passe ?</p>
        <button>
          <router-link to="/une-seance">EN SAVOIR +</router-link>
        </button>
      </div>
      <div class="b-color-blue-clair">
        <p>Tarifs et durée d'une séance</p>
        <button>
          <router-link to="/une-seance">EN SAVOIR +</router-link>
        </button>
      </div>
      <div class="b-color-blue-ciel">
        <p>Prendre un Rendez-vous</p>
        <div class="align-center">
          <button>
            <a href="tel:0616391852" style="display: flex; justify-content: center; align-items: center; gap: 5px;">
              <svg data-bbox="25.849 20.098 148.61 159.903" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 200 200" data-type="shape">
                  <g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M70.759 24.278c-2.483-4.574-7.721-5.499-11.759-2.255L43 35.18c-20.174 16.202-23.035 44.171-6 63.76l56 64.772c17.02 19.572 46.23 21.812 66 5.06l12-10.121c3.953-3.35 4.827-8.637 1-12.145l-28-25.301c-3.815-3.497-9.893-4.152-14-1.012l-15 14.169-45-51.616L84 69.59c4-3.036 6-9.109 4-13.157L70.759 24.278z"/>
                  </g>
              </svg>
              Appeler
            </a>
          </button>
          <button>
            <a href="https://www.annuaire-therapeutes.com/therapeute/157223-laetitia-de-siqueira-neuilly-sur-seine">Rdv en ligne</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parallax {
  background: 
    url("../assets/home/clé.jpeg");
  height: 75vh;
  background-attachment: fixed; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
@media screen and (max-width: 768px) {
  .parallax {
    height: auto;
  }
}
.citation {
  background-color: rgba(238, 238, 238, 0.69);
  padding: 1.8%;
  font-size: 1.8rem;
  font-style: italic;
  font-weight: bold;
  color: #4b9ba6;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 3% 0% 0% 20%;
}
@media screen and (max-width: 768px) {
  .citation {
    margin: 5%;
    font-size: 1.2rem;
  }
}
.text-end {
  text-align: end;
}
.b-color-white {
  background-color: white;
}
.w-100 {
  width: 100%;
}
.content_center {
  display: flex;
  justify-content: center;
  padding: 2% 0%;
}
.grid_four {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 20px;
  width: 60%;
}
@media screen and (max-width: 768px) {
  .grid_four {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 10px;
  }
}
.grid_four > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 260px;
  padding: 20% 4%;
  font-size: 2rem;
  font-family: 'Dancing Script', cursive;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .grid_four > div {
    padding: 20px 15px;
    font-size: 1.5rem;
    height: auto;
    width: 100%;
    gap: 20px;
  }
}
.b-color-blue-vert {
  background-color: #355a5f;
  color: white;
}
.b-color-blue-turquoise {
  background-color: #4f878f;
  color: white;
}
.b-color-blue-clair {
  background-color: #8cafb4;
  color: white;
}
.b-color-blue-ciel {
  background-color: #b9d6da;
  color: black;
}
button {
  border-radius: 30px;
  border: none;
  text-decoration: none;
  padding: 2% 5%;
  background-color: #fffdf3;
  transition: ease-in-out 0.1s;
}
@media screen and (max-width: 768px) {
  button {
    padding: 5px 10px;
  }
}
button:hover {
  padding: 4% 8%;
  font-size: 1.2rem;
}
@media screen and (max-width: 768px) {
  button:hover {
    padding: 5px 10px;
    font-size: 1rem;
  }
}
a {
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
}
@media screen and (max-width: 768px) {
  a {
    font-size: 0.8rem;
  }
}
.align-center {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
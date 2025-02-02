<script>
export default {
  name: 'BurgerMenu',
  data() {
    return {
      isOpen: false, // État du menu principal (ouvert/fermé)
      subMenuOpen: {
        kinesio: false,
        seance: false
      }
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      // Ferme les sous-menus si le menu principal est fermé
      if (!this.isOpen) {
        this.subMenuOpen.kinesio = false;
        this.subMenuOpen.seance = false;
      }
    },
    toggleSubMenu(menu) {
      // Bascule l'état du sous-menu sélectionné
      this.subMenuOpen[menu] = !this.subMenuOpen[menu];
    },
    closeMenu() {
      this.isOpen = false;
      this.subMenuOpen.kinesio = false;
      this.subMenuOpen.seance = false;
    }
  }
}
</script>

<template>
    <div class="header">
        <img src="../assets/home/logo.jpeg" alt="logo">
        <div class="header_content">
            <div class="flex">   
                <h1>Laetitia de Siqueira Kinésiologue</h1>
                <div class="burger" @click="toggleMenu">
                    <div :class="{'line': true, 'line1': true, 'active': isOpen}"></div>
                    <div :class="{'line': true, 'line2': true, 'active': isOpen}"></div>
                    <div :class="{'line': true, 'line3': true, 'active': isOpen}"></div>
                </div>
            </div>
            
            <p>La kinésiologie vous aide à retrouver votre équilibre, en réactivant vos propres ressources.</p>
            <button>
                <a target="_blank" href="https://www.annuaire-therapeutes.com/therapeute/164149-laetitia-de-siqueira-puteaux">rdv en ligne</a>
            </button>
        </div>
         <!-- Bouton burger/croix -->
    

    <!-- Transition pour l'overlay -->
    <transition name="fade">
      <div class="overlay" v-if="isOpen" @click.self="toggleMenu">
        <nav class="menu">
          <ul>
            <li><router-link to="/" @click="closeMenu">Accueil</router-link></li>
            <!-- Lien avec sous-menu : La kinésiologie -->
            <li>
              <div class="menu-item" @click="toggleSubMenu('kinesio')">
                <span class="toggle-icon">{{ subMenuOpen.kinesio ? '–' : '+' }}</span>
                La Kinésiologie
              </div>
              <transition name="slide">
                <ul v-if="subMenuOpen.kinesio" class="submenu">
                  <li><router-link :to="{ path: '/la-kinesiologie', hash: '#kinesiologie' }" @click="closeMenu">Qu'est-ce que c'est ?</router-link></li>
                  <li><router-link :to="{ path: '/la-kinesiologie', hash: '#pour-qui' }" @click="closeMenu">Pour qui ? Pour quoi ?</router-link></li>
                  <li><router-link :to="{ path: '/la-kinesiologie', hash: '#emotions' }" @click="closeMenu">Kinésiologie et pandémie</router-link></li>
                </ul>
              </transition>
            </li>

            <!-- Lien avec sous-menu : Une séance -->
            <li>
              <div class="menu-item" @click="toggleSubMenu('seance')">
                <span class="toggle-icon">{{ subMenuOpen.seance ? '–' : '+' }}</span>
                Une séance
              </div>
              <transition name="slide">
                <ul v-if="subMenuOpen.seance" class="submenu">
                  <li><router-link :to="{ path: '/une-seance', hash: '#une-seance' }" @click="closeMenu">Déroulé d'une séance</router-link></li>
                  <li><router-link :to="{ path: '/une-seance', hash: '#tarifs' }" @click="closeMenu">Tarifs Neuilly sur Seine</router-link></li>
                  <li><router-link :to="{ path: '/une-seance', hash: '#origyn' }" @click="closeMenu">Tarifs "Origyn" Puteaux</router-link></li>
                </ul>
              </transition>
            </li>

            <!-- Autres liens du menu -->
             <li><router-link to="/a-propos" @click="closeMenu">A propos</router-link></li>
             <li><router-link to="/temoignages" @click="closeMenu">Témoignages</router-link></li>
             <li><router-link to="/deontologie" @click="closeMenu">Déontologie</router-link></li>
             <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
             <li><router-link to="/mentions-legales" @click="closeMenu">Mentions légales</router-link></li>
          </ul>
        </nav>
      </div>
    </transition>
    </div>
</template>

<style scoped>
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.header {
    display: flex;
    justify-content: center;
    width: 100%;
}
@media screen and (max-width: 768px) {
    .header {
        flex-direction: column;
        gap: 20px;
        align-items: center;
        justify-content: center;
    }
}
.header_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    gap: 20px;
    margin-bottom: 20px;
}
@media screen and (max-width: 768px) {
    .header_content {
        width: 95%;
    }
}
img {
    width: 20%;
}
@media screen and (max-width: 768px) {
    img {
        width: 60%;
    }
}
h1 {
    color: #4b9ba6;
    font-size: 55px;
    font-weight: bold;
    font-family: 'Dancing Script', cursive;
}
@media screen and (max-width: 768px) {
    h1 {
        font-size: 32px;
        font-weight: 300;
        width: 70%;
    }
}
p {
    font-size: 20px;
}
button {
  position: relative;
  border-radius: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ffeeee;
  padding: 0.5em 1.2em;
  font-size: 1rem;
  color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
}
@media screen and (max-width: 768px) {
    button {
        padding: 0.5em 1em;
        margin: 20px auto;
    }
}

button::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #f2e6e6, #8cafb4);
  z-index: 0;
  opacity: 1;
  transition: opacity 0.4s ease-in-out;
  border-radius: 30px;
}

button:hover::before {
  opacity: 0;
}

button a {
  position: relative; 
  z-index: 1; 
  color: inherit;
  text-decoration: none;
}

.burger {
    display: none;
}
/* Style du bouton burger/croix */
@media screen and (max-width: 768px) {
    .burger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
.burger {
  width: 30px;
  height: 25px;
  cursor: pointer;
  z-index: 1001; /* Au-dessus de l'overlay pour être cliquable */
  position: relative;
}
.line {
  width: 100%;
  height: 4px;
  background-color: #333;
  transition: transform 0.3s ease, opacity 0.3s ease;
  border-radius: 2px;
}
.line1.active {
  transform: rotate(45deg) translate(5px, 5px);
}

.line2.active {
  opacity: 0; /* Cache la ligne du milieu */
}

.line3.active {
  transform: rotate(-45deg) translate(9px, -9px);
}

/* Overlay du menu */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e8dfdf; /* Fond rosé */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Menu principal */
.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  gap: 20px;
}
.menu li {
  margin: 20px 0;
  position: relative;
}
.menu a {
  text-decoration: none;
  font-size: 24px;
  color: #333;
}

/* Lien avec sous-menu */
.menu-item {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  gap: 10px;
  color: #333;
}
.toggle-icon {
  margin-left: 10px;
  font-size: 24px;
  transition: transform 0.3s;
}

/* Sous-menu */
.submenu {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 10px;
  gap: 1px !important;
}
.submenu li {
  margin: 10px 0;
}
.submenu a {
  font-size: 20px;
}

/* Transition pour l'overlay (fondu) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Transition pour les sous-menus (glissement) */
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>

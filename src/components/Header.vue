<template>
    <div class="header">
        <img src="../assets/home/logo.jpeg" alt="logo">
        <div class="header_content">   
            <h1>Laetitia de Siqueira Kinésiologue</h1>
            <p>La kinésiologie vous aide à retrouver votre équilibre, en réactivant vos propres ressources.</p>
            <button>
                <a target="_blank" href="https://www.annuaire-therapeutes.com/therapeute/164149-laetitia-de-siqueira-puteaux">rdv en ligne</a>
            </button>
        </div>
        
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    width: 100%;
}
.header_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    gap: 20px;
}
img {
    width: 20%;
}
h1 {
    color: #4b9ba6;
    font-size: 55px;
    font-weight: bold;
    font-family: 'Dancing Script', cursive;
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



</style>

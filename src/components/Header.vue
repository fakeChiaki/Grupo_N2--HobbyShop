<template>
  <header>
    <RouterLink to="/"><button><img src="../assets/img/logohobby.png"></button></RouterLink>

    <Dropdown title="Categorias" :items="categorias" />


    <div class="searchbar">
      <input type="text" placeholder="Buscar...">
      <img src="../assets/img/magglass.png">


    </div>

    <div class="buttons">
      <RouterLink to="/Profile"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="white" class="icon icon-tabler icons-tabler-filled icon-tabler-user">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
            <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
          </svg> </button>
      </RouterLink>

      <RouterLink to="/ShoppingCart"><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="white" class="icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" />
          </svg> </button>
      </RouterLink>
    </div>

  </header>


</template>


<script>
import Dropdown from './Dropdown.vue';

export default {
  name: 'navbar',
  components: {
    Dropdown
  },
  data() {
    return {
      categorias: [
        {
          title: 'Web',
          link: '#'
        },
        {
          title: 'Design',
          link: '#'
        },
        {
          title: 'Videos',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000B1C;
}

img {
  width: 12%;
}

button img {
  padding: 0;
  width: 80px;
  background: none;
}

button {
  background: none;
  border: none;
}

.searchbar {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  width: 60%;
  border-radius: 15px;
  border: none;
  padding-left: 10px;
  padding: 0.5rem;
  color: white;
  background-color: #103973;
}

input:focus {
  outline: none;
  color: white;
  background-color: #103973;
}

input::placeholder {
  color: white;
}

body {
  margin: 0;
  padding: 0;
}
</style>

<template>
  <header class="header">
    <div class="innerHeader">
      <div id="logo">
        <router-link to="/">
          <img
            id="logodesktop"
            class="d-none d-md-block"
            src="@/assets/logo.svg"
            alt="Logo de Uocify"
          />
          <img
            id="logomobile"
            class="d-md-none"
            src="@/assets/icon.svg"
            alt="Logo de Uocify"
          />
        </router-link>
      </div>
      <search-bar />
      <div id="user">
        <div class="linkHeader noRegistered" v-if="!isLoggedIn">
          <router-link to="login">Iniciar sesión</router-link>
          <router-link to="register">Registrar</router-link>
        </div>
        <div v-if="isLoggedIn">
          <p id="username" class="d-none d-md-inline clickable">
            {{ currentUser }}
          </p>
          <span class="fa fa-user"><fa-icon icon="user" /></span>
          <span class="clickable sign-out" @click="logout"
            ><fa-icon icon="sign-out-alt"
          /></span>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import firebase from "firebase";
import SearchBar from "./SearchBar.vue";

export default {
  components: { SearchBar },
  name: "AppHeader",
  data() {
    return {
      isLoggedIn: false,
      currentUser: "",
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.currentUser = user.email;
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
        this.currentUser = "";
      }
    });
  },

  methods: {
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(
          //Sesión finalizada correctamente
          (this.isLoggedIn = false),
          this.$router.push("/", () => {}) //Redirigimos a la página de inicio
        )
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>


<style lang="scss">
.header {
  background: white;
  top: 0px;
  box-shadow: 0 4px 8px 0 rgba(13, 10, 44, 0.04);
  position: fixed;
  width: 100%;
  z-index: 100;
  padding: 10px;
}

.innerHeader {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
}

#logo img {
  height: 40px;
  float: left;
}

#logo:hover {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}

a:hover {
  text-decoration: none !important;
  color: grey !important;
}

#user {
  margin-left: auto;
  text-align: right;
}

.clickable {
  padding: 5px;
  :hover {
    color: grey;
    cursor: pointer;
  }
}

.sign-out {
  color: $blue !important;
  margin-left: 4px;
}

.linkHeader {
  a {
    font-size: 14px;
    font-weight: 700;
    color: #414141;
    padding: 0 10px 0 10px;
    display: block;
    float: left;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
}

#username {
  font-weight: 600;
  font-size: 10pt;
}

#user .fa {
  font-size: 20px;
}
</style>
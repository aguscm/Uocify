<template>
  <main class="page-login">
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg" />
      <h1 class="main-title">Iniciar sesión</h1>
      <p class="auth-intro">
        Inicia sesión en uocify para disfrutar de miles de canciones.
      </p>

      <form @submit.prevent="login">
        <div class="form-group">
          <label class="form-label" for="username">Email</label>
          <input
            placeholder="Correo electrónico"
            type="email"
            id="email"
            class="form-control"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Contraseña</label>
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            class="form-control"
            v-model="password"
          />
        </div>
        <button class="btn btn-primary btn-lg" @click="login">
          Iniciar sesión
        </button>
      </form>
      <p class="text-danger mt-3">{{error}}</p>

      <p class="auth-bottom">
        ¿No tienes cuenta?
        <span class="alink"
          ><router-link to="register">Regístrate</router-link></span
        >
      </p>
    </section>
  </main>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data: function () {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    login: function (e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(response => {
          console.log("Sessió iniciada correctament amb el correu: "+response.user.email); //capturem la resposta del servidor
          this.$router.push("/", () => {}) //Redirigimos a la página de inicio
        })
        .catch((err) => {
          this.error = err.message;
        })

      e.preventDefault();
    },
  },
};
</script>


<style lang="scss" >

</style>
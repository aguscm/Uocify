<template>
  <main class="page-register">
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg" />
      <h1 class="main-title">Registro</h1>
      <p class="auth-intro">
        Regístrate en uocify para disfrutar de miles de canciones.
      </p>

      <form @submit.prevent="register">
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
        <button type="submit" class="btn btn-primary btn-lg" @click="register">Registrar</button>
      </form>
      <p class="text-danger mt-3">{{error}}</p>
      <p class="auth-bottom">
        ¿Ya tienes cuenta? <span class="alink"><router-link to="login">Inicia sesión</router-link></span>
      </p>
    </section>
  </main>
</template>

<script>

import firebase from "firebase";

export default {
  name: "register",
  data: function () {
    return {
      email: "",
      password: "",
      error: null
    };
    
  },
  
  methods: {
    register: function (e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(response => {
          console.log(response); //capturem la resposta del servidor
          console.log("Nou usuari creat amb el correu: "+response.user.email);
          this.$router.push('/')
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
.page-register {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main-title {
    margin-bottom: 20px;
  }
}
</style>
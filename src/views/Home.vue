<template>
  <main class="page-home">
    <div class="container">
      <img class="logo" src="@/assets/icon.svg" alt="logo" />
      <h1 class="main-title">¿En busca de música?</h1>
      <p class="lorem-textum">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus
        arcu, feugiat eu molestie in, finibus sit amet lorem. Phasellus
        consectetur ipsum in imperdiet ultrices.
      </p>
      <p class="text-center text-danger" v-if="!loading && error">
        {{ error }}
      </p>
      <loading v-if="loading"></loading>
      <p v-if="playlists.data == 0 && !loading">
        No se han encontrado playlists
      </p>
      <Playlists v-bind:playlists="playlists" />
    </div>
  </main>
</template>

<script>
import Playlists from "../components/Playlists.vue";
import API from "../script/api.js";
import Loading from "../components/Loading.vue";

export default {
  components: { Playlists, Loading },
  name: "Home",
  data() {
    return {
      loading: true,
      playlists: "",
      error: false,
    };
  },
  methods: {
    loadPlaylists() {
      return (
        API.getPlaylists()
          .then(
            (response) => (
              (this.playlists = response.data), (this.loading = false)
            )
          )
          //Se captura el error si hay y se muestra en la pantalla
          .catch(
            (err) => (
              console.log(err), (this.error = err), (this.loading = false)
            )
          )
      );
    },
  },

  created() {
    this.loadPlaylists();
  },
};
</script>


<style lang="scss">
.page-home {
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;

  .logo {
    width: 200px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .container-thin {
    max-width: 600px;
  }
}
</style>
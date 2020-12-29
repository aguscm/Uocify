<template>
  <main class="page-search results content container-lg">
    <!-- Header de la página de la playlist -->
    <p class="text-center text-danger" v-if="!loading && error">{{error}}</p>
    <div class="playlistHeader align-items-center row">
      <loading v-if="loading && !error"></loading>
      <p v-if="json == 0 && !loading && !error">No se ha encontrado la playlist</p>
      <div v-if="!loading" class="col-8 col-sm-4 col-md-3 mx-auto">
        <img
          v-if="json"
          :src="json.picture_xl"
          :alt="json.title"
          class="col-sm"
        />
      </div>

      <div
        v-if="!loading && !error"
        class="playlistData col-12 col-sm-8 col-md-9 text-center text-sm-left"
      >
        <p class="small">LISTA</p>
        <h1 v-if="json.title" class="playlistName font-weight-bold display-4">
          {{ json.title }}
        </h1>
        <p v-if="json.description" class="playlistDesc small">
          {{ json.description }}
        </p>
        <p v-if="json.creator" class="playlistDesc small">
          Creada por
          <span class="text-primary font-weight-bold"
            >{{ json.creator.name }}.</span
          >
        </p>
        <p v-if="json.fans" class="playlistDesc small">
          {{ json.fans | dotNumber }} fans.
        </p>
      </div>
    </div>

    <!-- Listado de canciones -->
    <div class="playlistDetail">
      <track-list v-if="json.tracks" v-bind:tracks="json.tracks.data" />
    </div>
  </main>
</template>

<script>
import API from "../script/api.js";
import TrackList from "../components/TrackList.vue";
import Loading from "../components/Loading.vue";

export default {
  components: { TrackList, Loading },
  data() {
    return {
      destinationId: this.$route.params.id, //La id de la playlist que viene del componente Playlists
      json: "", //El json a devolver del listado de canciones
      loading: true, //Si la página está cargando
      error: false,
    };
  },
  methods: {
    //Carga de canciones
    loadPlaylist(destinationId) {
      return API.getPlaylist(destinationId)
        .then((response) => ((this.json = response), (this.loading = false)))
        //Se captura el error si hay y se muestra en la pantalla
        .catch((err) => ((console.log(err)), (this.error = err), (this.loading = false))); 
    },
  },
  async created() {
    //Se cargan las canciones al crearse la vista
    this.loading = true;
    this.loadPlaylist(this.$route.params.id);
  },
};
</script>
<style lang="scss">
.playlistHeader {
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
}

.playlistDetail {
  background-color: white;
}

.playlistData {
  padding: 10px 20px 10px 20px;
}
</style>
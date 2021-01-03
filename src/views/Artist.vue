<template>
  <main class="page-search results content container-lg">
    <!-- Header de la página de la artist -->
    <loading v-if="loadingJson"></loading>
    <p class="text-center text-danger" v-if="!loadingJson && errorJson">
      {{ errorJson }}
    </p>
    <p v-if="json.data == 0 && !loadingJson">No se ha encontrado el artista</p>
    <div
      v-if="json && !loadingJson"
      class="artistHeader align-items-center row"
    >
      <div class="col-8 col-sm-4 col-md-3 mx-auto">
        <img
          v-if="json"
          :src="json.picture_xl"
          :alt="json.title"
          class="col-sm"
        />
      </div>
      <!-- Info de la página de la artist -->
      <div
        class="container artistData col-12 col-sm-8 col-md-9 text-center text-sm-left"
      >
        <p class="small">ARTISTA</p>
        <h1 v-if="json.name" class="artistName font-weight-bold display-4">
          {{ json.name }}
        </h1>
        <p v-if="json.nb_fan" class="artistDesc small">
          {{ json.nb_fan | dotNumber }}
          fans.
        </p>
      </div>
    </div>

    <!-- Listado de canciones -->
    <div class="artistDetail row">
      <div class="container-lg col-12 col-lg-8 order-1">
        <h3>Canciones más escuchadas</h3>
        <loading v-if="loadingSongs"></loading>
        <p class="text-center text-danger" v-if="!loadingSongs && errorSongs">
          {{ errorSongs }}
        </p>
        <p v-if="jsonSongs.data == 0 && !loadingSongs">
          No se han encontrado canciones
        </p>
        <track-list v-if="jsonSongs" v-bind:tracks="jsonSongs.data" />
      </div>
      <!-- Listado de comentarios -->
      <div class="col-12 col-lg-4 order-5 order-lg-2">
        <h3>Comentarios recientes</h3>
        <loading v-if="loadingComments"></loading>
        <p
          class="text-center text-danger"
          v-if="!loadingComments && errorComments"
        >
          {{ errorComments }}
        </p>
        <p v-if="jsonComments.data == 0 && !loadingComments">
          No se han encontrado comentarios recientes
        </p>
        <artist-comments
          v-if="jsonComments"
          v-bind:comments="jsonComments.data.slice(0, 3)"
        />
      </div>
      <!-- Listado de álbumes -->
      <div class="container-lg order-3">
        <h3>Álbumes más escuchados</h3>
        <loading v-if="loadingAlbums"></loading>
        <p class="text-center text-danger" v-if="!loadingAlbums && errorAlbums">
          {{ errorAlbums }}
        </p>
        <p v-if="jsonAlbums.data == 0 && !loadingAlbums">
          No se han encontrado álbumes
        </p>
        <album-list
          v-if="jsonAlbums"
          v-bind:albums="jsonAlbums.data.slice(0, 6)"
        />
      </div>
      <!-- Listado de artistas relacionados -->
      <div class="container-lg order-4">
        <h3>Artistas relacionados</h3>
        <loading v-if="loadingArtists"></loading>
        <p
          class="text-center text-danger"
          v-if="!loadingArtists && errorArtists"
        >
          {{ errorArtists }}
        </p>
        <p v-if="jsonRelatedArtists.data == 0 && !loadingArtists">
          No se han encontrado artistas relacionados
        </p>
        <artist-list
          v-if="jsonRelatedArtists"
          v-bind:artists="jsonRelatedArtists.data.slice(0, 6)"
        />
      </div>
    </div>
  </main>
</template>

<script>
import API from "../script/api.js";
import TrackList from "../components/TrackList.vue";
import AlbumList from "../components/AlbumList.vue";
import ArtistList from "../components/ArtistList.vue";
import ArtistComments from "../components/ArtistComments.vue";
import Loading from "../components/Loading.vue";

export default {
  //Título de la página
  metaInfo() {
    return {
      title: this.json.name,
      titleTemplate: "%s - Uocify",
    };
  },
  components: { TrackList, AlbumList, Loading, ArtistList, ArtistComments },
  data() {
    return {
      destinationId: this.$route.params.id, //La id de origen
      json: "", //El json a cargar con la información
      loadingJson: true,
      jsonSongs: "", //El json a cargar con la información de las canciones top del artista
      loadingSongs: true,
      jsonAlbums: "", //El json a cargar con la información de los álbumes top del artista
      loadingAlbums: true,
      jsonRelatedArtists: "", //El json a cargar con la información de los artistas relacionados
      loadingArtists: true,
      jsonComments: "", //El json a cargar con la información de los comentarios
      loadingComments: true,
      errorJson: false,
      errorSongs: false,
      errorAlbums: false,
      errorArtists: false,
      errorComments: false,
    };
  },
  methods: {
    //Carga del array de la info del artista
    loadArtist(destinationId) {
      return API.getArtistDetail(destinationId)
        .then(
          (response) => ((this.json = response), (this.loadingJson = false))
        ) //Se captura el error si hay y se muestra en la pantalla
        .catch(
          (err) => (
            console.log(err), (this.errorJson = err), (this.loadingJson = false)
          )
        );
    },
    //Carga de las canciones top
    loadArtistTopSongs(topSongsId) {
      return API.getArtistDetail(topSongsId)
        .then(
          (response) => (
            (this.jsonSongs = response), (this.loadingSongs = false)
          )
        ) //Se captura el error si hay y se muestra en la pantalla
        .catch(
          (err) => (
            console.log(err),
            (this.errorSongs = err),
            (this.loadingSongs = false)
          )
        );
    },
    //Carga de los top álbumes
    loadArtistTopAlbums(topAlbumsId) {
      return API.getArtistDetail(topAlbumsId)
        .then(
          (response) => (
            (this.jsonAlbums = response), (this.loadingAlbums = false)
          )
        ) //Se captura el error si hay y se muestra en la pantalla
        .catch(
          (err) => (
            console.log(err),
            (this.errorAlbums = err),
            (this.loadingAlbums = false)
          )
        );
    },
    //Carga de los artistas relacionados
    loadArtistRelated(id) {
      return API.getArtistDetail(id)
        .then(
          (response) => (
            (this.jsonRelatedArtists = response), (this.loadingArtists = false)
          )
        ) //Se captura el error si hay y se muestra en la pantalla
        .catch(
          (err) => (
            console.log(err),
            (this.errorArtists = err),
            (this.loadingArtists = false)
          )
        );
    },
    //Carga de los comentarios
    loadComments(id) {
      return API.getArtistDetail(id)
        .then(
          (response) => (
            (this.jsonComments = response), (this.loadingComments = false)
          )
        ) //Se captura el error si hay y se muestra en la pantalla
        .catch(
          (err) => (
            console.log(err),
            (this.errorComments = err),
            (this.loadingComments = false)
          )
        );
    },
    loadInfo(id) {
      this.loadingJson = true;
      this.loadingAlbums = true;
      this.loadingArtists = true;
      this.loadingComments = true;
      this.loadArtist(id);
      this.loadArtistTopSongs(id + "/top");
      this.loadArtistTopAlbums(id + "/albums");
      this.loadArtistRelated(id + "/related");
      this.loadComments(id + "/comments");
    },
  },
  async created() {
    //Se llama a las funciones al cargarse la vista
    this.loadInfo(this.destinationId);
  },
  watch: {
    $route: function () {
      //Se vacían las variables
      this.json = "";
      this.jsonSongs = "";
      this.jsonAlbums = "";
      this.jsonRelatedArtists = "";
      this.jsonComments = "";
      this.destinationId = this.$route.params.id;
      this.loadInfo(this.destinationId);
    },
  },
};
</script>
<style lang="scss">
.artistHeader {
  background-color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
  }
}

.artistDetail {
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  h3 {
    margin: 20px 0 20px 0;
  }
  thead {
    display: none;
  }
  .track-artist {
    display: none;
  }
}

.artistData {
  padding: 20px;
  line-height: 2;
}
</style>
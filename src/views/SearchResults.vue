<template>
  <main class="page-search content container-lg">
    <div class="content2">
      <h1 class="main-title">
        Resultados de <span>{{ this.$route.query.q }}</span>
      </h1>
      <!-- Página de resultados. No se muestra si no hay nada que mostrar -->
      <div class="results">
        <b-tabs content-class="mt-4">
          <b-tab id="todo" title="Todo">
            <h3>Canciones</h3>
            <TrackList v-bind:tracks="tracks.slice(0, 6)" />
            <loading v-if="loadingTracks"></loading>
            <p class="text-center text-danger" v-if="!loadingTracks && errorTracks">{{errorTracks}}</p>
            <p v-if="tracksTotal <= 0 && !loadingTracks">
              No se ha encontrado ninguna canción que coincida con la búsqueda
            </p>
            <h3>Álbumes</h3>
            <loading v-if="loadingAlbums"></loading>
            <p class="text-center text-danger" v-if="!loadingAlbums && errorAlbums">{{errorAlbums}}</p>
            <p v-if="albumsTotal <= 0 && !loadingAlbums">
              No se ha encontrado ningún álbum que coincida con la búsqueda
            </p>
            <AlbumList v-bind:albums="albums.slice(0, 6)" />
            <h3>Artistas</h3>
            <loading v-if="loadingArtists"></loading>
            <p class="text-center text-danger" v-if="!loadingArtists && errorArtists">{{errorArtists}}</p>
            <p v-if="artistsTotal <= 0 && !loadingArtists">
              No se ha encontrado ningún artista que coincida con la búsqueda
            </p>
            <ArtistList v-bind:artists="artists.slice(0, 6)" />
          </b-tab>
          <b-tab title="Canciones">
            <h2>{{ tracksTotal }} canciones</h2>
            <TrackList v-bind:tracks="tracks" />
            <loading v-if="loadingTracks"></loading>
            <p class="text-center text-danger" v-if="!loadingTracks && errorTracks">{{errorTracks}}</p>
            <p v-if="tracksTotal <= 0 && !loadingTracks">
              No se ha encontrado ninguna canción que coincida con la búsqueda
            </p>
          </b-tab>
          <b-tab id="albumes" title="Álbumes">
            <h2>{{ albumsTotal }} álbumes</h2>
            <loading v-if="loadingAlbums"></loading>
            <p class="text-center text-danger" v-if="!loadingAlbums && errorAlbums">{{errorAlbums}}</p>
            <p v-if="albumsTotal <= 0 && !loadingAlbums">
              No se ha encontrado ningún álbum que coincida con la búsqueda
            </p>
            <AlbumList v-bind:albums="albums" />
          </b-tab>
          <b-tab id="artistas" title="Artistas">
            <h2>{{ artistsTotal }} artistas</h2>
            <loading v-if="loadingArtists"></loading>
            <p class="text-center text-danger" v-if="!loadingArtists && errorArtists">{{errorArtists}}</p>
            <p v-if="artistsTotal <= 0 && !loadingArtists">
              No se ha encontrado ningún artista que coincida con la búsqueda
            </p>
            <ArtistList v-bind:artists="artists" />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </main>
</template>

<script>
import API from "../script/api.js";

import TrackList from "../components/TrackList.vue";
import AlbumList from "../components/AlbumList.vue";
import ArtistList from "../components/ArtistList.vue";
import Loading from "../components/Loading.vue";

export default {
  data() {
    return {
      tracks: "",
      albums: "",
      artists: "",
      tracksTotal: 0,
      albumsTotal: 0,
      artistsTotal: 0,
      inputSearch: this.$route.query.q,
      loadingTracks: true,
      loadingAlbums: true,
      loadingArtists: true,
      errorTracks: false,
      errorAlbums: false,
      errorArtists: false,
    };
  },
  components: { TrackList, AlbumList, ArtistList, Loading },
  name: "SearchResults",
  methods: {
    //Refresca los resultados de canciones
    updateTracks(q) {
      return (
        API.getTracks(q)
          .then(
            (response) => (
              (this.tracks = response.data),
              (this.tracksTotal = response.data.length),
              (this.loadingTracks = false)
            )
          )
          //Se captura el error si hay y se muestra en la pantalla
          .catch(
            (err) => (
              console.log(err),
              (this.errorTracks = err),
              (this.loadingTracks = false)
            )
          )
      );
    },
    //Refresca los resultados de álbumes
    updateAlbums(q) {
      return API.getAlbums(q)
        .then(
          (response) => (
            (this.albums = response.data),
            (this.albumsTotal = response.data.length),
            (this.loadingAlbums = false)
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
    //Refresca los resultados de artistas
    updateArtists(q) {
      return (
        API.getArtists(q)
          .then(
            (response) => (
              (this.artists = response.data),
              (this.artistsTotal = response.data.length),
              (this.loadingArtists = false)
            )
          )
          //Se captura el error si hay y se muestra en la pantalla
          .catch(
            (err) => (
              console.log(err),
              (this.errorArtists = err),
              (this.loadingArtists = false)
            )
          )
      );
    },
    //Recibe el parámetro y hace una búsqueda de canciones, álbumes o artistas que coincidan con el parámetro de búsqueda
    search(q) {
      this.loadingTracks = true;
      this.loadingAlbums = true;
      this.loadingArtists = true;
      this.updateTracks(q);
      this.updateAlbums(q);
      this.updateArtists(q);
    },
  },
  async created() {
    //Llama a search con el parámetro de búsqueda
    this.search(this.inputSearch);
  },
  watch: {
    //Cada vez que cambia la ruta, vaciamos los arrays y variables y comenzamos una nueva búsqueda
    $route: function () {
      if (this.$route.query.q != this.inputSearch) {
        this.tracks = "";
        this.albums = "";
        this.artists = "";
        this.tracksTotal = 0;
        this.albumsTotal = 0;
        this.artistsTotal = 0;
        this.inputSearch = this.$route.query.q;
        this.search(this.inputSearch);
      }
    },
  },
};
</script>

<style lang="scss" >
#todo thead {
  display: none;
}
.page-search {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main-title {
    margin-bottom: 20px;

    span {
      color: $grey-label;
    }
  }
}
</style>
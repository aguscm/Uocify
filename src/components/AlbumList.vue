<template>
  <!-- Contenido de "Álbumes" -->
  <div>
    <ul class="albumslist row">
      <li
        v-for="data in albums"
        v-bind:key="data.id"
        class="col-12 col-sm-6 col-md-3 col-lg-2"
      >
        <div class="itemMusical row align-items-center">
          <div class="imagecover col-4 col-sm-12">
            <img :src="data.cover_xl" alt="Imagen del álbum" />
          </div>
          <div class="aTitleSubtitle col-8 col-sm-12 text-left text-sm-center">
            <span class="aTitle">{{ data.title }}</span> <br />
            <span class="aSubtitle" v-if="data.artist"><router-link :to="{ name: 'artist', params: { id: data.artist.id } }">{{ data.artist.name }} </router-link></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AlbumList",
  props: ["albums"],
};
</script>


<style lang="scss">
</style>
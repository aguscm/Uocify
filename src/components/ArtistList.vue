<template>
  <!-- Contenido de "Artistas" -->
  <div>
    <ul class="row artistslist">
      <li
        v-for="data in artists"
        v-bind:key="data.id"
        class="col-12 col-sm-6 col-md-3 col-lg-2"
      >
      <router-link :to="{ name: 'artist', params: { id: data.id } }">
        <div class="itemMusical row align-items-center">
          
            <div class="imagecover col-4 col-sm-12">
              <img  v-if="data.picture" :src="data.picture" alt="Imagen del artista" />
            </div>
            <div class="aTitleSubtitle artist col-8 col-sm-12 text-left text-sm-center">
              <span  v-if="data.name" class="aTitle">{{ data.name }}</span> <br />
              <span  v-if="data.nb_fan" class="aSubtitle">{{ data.nb_fan | dotNumber }} fans</span>
            </div>
          
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ArtistList",
  props: ["artists"],
};
</script>


<style lang="scss">
</style>
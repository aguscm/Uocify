<template>
  <div>
    <ul class="row playlists">
      <li v-for="data in playlists" v-bind:key="data.id" class="col5">
        <router-link :to="{ name: 'playlist', params: { id: data.id } }">
          <div class="itemMusical row align-items-center">
            <div class="imagecover col-4 col-sm-12">
              <img  v-if="data" :src="data.picture_big" alt="Imagen del artista" />
            </div>
            <div  v-if="data.title" class="aTitleSubtitle artist col-8 col-sm-12">
              <span class="aTitle">{{ data.title }}</span> <br />
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Playlists",
  props: ["playlists"],
};
</script>


<style lang="scss">
.playlists {
  padding-left: 0;
}
.col5 {
  max-width: 20% !important;
  padding: 1em;
  margin-bottom: 50px !important;
}
@media (max-width: 768px) {
  .col5 {
    max-width: 50% !important;
    margin-bottom: 10px !important;
  }
}
@media (max-width: 576px) {
  .col5 {
    max-width: 100% !important;
    margin-bottom: 10px !important;
    box-shadow: 10px 10px 24px -14px rgb(189, 189, 189);
    border-radius: 10px;
    padding: 2%;
  }
  .col5:hover {
    background-color: #aaaaaa44;
  }
}
</style>
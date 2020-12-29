<template>
  <div class="table-responsive canciones">
    
    <table class="table table-hover tracklist">
      <thead>
        <tr class="">
          <th scope="col"></th>
          <th scope="col">CANCIÓN</th>
          <th scope="col">ARTISTA</th>
          <th scope="col">ÁLBUM</th>
          <th scope="col">D.</th>
        </tr>
      </thead>
      <!-- <Track/> -->
      <tbody>
        <tr v-for="data in tracks" v-bind:key="data.id">
          <td class="track-img" v-if="data.album"><img :src="data.album.cover" alt="Imagen del álbum" /></td>
          <td class="track-title" v-if="data.title">{{ data.title }}</td>
          <td class="track-artist" v-if="data.artist"><router-link :to="{ name: 'artist', params: { id: data.artist.id } }">{{ data.artist.name }} </router-link></td>
          <td class="track-album" v-if="data.album">{{ data.album.title }}</td>
          <td class="track-duration" v-if="data.duration">
            {{ data.duration | secondsToMinutes }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "TrackList",
  props: ["tracks"],
};
</script>


<style lang="scss">
.canciones td {
  cursor: pointer;
}
.track-img {
  width: 5%;
}
.track-title {
  width: 40%;
  // overflow: hidden;
  // white-space: nowrap;
}
</style>
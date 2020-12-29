<template>
    <ul class="artist-comments">
      <li
        v-for="data in comments"
        v-bind:key="data.id"
        class="row"
      >
      <img class="w-10" v-if="data.author" :src="data.author.picture_small" :alt="data.author.name">
      <span class="w-90 pl-3" v-if="data.author">{{data.author.name}}:</span>
      <span class="col-12 pt-3 px-0" v-if="data.text">{{data.text}}</span>
      
      </li>
    </ul>
</template>

<script>
export default {
  name: "ArtistComments",
  props: ["comments"],
};
</script>


<style lang="scss">
.artist-comments {
  list-style-type: none;
  padding-left: 0;
  font-size: 12px;
  li {
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 10px;
    box-shadow: 0px 0px 34px -27px rgba(0,0,0,0.75);
    border-radius: 5px;
    padding: 10px;
    ::first-letter {
      text-transform: uppercase;
    }
  }
  img {
    width: 30px;
    border-radius: 50%;
  }

}
</style>
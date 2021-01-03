<template>
  <div id="searchBox">
    <form @submit.prevent="onSubmit">
      <button name="search" type="submit" class="fas fa-search">
        <fa-icon icon="search" />
         <span class="sr-only">Buscar</span>
      </button>
      <label for="inputSearch" class="sr-only">Buscar</label>
      <input
        type="text"
        id="inputSearch"
        name="inputSearch"
        class="form-control"
        placeholder="Buscar"
        v-model="inputSearch"
        required
      />
    </form>
  </div>
</template>


<script>
export default {
  name: "SearchBar",
  methods: {
    onSubmit() {
      this.$router.push({ path: "/search", query: { q: this.inputSearch } }, () => {});
    },
  },
  data() {
    return {
      inputSearch: "",
      
    };
  },
};
</script>

<style lang="scss">
#searchBox {
  margin: 0 10px 0 10px;
  padding: 7px;
  border-radius: 10px;

  form {
    display: flex;
    align-items: center;
    button {
      border: none;
      background: none;
      height: 100%;
      :hover {
        color: #aaaaaa;
      }
    }
    input {
      border: none;
      width: 80%;
    }
  }
}
</style>
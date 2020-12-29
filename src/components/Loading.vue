<template>
  <div class="d-flex justify-content-center mx-auto">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "Loading",
  data() {
    return {};
  },
};
</script>


<style lang="scss">
.spinner-border {
  width: 4rem !important;
  height: 4rem !important;
  color: $blue;
}
</style>
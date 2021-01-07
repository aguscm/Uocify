<template>
  <main class="page-notfound">
    <h1 class="main-title">Página no encontrada</h1>

    <router-link to="/"> Volver al inicio </router-link>
  </main>
</template>

<script>
export default {
  //Título de la página
  metaInfo() {
    return {
      title: 'Página no encontrada',
      titleTemplate: "%s - Uocify",
    };
  },
  name: "NotFound",
};
</script>


<style lang="scss" >
.page-notfound {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;

  .icon-sad {
    width: 100px;
    margin-bottom: 20px;
  }
}
</style>
<template>
  <div id="app">
    <app-header />
    <div class="app-container container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";


export default {
  name: "App",
  metaInfo: {
    title: 'Uocify'
  },
  components: {
    AppHeader,
  },
};
</script>

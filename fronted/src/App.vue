<template>
  <div id="app">
    <navegacion></navegacion>
    <div class="contenido">
     <router-view />
     </div>
  </div>
</template>
<script>
import Navegacion from './components/Navegacion.vue'
export default {
  name: "app",
  components:{
    Navegacion

  }
}
</script>
<style>
</style>

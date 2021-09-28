<template>
  <div class="home">
    <Inicio/>
    <h2 class="text-center"> Gracias por Visitarnos!!</h2>
    <h2> Incidentes Reportados en las ultimas 72 horas..</h2>
    <Mensaje/>
    <Cards/> 
    <Cards/> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Inicio from "@/components/Inicio.vue";

import Mensaje from "@/components/Mensaje.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,Inicio,Mensaje,Cards,
  },
};
</script>
<style lang="scss" scoped>

</style>

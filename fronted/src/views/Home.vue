<template>
  <div class="home">
    <div>
      <Inicio />
      <h2 class="text-center">Gracias por Visitarnos!!</h2>
      <h2>Incidentes Reportados en las ultimas 72 horas..</h2>
      <Mensaje />
    </div>
    <div>
      <div >
      <Cards v-for="(item, i) in elements" :key="i" class=" float" max-width="500"/>
    </div>
    </div>
    
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
  data: () => ({
    elements: [
      { name: "Elemento 1", id: 1 },
      { name: "Elemento 2", id: 2 },
      { name: "Elemento 3", id: 3 },
      { name: "Elemento 1", id: 1 },
      { name: "Elemento 2", id: 2 },
      { name: "Elemento 3", id: 3 },
    ],
  }),
  components: {
    HelloWorld,
    Inicio,
    Mensaje,
    Cards,
  },
};
</script>
<style lang="scss" scoped>
</style>

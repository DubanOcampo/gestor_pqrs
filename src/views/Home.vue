<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Inicio/>
    <h2> Gracias por Visitarnos!!</h2>
    <h2> Incidentes Reportados en las ultimas 72 horas..</h2>
    <Mensaje/>
    <Cards/> 
    <Cards/> 
    
    <Login/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Inicio from "@/components/Inicio.vue";
import Login from "@/components/Login.vue";
import Mensaje from "@/components/Mensaje.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,Inicio,Login,Mensaje,Cards,
  },
};
</script>

<template>
  <ModalCiudad class="modal" />
  <div class="home">
    <h2>Estar aqui es mejor</h2>
    <router-link :to="{name:'about'}" class="Boton">MENU</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalCiudad from "@/components/ModalCiudad.vue";
export default {
  name: 'HomeView',
  components: {ModalCiudad},
}
</script>

<style scoped>
.home{
  background-image: url('@/assets/Fondo.jpg');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  font-family: 'Ubuntu', sans-serif;

}

.modal{
  position: fixed;
  margin-left: 30%;
  margin-top: 20%;
/*  */
}
.Boton{
  text-decoration: none;
  background-color: rgb(216, 118, 7);
  color: white;
  padding: 20px;
  border-radius: 20px;
  font-family: 'Ubuntu', sans-serif;

}
@media screen and (max-width:500px){
  .home{
    background-image: url('@/assets/Fondo.jpg');
    background-size: 500px 890px;
    background-repeat: no-repeat;
  }
  .modal{
    width: 300px;
    height: 200px;
    margin-left: 13%;
    margin-top: 50%;
  }
}
</style>

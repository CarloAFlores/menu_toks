<template>
<!--Se utlizo un componente para la creacion del modal -->
  <ModalCiudad class="modal" />
  <div class="home">
    <h2>Estar aqui es mejor</h2>
<!--Al pulsar el boton por ahora nos mandara a una direccion sin contenido -->
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
/* En este caso se utilizo el diplay en direccion de columna
y posteriormente se ajusto para que la informacion quedara en 
un  espacio centrado */
.home{
  background-image: url('@/assets/Fondo.jpg');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  font-family: 'Ubuntu', sans-serif;
  color: white;

}
/*El componente importado tambien se le asigno una clase
para que este pueda seguir al usuario*/
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
/*Por ultimo tenemos las confiduraciones para dispositivos moviles
donde se modifico casi en su mayoria los tamaños*/
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

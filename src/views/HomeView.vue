<template>
<!--Se utlizo un componente para la creacion del modal -->
  <ModalCiudad class="modal" />
  <div class="home">
    <img src="https://menugrg.com.mx:7443/recs_marcas/logo_toks.png" alt="" class="logo">
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
  margin-top: 0px;
  background: linear-gradient(60deg,rgba(0,0,0,.726),rgba(0,0,0,.384) 0,rgba(3,3,3,.705)), url(https://menugrg.com.mx:7443/recs_marcas/fondo_home.jpg);
  background-size:cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  font-family: 'Ubuntu', sans-serif;
  color: white;
}

.logo{
    width: 250px;
    height: 200px;
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
  background-color:#db6500;
  color: white;
  padding: 20px;
  border-radius: 20px;
  font-family: 'Ubuntu', sans-serif;
  transition: cubic-bezier(0.4, 0, .2,1);
  box-shadow: 0 3px 6px rgba(0,0,0,.69);
  border-radius: 27px;
  opacity: 1;

}
/*Por ultimo tenemos las confiduraciones para dispositivos moviles
donde se modifico casi en su mayoria los tamaños*/
@media screen and (max-width:500px){
  .home{
    
    background: linear-gradient(60deg,rgba(0,0,0,.726),rgba(0,0,0,.384) 0,rgba(3,3,3,.705)), url(https://menugrg.com.mx:7443/recs_marcas/fondo_home.jpg);
    background-size:25rem 60rem;
    background-repeat: no-repeat;
  }
  .modal{
    width: 300px;
    height: 200px;
    margin-left:10%;
    margin-top: 50%;
  }
  .logo{
    width: 180px;
    height: 150px;
  }
}
</style>

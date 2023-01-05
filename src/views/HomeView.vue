<template>
<!--Se utlizo un componente para la creacion del modal -->
  <ModalCiudad class="modal" />
  <div class="home">
    <div class="homedos">
    <img src="https://menugrg.com.mx:7443/recs_marcas/logo_toks.png" alt="" class="logo">
    <h2>Estar aqui es mejor</h2>
<!--Al pulsar el boton por ahora nos mandara a una direccion sin contenido -->
    <router-link :to="{name:'about'}" class="Boton">MENU</router-link>
    </div>
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
  background: linear-gradient(60deg,rgba(0,0,0,.726),rgba(0,0,0,.384) 0,rgba(3,3,3,.705)), url(https://menugrg.com.mx:7443/recs_marcas/fondo_home.jpg);
  background-size:cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
  color: white;
  position:static;
  height: 46rem;
}

.homedos{
  width: 20rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
.Boton:hover{
  background-color:#fa9b47;
  transition: 1s;
}
/*Por ultimo tenemos las confiduraciones para dispositivos moviles
donde se modifico casi en su mayoria los tamaños*/
@media screen and (max-width:500px){
  .home{
    background: linear-gradient(60deg,rgba(0,0,0,.726),rgba(0,0,0,.384) 0,rgba(3,3,3,.705)), url(https://menugrg.com.mx:7443/recs_marcas/fondo_home.jpg);
    background-size:30rem 70rem;
    background-repeat: no-repeat;
    height: 55rem;
    width: 30rem;
  }
  .modal{
    width: 300px;
    height: 200px;
    margin-left:1%;
    margin-top: 80%;
  }
  .logo{
    width: 180px;
    height: 150px;
  }
}
</style>

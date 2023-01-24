<template>
  <main>
    <ModalCiudad v-if="popupTriggers.buttonTrigger"
    :TogglePopup="()=>TogglePopup('buttonTrigger')">
    </ModalCiudad>
  </main>

   <div class="home">
    <div class="logo_eslogan_boton">
      <img src="https://menugrg.com.mx:7443/recs_marcas/logo_toks.png" alt="" class="logo">
      <p class="eslogan">Estar aquí, está mejor.</p>
      <router-link class="boton_menu" :to="{path:'about'}"><p>MENU</p></router-link>
    </div>

  <div class="extra">
    <button @click="extra_modal=!extra_modal" class="abri"><img src="@/assets/menu.svg" alt="el_pepe"></button>
    <transition name="fade">
      <div v-if="extra_modal">
        <div class="contenedor_modal_extra">
          <div class="traduccion"><div class="contenedor_traduccion"><img src="@/assets/idiom.svg" alt="traductor"><p>Idioma</p></div></div>
          <div class="pago"><div class="contenedor_pago"><img src="@/assets/wallet.svg" alt="pago"> <p>Forma de pago</p></div></div>
          <div class="cerrar_contendor" @click="extra_modal=false"><img src="@/assets/arrow_left.svg" alt=""></div>
        </div>
      </div>
    </transition>
  </div>
  </div> 

</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import ModalCiudad from "@/components/ModalCiudad.vue";
import Opciones_ciudades from "@/components/Opciones_ciudades.vue";
import font from "@/common/font.css";
export default {
  name: "HomeView",
  components: { ModalCiudad,Opciones_ciudades },
  setup() {
    const extra_modal = ref(false);
    const popupTriggers = ref({
      buttonTrigger: true
    });
    const TogglePopup = (trigger)=>{
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
    return { ModalCiudad, popupTriggers,TogglePopup,extra_modal};
  },
};
</script>

<style lang="scss" scoped>
.home{
  background:linear-gradient(rgba(12, 10, 5, 0.541), rgba(5, 7, 12, 0.541)) ,url("https://menugrg.com.mx:7443/recs_marcas/fondo_home.jpg");
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position-y: -20rem;
  background-position-x: -1px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.logo_eslogan_boton{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 20rem;
  width: 20rem;
  margin-top: 3.5rem;
  margin-left: 1rem;
  .logo{
    width: 180px;
    height: 160px;
    transition: all .5s cubic-bezier(.645,.045,.355,1)
  }
  .eslogan{
    font-family:cocogoose-pro;
    color: white;
    font-size: 18.5px;
    font-weight: bold;
  }
  .boton_menu{
    width: 7rem;
    height: 2rem;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
    font-weight:500;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(rgb(245, 130, 32) 0%, rgb(219, 101, 0) 100%) 0% 0%;
    box-shadow: 0 3px 6px rgba(0,0,0,.69);
    text-decoration: none;
  }
}
.extra{
  position: fixed;
  left: 2.3rem;
  top: 2rem;
  .abri{
    background: rgb(61, 54, 54);
    border-radius:  50%;
    border: none;
  }
  .abri img{
    width: 2rem;
    height: 2rem;
  }
  .fade-enter-from,
  .fade-leave-to{
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 1s ease;
  }
.contenedor_modal_extra{
    background: linear-gradient(180deg,#2f2f30,#262628);
    position: fixed;
    width: 17rem;
    height: 100vh;
    margin-top: -4.3rem;
    left: -1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    .traduccion{
      height: 3rem;
      margin-top: 2.5rem;
      .contenedor_traduccion{
        margin-left: 2rem;
        height: 2.5rem;
        display: flex;
        width: 15rem;
        justify-content: initial;
        align-items: center;
        cursor: pointer;
      }
      .contenedor_traduccion p {
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        font-size: .9rem;
        width: 4rem;
        color: white;
      }
    }
    .pago{
      height: 3rem;
      .contenedor_pago{
        margin-left: 2rem;
        height: 2.5rem;
        display: flex;
        width: 15rem;
        align-items: center;
        cursor: pointer;

      }
      .contenedor_pago p{
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        font-size: .9rem;
        width: 7rem;
        color: white;
      }
    }
    .cerrar_contendor{
      width: 4rem;
      cursor: pointer;
      margin-left: 12rem;
      margin-top: 13rem;
    }
    .cerrar_contendor img{
      width: 3rem;
      height: 3rem;
    }
}
}

@media (min-width: 320px) and (max-width: 399px){
  .logo_eslogan_boton{
  .logo{
    width: 180px;
    height: 150px;
    }
    }
    .home{
      background-size: cover;
      background-position-x: -9rem;
      background-position-y: -.1rem;
    }
}
@media (min-width: 400px) and (max-width: 480px){

  .logo_eslogan_boton{
  .logo{
    width: 180px;
    height: 150px;
  }
  }
      .home{
      background-size: cover;
      background-position-x: -13rem;
      background-position-y: 0rem;
    }

}

</style>

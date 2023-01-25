<template>
  <main>
    <ModalPromocion v-if="popupTriggers.buttonTrigger"
    :TogglePopup="()=>TogglePopup('buttonTrigger')">
    </ModalPromocion>  
  </main>
  <div class="contenedor">
    <div class="titulo"><h2>¡Bienvenido!</h2></div>
  <Carousel :itemsToShow="valor" :wrapAround="true" :transition="500" v-if="valores()">

    <Slide class="carousel__item item1" @click="() =>ToggleMenu('AbrirModal')">
      <div class="menu_del_dia">
        <img src="https://menugrg.com.mx:7443/menudigital/categorias/MENU_INCLUYE_02.1606704382.png" class="img_menu_del_dia">
      </div>
    </Slide>

    <Slide class="carousel__item item2" @click="() =>ToggleDesayuno('AbrirSegundoModal')">
      <div class="desayunos">
        <img src="https://menugrg.com.mx:7443/menudigital/categorias/Desayunos.1592631499.png" class="img_desayunos">
      </div>
    </Slide>
    <Slide class="carousel__item item3" @click="() =>ToggleComida('AbrirTercerModal')">
      <div class="comidas">
        <img src="https://menugrg.com.mx:7443/menudigital/categorias/Comidas.1592631529.png" class="img_comidas">
      </div>
    </Slide>
    <Slide class="carousel__item item4" @click="() =>ToggleCena('AbrirCuartoModal')">
      <div class="cenas">
        <img src="https://menugrg.com.mx:7443/menudigital/categorias/Cenas.1592631541.png" class="img_cenas">
      </div>
    </Slide>
    <Slide class="carousel__item item5" @click="() =>ToggleInfantil('AbrirQuintoModal')">
      <div class="infantil">
        <img src="https://menugrg.com.mx:7443/menudigital/categorias/Infantil.1592631549.png" class="img_infantil">
      </div>
    </Slide>
    <Slide class="carousel__item item6">6</Slide>
  </Carousel>
  </div>  

  <main>
    <ModalMenuDelDia v-if="popupMenu.AbrirModal"
    :ToggleMenu="()=>ToggleMenu('AbrirModal')">
    </ModalMenuDelDia>

    <ModalDesayunos v-if="popDesayuno.AbrirSegundoModal"
    :ToggleDesayuno="()=>ToggleDesayuno('AbrirSegundoModal')">
    </ModalDesayunos> 

    <ModalComidas v-if="popComida.AbrirTercerModal"
    :ToggleComida="() =>ToggleComida('AbrirTercerModal')">
    </ModalComidas>

    <ModalCenas v-if="popCena.AbrirCuartoModal"
    :ToggleCena="()=>ToggleCena('AbrirCuartoModal')">
    </ModalCenas> 

    <ModalInfantil v-if="popInfantil.AbrirQuintoModal"
    :ToggleInfantil="()=>ToggleInfantil('AbrirQuintoModal')">
    </ModalInfantil>


  </main>
</template>

<script>
import ModalPromocion from "@/components/ModalPromocion.vue";
import ModalMenuDelDia from "@/components/ModalMenuDelDia.vue";
import ModalDesayunos from "@/components/ModalDesayunos.vue";
import ModalComidas from "@/components/ModalComidas.vue";
import ModalCenas from "@/components/ModalCenas.vue";
import ModalInfantil from "@/components/ModalInfantil.vue";
import { ref } from '@vue/reactivity';

import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { onMounted } from '@vue/runtime-core';


export default {
  components:{ModalPromocion,ModalMenuDelDia,ModalDesayunos,
  ModalComidas,ModalCenas,ModalInfantil,Carousel,Slide,Pagination},
  setup(){
    const extra_modal = ref(false);
    const popupTriggers = ref({
      buttonTrigger:true
    });
    const TogglePopup = (trigger) =>{
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
//-------------------------------------------------------------------
    const popupMenu= ref({
      AbrirModal:false
    });
    const ToggleMenu = (verdad) =>{
      popupMenu.value[verdad] = !popupMenu.value[verdad]
    } 
//-------------------------------------------------------------------
    const popDesayuno = ref({
      AbrirSegundoModal:false
    });
    const ToggleDesayuno = (verdad2) =>{
      popDesayuno.value[verdad2] = !popDesayuno.value[verdad2]
    }
//------------------------------------------------------------------
    const popComida = ref({
      AbrirTercerModal:false
    });
    const ToggleComida = (verdad3) =>{
      popComida.value[verdad3] = !popComida.value[verdad3]
    }    
//------------------------------------------------------------------
    const popCena = ref({
      AbrirCuartoModal:false
    });
    const ToggleCena = (verdad4) =>{
      popCena.value[verdad4] = !popCena.value[verdad4]
    }
//-----------------------------------------------------------------
    const popInfantil = ref({
      AbrirQuintoModal:false
    });
    const ToggleInfantil = (verdad5) =>{
      popInfantil.value[verdad5] = !popInfantil.value[verdad5]
    }
//----------------------------------------------------------------
    //innerWidth < 399 || innerWidth < 499
    const valores=()=>{
      if(window.innerWidth < 399 || window.innerWidth < 499){
        console.log("hola")
        const resultado =1.6
        return resultado
      }else{
        console.log('mundo')
        const resultadoDos=5
        return resultadoDos
      }
    } 
    const valor = valores();
//----------------------------------------------------------------
//----------------------------------------------------------------
    return{ModalPromocion, popupTriggers, TogglePopup, extra_modal,
    ModalMenuDelDia, popupMenu,ToggleMenu,
    ModalDesayunos, popDesayuno,ToggleDesayuno,
    ModalComidas, popComida, ToggleComida,
    ModalCenas, popCena, ToggleCena,
    ModalInfantil, popInfantil, ToggleInfantil,
    valor,valores
    }
  }

}
</script>

<style lang="scss" scoped>
.carousel__slide {
  padding: 1px;
  margin-top: 3rem;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.5);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.5);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(.5);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(.5);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
.carousel__item{
  border: 1px solid black;
  background-color: greenyellow;
  width: 10rem;
  height: 28rem;
  border-radius: 20px;
}
.contenedor{
  background: url('https://menugrg.com.mx:7443/recs_marcas/fondo_cate.jpg');
  position: fixed;
  background-size: contain;
  width: 100vw;
  height: 100vh;
  .titulo{
    height: 3rem;
    font-family: Lifehack;
    color: #f58220;
    font-size: 1.8rem;
  }
  .item1{
    background: linear-gradient(100deg,rgba(0,0,0,.576),rgba(0,0,0,.576)), url('https://menugrg.com.mx:7443/menudigital/categorias/AL_ESTILO_DEL_CHEF.1672639416.jpg');
    background-size: cover;
    background-position-x: -10.5rem;
    transition: all .5s cubic-bezier(.645,.045,.355,1);
    cursor: pointer;
    .menu_del_dia{
      height: 7rem;
      width: 15rem;
      
      .img_menu_del_dia{
        width: 15rem;
        height: 13rem;
        margin-top: -4rem;
        transition: all .5s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
  .item2{
    background: linear-gradient(100deg,rgba(0,0,0,.576),rgba(0,0,0,.576)),url('https://menugrg.com.mx:7443/menudigital/categorias/Chilaquiles_Pollo.1604202038.jpg');
    background-size: cover;
    background-position-x: -5rem;
    transition: all .5s cubic-bezier(.645,.045,.355,1);
    cursor: pointer;
    .desayunos{
      height: 7rem;
      width: 15rem;
      
      .img_desayunos{
        transition: all .5s cubic-bezier(.645,.045,.355,1);
        width: 15rem;
        height: 5rem;

      }
    }
  }
  .item3{
    background: linear-gradient(100deg,rgba(0,0,0,.576),rgba(0,0,0,.576)),url('https://menugrg.com.mx:7443/menudigital/categorias/1165_21_04_FILETE_RES_TAMPIQUENA.1618611913.jpg');
    background-size: cover;
    background-position-x: -5rem;
    transition: all .5s cubic-bezier(.645,.045,.355,1);
    cursor: pointer;
    .comidas{
      height: 7rem;
      width: 15rem;
      
      .img_comidas{
        width: 17rem;
        height: 7rem;
        margin-left: -1rem;
        transition: all .5s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
  .item4{
    background: linear-gradient(100deg,rgba(0,0,0,.576),rgba(0,0,0,.576)),url('https://menugrg.com.mx:7443/menudigital/categorias/Club_Sandwich.1604202054.jpg');
    background-size: cover;
    background-position-x: -5.5rem;
    cursor: pointer;
    transition: all .5s cubic-bezier(.645,.045,.355,1);
    .cenas{
      height: 7rem;
      width: 15rem;
      
      .img_cenas{
        width: 17rem;
        height: 7rem;
        margin-left: -1rem;
        transition: all .5s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
  .item5{
    background: linear-gradient(100deg,rgba(0,0,0,.576),rgba(0,0,0,.576)),url('https://menugrg.com.mx:7443/menudigital/categorias/2112_22_06_FOTOS_MENU_DIG_DELIVERY_JULIO_UBER_550x440_CHOCO_HOTCAKES.1662400976.jpg');
    background-size: cover;
    background-position-x: -7rem;
    cursor: pointer;
    transition: all .5s cubic-bezier(.645,.045,.355,1);
    .infantil{
      height: 7rem;
      width: 15rem;
      
      .img_infantil{
        width: 17rem;
        height: 7rem;
        margin-left: -1rem;
        transition: all .5s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
  .item6{
    background: linear-gradient(100deg,rgba(0,0,0,.576),rgba(0,0,0,.576)),url('https://menugrg.com.mx:7443/menudigital/Experiencias/Experiencia-TOKS.jpg');
    background-size: cover;
    cursor: pointer;
  }
}

@media (min-width: 320px) and (max-width: 399px){
  .contenedor{
    background-size: cover;
    .item1{
      background-position-x: -20rem;
      .menu_del_dia{
        .img_menu_del_dia{
          width: 12rem;
          height: 12rem;
          margin-top: -4rem;
        }
      }
    }
    .item2{
      background-position-x: -15rem;
      .desayunos{
        .img_desayunos{
          width: 10rem;
          height: 4.5rem;
        }
      }
    }
    .item3{
      background-position-x: -13rem;
      .comidas{
        .img_comidas{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
    .item4{
      background-position-x: -10rem;
      .cenas{
        .img_cenas{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
    .item5{
      background-position-x: -13rem;
      .infantil{
        .img_infantil{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
  }
  .carousel__item{
    height: 42rem;
    margin-top: 1rem;
  }

} 
@media (min-width: 400px) and (max-width: 480px){
 .contenedor{
    background-size: cover;
    .item1{
      background-position-x: -22rem;
      .menu_del_dia{
        .img_menu_del_dia{
          width: 15rem;
          height: 15rem;
          margin-top: -4rem;
        }
      }
    }
    .item2{
      background-position-x: -13rem;
      .desayunos{
        .img_desayunos{
          width: 15rem;
          height: 5rem;
        }
      }
    }
    .item3{
      background-position-x: -15rem;
      .comidas{
        .img_comidas{
          width: 15rem;
          height: 5rem;
          margin-left: .2rem;
        }
      }
    }
    .item4{
      background-position-x: -15rem;
      .cenas{
        .img_cenas{
          width: 15rem;
          height: 5rem;
          margin-left: .2rem;
        }
      }
    }
    .item5{
      background-position-x: -15rem;
      .infantil{
        .img_infantil{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
  }
  .carousel__item{
    height: 45rem;
    margin-top: 1rem;
  }
}
@media(min-width: 374px) and (max-width: 376px){
   .contenedor{
    background-size: cover;
    .item1{
      .menu_del_dia{
        .img_menu_del_dia{
          width: 12rem;
          height: 12rem;
          margin-top: -4rem;
        }
      }
    }
    .item2{
      .desayunos{
        .img_desayunos{
          width: 10rem;
          height: 4.5rem;
        }
      }
    }
    .item3{
      .comidas{
        .img_comidas{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
    .item4{
      .cenas{
        .img_cenas{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
    .item5{
      .infantil{
        .img_infantil{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
  }
  .carousel__item{
    height: 34rem;
    margin-top: 1rem;
  }
}
@media(min-width: 359px) and (max-width: 361px){
   .contenedor{
    background-size: cover;
    .item1{
      background-position-x: -15rem;
      .menu_del_dia{
        .img_menu_del_dia{
          width: 12rem;
          height: 12rem;
          margin-top: -4rem;
        }
      }
    }
    .item2{
      background-position-x: -8rem;
      .desayunos{
        .img_desayunos{
          width: 10rem;
          height: 4.5rem;
        }
      }
    }
    .item3{
      background-position-x: -8rem;
      .comidas{
        .img_comidas{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
    .item4{
      background-position-x: -6rem;
      .cenas{
        .img_cenas{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
    .item5{
      background-position-x: -13rem;
      .infantil{
        .img_infantil{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
  }
  .carousel__item{
    height: 34rem;
    margin-top: 1rem;
  }

}
@media(min-width: 374px) and (max-width:376px){
.contenedor{
    background-size: cover;
    .item1{
      background-position-x: -15rem;
      .menu_del_dia{
        .img_menu_del_dia{
          width: 12rem;
          height: 12rem;
          margin-top: -4rem;
        }
      }
    }
    .item2{
      background-position-x: -10rem;
      .desayunos{
        .img_desayunos{
          width: 10rem;
          height: 4.5rem;
        }
      }
    }
    .item3{
      background-position-x: -10rem;
      .comidas{
        .img_comidas{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
    .item4{
      background-position-x: -8rem;
      .cenas{
        .img_cenas{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
    .item5{
      background-position-x: -10rem;
      .infantil{
        .img_infantil{
          width: 13rem;
          height: 4.5rem;
          margin-left: .2rem;
        }
      }
    }
  }
  .carousel__item{
    height: 34rem;
    margin-top: 1rem;
  }


}
</style>
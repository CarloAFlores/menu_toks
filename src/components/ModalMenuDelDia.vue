<template>
  <div class="popup">
    <div class="header">

      <div class="cerrar_categoria">
        <img src="@/assets/arrow_left.svg" class="flecha_cerrar" @click="ToggleMenu()">
        <div class="titulo"><p>Menu del dia</p></div>
      </div>

      <div class="menu_dia_img"></div>

    </div>

    <div class="body">
      <div class="item1">
        <div class="titulo"><p>DESAYUNOS DEL DIA</p></div>
        <div class="INFORMACION" v-for="menu in menus.slice(0,1)" :key="menu">
        <div class="informacion1" v-for="categorias in menu.categoria" :key="categorias">
          <CardDesayunosDia :categorias="categorias"/>
        </div>
        </div>
      </div>

      <div class="item2">
        <div class="titulo"><p>ESPECIALIDAD DEL DIA</p></div>
        <div class="INFORMACION" v-for="menuDos in menus.slice(1,2)" :key="menuDos">
        <div class="informacion1" v-for="categoriaDos in menuDos.categoria" :key="categoriaDos">
          <CardEspecialidadDia :categoriaDos="categoriaDos"/>
        </div>
        </div>
      </div>

      <div class="item3">
        <div class="titulo"><p>ESPECIALIDAD DE TEMPORADA</p></div>
        <div class="INFORMACION" v-for="menuTres in menus.slice(2,3)" :key="menuTres">
        <div class="informacion1" v-for="categoriaTres in menuTres.categoria" :key="categoriaTres">
          <CardEspecialidadTemporada :categoriaTres="categoriaTres"/>
        </div>
        </div>
      </div>

      <div class="item4">
        <div class="titulo"><p>COMIDAS DEL DIA</p></div>
        <div class="INFORMACION" v-for="menuCuatro in menus.slice(3,4)" :key="menuCuatro">
        <div class="informacion1" v-for="categoriaCuatro in menuCuatro.categoria" :key="categoriaCuatro">
          <CardComidaDia :categoriaCuatro="categoriaCuatro"/>
        </div>
        </div>
      </div>

      <div class="item5">
        <div class="titulo"><p>NOCHES TOKS</p></div>
        <div class="INFORMACION_DOS" v-for="menuCinco in menus.slice(4,5)" :key="menuCinco">
        <div class="informacion2" v-for="categoriaCinco in menuCinco.categoria" :key="categoriaCinco">
          <CardNochesToks :categoriaCinco="categoriaCinco"/>
        </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import CardDesayunosDia from "@/components/CardDesayunosDia.vue";
import CardEspecialidadDia from "@/components/CardEspecialidadDia.vue";
import CardEspecialidadTemporada from "@/components/CardEspecialidadTemporada.vue";
import CardComidaDia from "@/components/CardComidaDia.vue";
import CardNochesToks from "@/components/CardNochesToks.vue";
export default {
  components:{CardDesayunosDia,CardEspecialidadDia,CardEspecialidadTemporada,CardComidaDia,CardNochesToks},
  props:['ToggleMenu'],
  setup(){
    const store = useStore()
    const menus = computed(() =>{
      return store.state.listado
    });
    onMounted(()=>{
      store.dispatch("consultaPlatillos")
    })
    return{
      menus
    }
  }

}
</script>

<style lang="scss" scoped>
.popup{
  background-color: aqua;
  position: fixed;
  width: 90rem;
  height: 41rem;
  .header{
    background-color: brown;
    transition: all .5s cubic-bezier(.645,.045,.355,1);
    .cerrar_categoria{
      display: flex;
      align-items: center;
      background:linear-gradient(rgb(47, 47, 48) 0%, rgb(38, 38, 40) 100%) 0% 0%;
      .flecha_cerrar{
        width: 4rem;
        height: 4rem;
        cursor: pointer;
      }
      .titulo{
        background: linear-gradient(rgb(47, 47, 48) 0%, rgb(38, 38, 40) 100%) 0% 0%;
        box-shadow: 0px 1px 2px rgba(255, 255, 255, 0.664);
        width: 20rem;
        height: 2.5rem;
        font-family: Lifehack;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #f58220;
        font-size: 1.5rem;
        border-radius: 20px;
        margin-left: 28rem;
      }
    }
    .menu_dia_img{
      background: url('https://menugrg.com.mx:7443/menudigital/categorias/AL_ESTILO_DEL_CHEF.1672639416.jpg');
      background-size: cover;
      background-position-y: -22rem;
      height: 15rem;
    }
  }
  ::-webkit-scrollbar{
    height: 7px;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb{
    background: gray;
    border-radius: 20px;
  }

  .body{
    background: url('https://menugrg.com.mx:7443/recs_marcas/fondo_cate.jpg');
    width: 83.5rem;
    height: 22rem;
    overflow-y: scroll;
    transition: all .5s cubic-bezier(.645,.045,.355,1);
    .item1{
      border: 2px solid white;
      height: 15rem;
    }
    .item2{
      border: 2px solid white;
      height: 15rem;
    }
    .item3{
      border: 2px solid white;
      height: 15rem;
    }
    .item4{
      border: 2px solid white;
      height: 15rem;
    }
    .item5{
      border: 2px solid white;
      height: 15rem;
    }
    .titulo{
      background-color: #6d451b;;
      color: white;
      text-align: center;
      font-family: Lifehack;
      font-size: 1.3rem;
      width: 20rem;
      border-radius: 20px;
    }
    .informacion{
        margin-top: 1rem;
        background: chartreuse;
        width: 82.2rem;
        height: 11.5rem;
    }
    .INFORMACION{

      height: 13rem;
      display: flex;
      .informacion1{
        margin-top: 1rem;

        width: 82.2rem;
        height: 11.5rem;
        align-items: center;
        display: flex;
        justify-content: space-evenly;
      }
    }
    
    .INFORMACION_DOS{

      height: 13rem;
      display: flex;
      overflow-x: scroll;
      .informacion2{
        margin-top: 1rem;
        width: 82.2rem;
        height: 11.5rem;
        align-items: center;
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
}
@media (min-width: 320px) and (max-width: 399px){
  .popup{
    background-color: aqua;
    position: fixed;
    width: 90rem;
    height: 52rem;
    .header{
      .cerrar_categoria{
        width:24rem;
        .titulo{
          margin-left: 4rem;
          width: 10rem;
        }
      }
      .menu_dia_img{
        width: 30rem;
        background-position-y: -3rem;
        background-position-x: -3rem;
      }
    }
    
    .body{
      height: 33rem;
      width: 25rem;
      .INFORMACION{
        overflow-x: scroll;
      }
    }
  }
} 
@media (min-width: 400px) and (max-width: 480px){
    .popup{
    background-color: aqua;
    position: fixed;
    width: 90rem;
    height: 36.5rem;
    .header{
      .cerrar_categoria{
        width:30rem;
        .titulo{
          margin-left: 5rem;
          width: 10rem;
        }
      }
      .menu_dia_img{
        width: 30rem;
        background-position-y: -3rem;
        background-position-x: -3rem;
      }
    }
    
    .body{
      height: 36.5rem;
      width: 27rem;
      .INFORMACION{
        overflow-x: scroll;
      }
    }
  }
}

@media(min-width: 374px) and (max-width: 376px){
    .popup{
    background-color: aqua;
    position: fixed;
    width: 90rem;
    height: 52rem;
    .header{
      .cerrar_categoria{
        width:24rem;
        .titulo{
          margin-left: 4rem;
          width: 10rem;
        }
      }
      .menu_dia_img{
        width: 30rem;
        background-position-y: -3rem;
        background-position-x: -3rem;
      }
    }
    
    .body{
      height: 22.7rem;
      width: 25rem;
      .INFORMACION{
        overflow-x: scroll;
      }
    }
  }

}

@media(min-width: 359px) and (max-width: 361px){
    .popup{
    background-color: aqua;
    position: fixed;
    width: 90rem;
    height: 52rem;
    .header{
      .cerrar_categoria{
        width:24rem;
        .titulo{
          margin-left: 4rem;
          width: 10rem;
        }
      }
      .menu_dia_img{
        width: 30rem;
        background-position-y: -3rem;
        background-position-x: -3rem;
      }
    }
    
    .body{
      height: 28rem;
      width: 25rem;
      .INFORMACION{
        overflow-x: scroll;
      }
    }
  }

}
</style>
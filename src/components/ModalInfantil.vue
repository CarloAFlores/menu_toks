<template>
  <div class="popup">
    <div class="header">

      <div class="cerrar_categoria">
        <img src="@/assets/arrow_left.svg" class="flecha_cerrar" @click="ToggleInfantil()">
        <div class="titulo"><p>Infantil</p></div>
      </div>

      <div class="cena_img"></div>

    </div>

    <div class="body">
      <div class="item1">
        <div class="titulo"><p>Desayunos: Servidos de 7:00 a 12:00 horas</p></div>
        <div class="INFORMACION_DOS" v-for="menuVeintisiete in menus.slice(26,27)" :key="menuVeintisiete">
        <div class="informacion2" v-for="categoriaVeintisiete in menuVeintisiete.categoria" :key="categoriaVeintisiete">
          <CardDesayunos :categoriaVeintisiete="categoriaVeintisiete" />
        </div>
        </div>
      </div>

      <div class="item2">
        <div class="titulo"><p>Comidas: Servidos de 12:00 horas al cierre</p></div>
        <div class="INFORMACION_DOS" v-for="menuVeintiocho in menus.slice(27,28)" :key="menuVeintiocho">
        <div class="informacion2" v-for="categoriaVeintiocho in menuVeintiocho.categoria" :key="categoriaVeintiocho">
          <CardComidas :categoriaVeintiocho="categoriaVeintiocho" />
        </div>
        </div>
      </div>

      <div class="item3">
        <div class="titulo"><p>Agrega Diversión</p></div>
        <div class="INFORMACION_DOS" v-for="menuVeintinueve in menus.slice(28,29)" :key="menuVeintinueve">
        <div class="informacion2" v-for="categoriaVeintinueve in menuVeintinueve.categoria" :key="categoriaVeintinueve">
          <CardAgregarDiversion :categoriaVeintinueve="categoriaVeintinueve" />
        </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import CardDesayunos from "@/components/CardDesayunos.vue";
import CardComidas from "@/components/CardComidas.vue";
import CardAgregarDiversion from "@/components/CardAgregarDiversion.vue";
export default {
  components:{CardDesayunos,CardComidas,CardAgregarDiversion},
  props:['ToggleInfantil'],
  setup(){
    const store = useStore()
    const menus = computed(()=>{
      return store.state.listado
    })
    onMounted(()=>{
      store.dispatch('consultaPlatillos')
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
    .cena_img{
      background: url('https://menugrg.com.mx:7443/menudigital/categorias/2112_22_06_FOTOS_MENU_DIG_DELIVERY_JULIO_UBER_550x440_CHOCO_HOTCAKES.1662400976.jpg');
      background-size: cover;
      background-position-y: -30em;
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
    .item6{
      border: 2px solid white;
      height: 15rem;
    }
    .item7{
      border: 2px solid white;
      height: 15rem;
    }
    .item8{
      border: 2px solid white;
      height: 15rem;
    }
    .item9{
      border: 2px solid white;
      height: 15rem;
    }
    .item10{
      border: 2px solid white;
      height: 15rem;
    }
    .item11{
      border: 2px solid white;
      height: 15rem;
    }
    .item12{
      border: 2px solid white;
      height: 15rem;
    }
    .item13{
      border: 2px solid white;
      height: 15rem;
    }
    .item14{
      border: 2px solid white;
      height: 15rem;
    }
    .item15{
      border: 2px solid white;
      height: 15rem;
    }
    .titulo{
      background-color: #6d451b;;
      color: white;
      text-align: center;
      font-family: Lifehack;
      font-size: 1.3rem;
      width: 25rem;
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
    height: 47rem;
    .header{
      .cerrar_categoria{
        width:24rem;
        .titulo{
          margin-left: 4rem;
          width: 10rem;
        }
      }
      .cena_img{
        width: 30rem;
        background-position-y: -3rem;
        background-position-x: -3rem;
      }
    }
    
    .body{
      height: 24rem;
      width: 25rem;
      .INFORMACION{
        overflow-x: scroll;
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
      .cena_img{
        width: 30rem;
        background-position-y: -5rem;
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
      .cena_img{
        width: 30rem;
        background-position-y: -5rem;
        background-position-x: -1rem;
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
      .cena_img{
        width: 30rem;
        background-position-y: -5rem;
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
      .cena_img{
        width: 30rem;
        background-position-y: -5rem;
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
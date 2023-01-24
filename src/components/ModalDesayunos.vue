<template>
  <div class="popup">
    <div class="header">

      <div class="cerrar_categoria">
        <img src="@/assets/arrow_left.svg" class="flecha_cerrar" @click="ToggleDesayuno()">
        <div class="titulo"><p>Desayunos</p></div>
      </div>

      <div class="desayuno_img"></div>

    </div>

    <div class="body">
      <div class="item1">
        <div class="titulo"><p>SABORES DE LA REGION</p></div>
        <div class="INFORMACION" v-for="menuSeis in menus.slice(5,6)" :key="menuSeis">
        <div class="informacion1" v-for="categoriaSeis in menuSeis.categoria" :key="categoriaSeis">
          <CardSaboresRegionUno :categoriaSeis="categoriaSeis" />
        </div>
        </div>
      </div>

      <div class="item2">
        <div class="titulo"><p>CAFES Y BEBIDAS CALIENTES</p></div>
        <div class="INFORMACION_DOS" v-for="menuSiete in menus.slice(6,7)" :key="menuSiete">
        <div class="informacion2" v-for="categoriaSiete in menuSiete.categoria" :key="categoriaSiete">
          <CardCafesBebidasCalientes :categoriaSiete="categoriaSiete" />
        </div>
        </div>
      </div>

      <div class="item3">
        <div class="titulo"><p>JUGOS Y FRUTAS</p></div>
        <div class="INFORMACION" v-for="menuOcho in menus.slice(7,8)" :key="menuOcho">
        <div class="informacion1" v-for="categoriaOcho in menuOcho.categoria" :key="categoriaOcho">
          <CardFrutasJugos :categoriaOcho="categoriaOcho" />
        </div>
        </div>        
      </div>

      <div class="item4">
        <div class="titulo"><p>DESPIERTA TU ANTOJO</p></div>
        <div class="INFORMACION_DOS" v-for="menuNueve in menus.slice(8,9)" :key="menuNueve">
        <div class="informacion2" v-for="categoriaNueve in menuNueve.categoria" :key="categoriaNueve">
          <CardDespiertaAntojo :categoriaNueve="categoriaNueve" />
        </div>
        </div>  
      </div>

      <div class="item5">
        <div class="titulo"><p>HUEVOS Y OMELETTES</p></div>
        <div class="INFORMACION_DOS" v-for="menuDiez in menus.slice(9,10)" :key="menuDiez">
        <div class="informacion2" v-for="categoriaDiez in menuDiez.categoria" :key="categoriaDiez">
          <CardHuevosOmelettes :categoriaDiez="categoriaDiez" />
        </div>
        </div>
      </div>

      <div class="item6">
        <div class="titulo"><p>ALMUERZOS</p></div>
        <div class="INFORMACION" v-for="menuOnce in menus.slice(10,11)" :key="menuOnce">
        <div class="informacion1" v-for="categoriaOnce in menuOnce.categoria" :key="categoriaOnce">
          <CardAlmuerzo :categoriaOnce="categoriaOnce" />
        </div>
        </div>  
      </div>

      <div class="item7">
        <div class="titulo"><p>ENFRIJOLADAS Y CHILAQUILES</p></div>
        <div class="INFORMACION_DOS" v-for="menuDoce in menus.slice(11,12)" :key="menuDoce">
        <div class="informacion2" v-for="categoriaDoce in menuDoce.categoria" :key="categoriaDoce">
          <CardEnfrijoladasChilaquiles :categoriaDoce="categoriaDoce" />
        </div>
        </div>
      </div>

      <div class="item8">
        <div class="titulo"><p>POSTRES</p></div>
        <div class="INFORMACION_DOS" v-for="menuTrece in menus.slice(12,13)" :key="menuTrece">
        <div class="informacion2" v-for="categoriaTrece in menuTrece.categoria" :key="categoriaTrece">
          <CardPostres :categoriaTrece="categoriaTrece" />
        </div>
        </div>
      </div>

      <div class="item9">
        <div class="titulo"><p>TOKS A MANO</p></div>
        <div class="INFORMACION_DOS" v-for="menuCatorce in menus.slice(13,14)" :key="menuCatorce">
        <div class="informacion2" v-for="categoriaCatorce in menuCatorce.categoria" :key="categoriaCatorce">
          <CardToksMano :categoriaCatorce="categoriaCatorce" />
        </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import CardSaboresRegionUno from "@/components/CardSaboresRegionUno.vue";
import CardCafesBebidasCalientes from "@/components/CardCafesBebidasCalientes.vue";
import CardFrutasJugos from "@/components/CardFrutasJugos.vue";
import CardDespiertaAntojo from "@/components/CardDespiertaAntojo.vue";
import CardHuevosOmelettes from "@/components/CardHuevosOmelettes.vue";
import CardAlmuerzo from "@/components/CardAlmuerzo.vue";
import CardEnfrijoladasChilaquiles from "@/components/CardEnfrijoladasChilaquiles.vue";
import CardPostres from "@/components/CardPostres.vue";
import CardToksMano from "@/components/CardToksMano.vue";
export default {
  components:{CardSaboresRegionUno,CardCafesBebidasCalientes,CardFrutasJugos
  ,CardDespiertaAntojo,CardHuevosOmelettes,CardAlmuerzo,CardEnfrijoladasChilaquiles,
  CardPostres, CardToksMano},
  props:['ToggleDesayuno'],
  setup(){
    const store = useStore()
    const menus = computed(()=>{
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
    .desayuno_img{
      background: url('https://menugrg.com.mx:7443/menudigital/categorias/Chilaquiles_Pollo.1604202038.jpg');
      background-size: cover;
      background-position-y: -40rem;
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
      .desayuno_img{
        width: 30rem;
        background-position-y: -10rem;
        background-position-x: -2rem;
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
      .desayuno_img{
        width: 30rem;
        background-position-y: -10rem;
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
      .desayuno_img{
        width: 30rem;
        background-position-y: -10rem;
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
      .desayuno_img{
        width: 30rem;
        background-position-y: -10rem;
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
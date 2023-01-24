<template>
  <div class="popup">
    <div class="header">

      <div class="cerrar_categoria">
        <img src="@/assets/arrow_left.svg" class="flecha_cerrar" @click="ToggleCena()">
        <div class="titulo"><p>CENAS</p></div>
      </div>

      <div class="cena_img"></div>

    </div>

    <div class="body">
      <div class="item1">
        <div class="titulo"><p>ENTRADAS Y TACOS</p></div>
        <div class="INFORMACION_DOS" v-for="menuDieciseis in menus.slice(15,16)" :key="menuDieciseis">
        <div class="informacion2" v-for="categoriaDieciseis in menuDieciseis.categoria" :key="categoriaDieciseis">
          <CardEntradaTacos :categoriaDieciseis="categoriaDieciseis" />
        </div>
        </div> 
      </div>

      <div class="item2">
        <div class="titulo"><p>SOPAS U CALDOS</p></div>
        <div class="INFORMACION" v-for="menuDiecisiete in menus.slice(16,17)" :key="menuDiecisiete">
        <div class="informacion1" v-for="categoriaDiecisiete in menuDiecisiete.categoria" :key="categoriaDiecisiete">
          <CardSopasCaldo :categoriaDiecisiete="categoriaDiecisiete" />
        </div>
        </div>
      </div>

      <div class="item3">
        <div class="titulo"><p>ENSALADAS</p></div>
        <div class="INFORMACION" v-for="menuDieciocho in menus.slice(17,18)" :key="menuDieciocho">
        <div class="informacion1" v-for="categoriaDieciocho in menuDieciocho.categoria" :key="categoriaDieciocho">
          <CardEnsalada :categoriaDieciocho="categoriaDieciocho" />
        </div>
        </div>
      </div>

      <div class="item4">
        <div class="titulo"><p>HAMBURGUESAS Y SANDWICHES</p></div>
        <div class="informacion">
        <div class="INFORMACION_DOS" v-for="menuDiecinueve in menus.slice(18,19)" :key="menuDiecinueve">
        <div class="informacion2" v-for="categoriaDiecinueve in menuDiecinueve.categoria" :key="categoriaDiecinueve">
          <CardHamburguesaSandwiches :categoriaDiecinueve="categoriaDiecinueve" />
        </div>
        </div>
          
        </div>
      </div>

      <div class="item5">
        <div class="titulo"><p>CARNES AL GRILL</p></div>
        <div class="INFORMACION" v-for="menuVeinte in menus.slice(19,20)" :key="menuVeinte">
        <div class="informacion1" v-for="categoriaVeinte in menuVeinte.categoria" :key="categoriaVeinte">
          <CardCarneGrill :categoriaVeinte="categoriaVeinte" />
        </div>
        </div>
      </div>

      <div class="item6">
        <div class="titulo"><p>AVES</p></div>
        <div class="INFORMACION" v-for="menuVeintiuno in menus.slice(20,21)" :key="menuVeintiuno">
        <div class="informacion1" v-for="categoriaVeintiuno in menuVeintiuno.categoria" :key="categoriaVeintiuno">
          <CardAve :categoriaVeintiuno="categoriaVeintiuno" />
        </div>
        </div>
      </div>

      <div class="item7">
        <div class="titulo"><p>PESCA DEL DIA</p></div>
        <div class="INFORMACION" v-for="menuVeintidos in menus.slice(21,22)" :key="menuVeintidos">
        <div class="informacion1" v-for="categoriaVeintidos in menuVeintidos.categoria" :key="categoriaVeintidos">
          <CardPesacaDia :categoriaVeintidos="categoriaVeintidos" />
        </div>
        </div>
      </div>

      <div class="item8">
        <div class="titulo"><p>ENCHILADAS</p></div>
        <div class="INFORMACION" v-for="menuVeintitres in menus.slice(22,23)" :key="menuVeintitres">
        <div class="informacion1" v-for="categoriaVeintitres in menuVeintitres.categoria" :key="categoriaVeintitres">
          <CardEnchilada :categoriaVeintitres="categoriaVeintitres" />
        </div>
        </div>
      </div>

      <div class="item9">
        <div class="titulo"><p>POSTRES</p></div>
        <div class="INFORMACION_DOS" v-for="menuTrece in menus.slice(12,13)" :key="menuTrece">
        <div class="informacion2" v-for="categoriaTrece in menuTrece.categoria" :key="categoriaTrece">
          <CardPostres :categoriaTrece="categoriaTrece" />
        </div>
        </div>
      </div>

      <div class="item10">
        <div class="titulo"><p>CAFES Y BEBIDAS CALIENTES</p></div>
        <div class="INFORMACION_DOS" v-for="menuSiete in menus.slice(6,7)" :key="menuSiete">
        <div class="informacion2" v-for="categoriaSiete in menuSiete.categoria" :key="categoriaSiete">
          <CardCafesBebidasCalientes :categoriaSiete="categoriaSiete" />
        </div>
        </div>
      </div>

      <div class="item11">
        <div class="titulo"><p>BEBIDAS REFRESCANTES</p></div>
        <div class="INFORMACION_DOS" v-for="menuVeinticuatro in menus.slice(23,24)" :key="menuVeinticuatro">
        <div class="informacion2" v-for="categoriaVeinticuatro in menuVeinticuatro.categoria" :key="categoriaVeinticuatro">
          <CardBebidasRefrescante :categoriaVeinticuatro="categoriaVeinticuatro" />
        </div>
        </div>
      </div>

      <div class="item12">
        <div class="titulo"><p>CERVEZAS</p></div>
        <div class="INFORMACION_DOS" v-for="menuVeinticinco in menus.slice(24,25)" :key="menuVeinticinco">
        <div class="informacion2" v-for="categoriaVeinticinco in menuVeinticinco.categoria" :key="categoriaVeinticinco">
          <CardCerveza :categoriaVeinticinco="categoriaVeinticinco" />
        </div>
        </div>
      </div>

      <div class="item13">
        <div class="titulo"><p>VINOS</p></div>
        <div class="INFORMACION" v-for="menuVeintiseis in menus.slice(25,26)" :key="menuVeintiseis">
        <div class="informacion1" v-for="categoriaVeintiseis in menuVeintiseis.categoria" :key="categoriaVeintiseis">
          <CardVinos :categoriaVeintiseis="categoriaVeintiseis" />
        </div>
        </div>
      </div>

      <div class="item14">
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
import CardEntradaTacos from "@/components/CardEntradaTacos.vue";
import CardSopasCaldo from "@/components/CardSopasCaldo.vue";
import CardEnsalada from "@/components/CardEnsalada.vue";
import CardHamburguesaSandwiches from "@/components/CardHamburguesaSandwiches.vue";
import CardCarneGrill from "@/components/CardCarneGrill.vue";
import CardAve from "@/components/CardAve.vue";
import CardPesacaDia from "@/components/CardPesacaDia.vue";
import CardEnchilada from "@/components/CardEnchilada.vue";
import CardPostres from "@/components/CardPostres.vue";
import CardCafesBebidasCalientes from "@/components/CardCafesBebidasCalientes.vue";
import CardBebidasRefrescante from "@/components/CardBebidasRefrescante.vue";
import CardCerveza from "@/components/CardCerveza.vue";
import CardVinos from "@/components/CardVinos.vue";
import CardToksMano from "@/components/CardToksMano.vue";
export default {
  components:{CardEntradaTacos,CardSopasCaldo,CardEnsalada,CardHamburguesaSandwiches,
  CardCarneGrill,CardAve,CardPesacaDia,CardEnchilada,CardPostres,CardCafesBebidasCalientes,
  CardBebidasRefrescante,CardCerveza,CardVinos,CardToksMano},
  props:['ToggleCena'],
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
    .cena_img{
      background: url('https://menugrg.com.mx:7443/menudigital/categorias/Club_Sandwich.1604202054.jpg');
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
      width: 20rem;
      border-radius: 20px;
    }
    .informacion{
        margin-top: 1rem;
        
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
      .cena_img{
        width: 30rem;
        background-position-y: -10rem;
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
      .cena_img{
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
      .cena_img{
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
<template>
  <div class="CONTENEDOR">
    <div class="contenedor">

      <div class="localizacion_ciudad" v-for="ciudad in ciudades.slice(0,1)" :key="ciudad.id" @click="locacion=true"><img src="@/assets/map.svg" alt=""> {{ciudad.nombre}}</div>

        <div class="listado_ciudades" v-if="locacion">
        <div class="ciudad" @click="filtro('1'), (locacion = false)">
          Aguascalientes
        </div>
        <div class="ciudad" @click="filtro('2'), (locacion = false)">
          Baja California
        </div>
        <div class="ciudad" @click="filtro('3'), (locacion = false)">
          Campeche
        </div>
        <div class="ciudad" @click="filtro('4'), (locacion = false)">
          Chiapas
        </div>
        <div class="ciudad" @click="filtro('5'), (locacion = false)">
          CDMX
        </div>
        <div class="ciudad" @click="filtro('6'), (locacion = false)">
          Coahuila
        </div>
        <div class="ciudad" @click="filtro('7'), (locacion = false)">
          Estado de Mexico
        </div>
      </div>

      <div v-for="ciudad in ciudades" :key="ciudad.id">
        <div v-for="sucursal in ciudad.sucursale" :key="sucursal.id" class="listado_cursal">
          {{ sucursal }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  data() {
    return {
      locacion: false,
    };
  },
  setup() {
    const store = useStore();
    const ciudades = computed(() => {
      return store.state.filtroCiudad;
    });
    onMounted(() => {
      store.dispatch("consultaCiudades");
    });
    const filtro = (id) => {
      store.dispatch("consultaFiltroCiudad", id);
    };
    return {
      filtro,
      ciudades,
    };
  },
};
</script>

<style lang="scss" scoped>
.CONTENEDOR {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  .localizacion_ciudad{
    background-color: lightseagreen;
    height: 2rem;
  }

  /* display: flex;
    align-items: center;
    justify-content: center; */
  .contenedor {
    background: linear-gradient(180deg, #2f2f30, #262628);
    width: 30rem;
    height: 13rem;
    border-radius: 25px;
    .listado_ciudades{
      background-color: palevioletred;
      height: 10.7rem;
      overflow-y: scroll;
      .ciudad{
        border: 1px solid black;
        height: 2rem;
      }
    }
  }
}
</style>
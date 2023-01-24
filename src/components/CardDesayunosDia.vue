<template>
<div class="modal_info">{{filtrado.nombre_categoria}}</div>

<div class="contenedor" @click="filter(categorias.id)">
    <div class="imagen_precio">
        <div class="imagen">
            <img :src="categorias.imagen" class="desayunos_card">
            <div class="precio">$ {{categorias.precio}}</div>
            
        </div>
        
    </div>
    <div class="nombre"><p>{{categorias.nombre_categoria}}</p><div>{{categorias.id}}</div></div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
    props:['categorias'],
    setup(){
        const store = useStore()
        const filtrado = computed(()=>{
            console.log(filtrado)
            return store.state.filtroListado
        })
        const filter = ((id)=>{
            store.dispatch('filtroId',id)
        })
        return{
            filter,
            filtrado
        }
            
    }

}
</script>

<style lang="scss" scoped>
.contenedor{
    width: 12rem;
    height: 11.5rem;
    .imagen{

        height: 9rem;
        .desayunos_card{
            height: 9rem;
            width: 10rem;
            border-radius: 10px;
        }
        .precio{
            background: #f58220;
            position: relative;
            width: 5rem;
            border-radius: 20px;
            color: white;
            font-family: Lifehack;
            margin-top: -1.5rem;
            margin-left: 6rem;
        }
    }
    .nombre{
 
        height: 2rem;
        color: white;
        font-family: Lifehack;
    }
}
.modal_info{
    background-color: greenyellow;
    position: fixed;
    height: 50rem;

}

</style>
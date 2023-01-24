<template>
<div class="contenedor">
    <div class="imagen_precio">
        <div class="imagen"><img :src="categoriaNueve.imagen" class="desayunos_card">
        <div class="precio">$ {{categoriaNueve.precio}}</div>
    </div>
    </div>
    <div class="nombre"><p>{{categoriaNueve.nombre_categoria}}</p></div>

</div>
  
</template>

<script>
export default {
    props:['categoriaNueve']

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
            background-color: #f58220;
            width: 4rem;
            margin-top: -1.8rem;
            position: relative;
            margin-left: 7rem;
            font-family: Lifehack;
            color: white;
            border-radius: 10px;
        }
    }
    .nombre{

        height: 2rem;
        color: white;
        font-family: Lifehack;
    }
}

</style>>
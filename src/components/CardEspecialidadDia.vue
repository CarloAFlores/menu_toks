<template>
<div class="contenedor">
    <div class="imagen_precio">
        <div class="imagen">
            <img :src="categoriaDos.imagen" class="desayunos_card">
            <div class="precio">$ {{categoriaDos.precio}}</div>
        </div>
    </div>
    <div class="nombre"><p>{{categoriaDos.nombre_categoria}}</p> <div>{{categoriaDos.id}}</div></div>

</div>
  
</template>

<script>
export default {
    props:['categoriaDos']

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
            font-family: Lifehack;
            margin-top: -1.5rem;
            margin-left: 6rem;
            color: white;
        }
    }
    .nombre{

        height: 2rem;
        color: white;
        font-family: Lifehack;
    }
}

</style>
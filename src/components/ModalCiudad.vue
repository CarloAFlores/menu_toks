<template>
   <div class="modal" v-if="confirmar" v-bind="Modal">
    <form>
        <p><img src="@/assets/logo.png" alt=""> Selecciona tu ciudad</p>
        <select name="Ciudad" id="">
            <option value="">Puebla</option>
            <option value="">Cdmx</option>
            <option value="">Monterrey</option>
            
        </select>
    </form>
    <div class="botones">
    <button @click="confirmar=false">Si</button>
    <button @click="confirmar=false">No</button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            confirmar:true
    }
  },
  props:['Modal']

}
</script>

<style scoped>
.modal{
    background: gray;
    height: 200px;
    width: 500px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Ubuntu', sans-serif;

}

select{
    margin-left: 30px;
}
.botones{
    margin-top: 30px;
    }
button{
    margin-left: 30px;
    background-color: orangered;
    border: none;
    width: 150px;
    border-radius: 20px;
    font-family: 'Ubuntu', sans-serif;
}    

@media screen and (max-width:500px){
    button{
        width: 90px;
    }
}
img{
    width: 20px;
    height: 20px;
}

</style>
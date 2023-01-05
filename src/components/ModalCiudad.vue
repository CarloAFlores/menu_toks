<template>
<div class="modal" v-if="confirmar">
    <h3 class="confimacion"> Confirmamos tu ubicacion</h3>
    <button class="ubicacion">
        <div class="ubicacion_uno">
            <div class="ubicacion_dos">
                <img src="@/assets/marcador.png" alt="nose">
                <h3>Calle los cocos </h3>
            </div>
        </div>
    </button>
    <div class="opciones">
        <button class="boton item1" @click="confirmar=false">
            <div class="buton">
                <div>Si</div>
            </div>
        </button>

        <button class="boton item2" @click="confirmar=false">
            <div>
                <div>No</div>
            </div>
        </button>
    </div>

</div>
</template>

<script>
export default {
    data(){
        return{
            ver:true,
            confirmar:true
    }
  },
  props:['Modal']

}
</script>

<style lang="scss" scoped>
.modal{
    background: linear-gradient(180deg,#2f2f30,#262628);
    width: 30rem;
    height: 15rem;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: white;
    font-family: 'Ubuntu', sans-serif;
}

.ubicacion{
    background: linear-gradient(180deg,#2f2f30,#262628);
    margin-left: 2rem;
    border: none;
    width: 25rem;
    border-radius: 1rem;
    font-family: 'Ubuntu', sans-serif;
    color: white;
    cursor: pointer;
    box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%), 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);
}   

.ubicacion_uno{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25rem;
    border-radius: 30px;
}
.ubicacion_dos{
    display: flex;
    justify-content:space-around;
    align-items: center;
    width: 25rem;
}
.ubicacion_dos img{
    width: 40px;
    height: 40px;
}

.opciones{
    display: flex;
    justify-content: center;
}

.boton{
    min-width: 8rem;
    height: 36px;
    margin: 6px 8px;
    border-radius: 20px;
    padding: 0 8px;
    border: none;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0,0,0,.26);
    color: white;
}
.ubicacion_uno:hover{
    background: #737377;
    transition: 0.4s;
}
.item1{
    background:linear-gradient(rgb(245, 130, 32) 0%, rgb(219, 101, 0) 100%) 0% 0%;
}
.item1:hover{
    background: rgb(206, 154, 59);
    transition: 1s;
}
.item2{
    background: linear-gradient(rgb(47, 47, 48) 0%, rgb(38, 38, 40) 100%);
}

.item2:hover{
    background: #737377;
    transition: 0.4s;
}

@media screen and (max-width:500px){
button{
    width: 90px;
}
img{
    width: 20px;
    height: 20px;
}
.modal{
    min-width: 8rem;
    min-height: 4rem;
}
.ubicacion{
    width: 15rem;
}
.ubicacion_uno{
    width: 15rem;
}
.ubicacion_dos{
    width: 13rem;
    margin-left: 1%;
}
}

</style>
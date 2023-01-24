<template>
<div class="popup">
    <div class="popup-inner">
        <button class="cerrar"  @click="TogglePopup()"><img src="@/assets/close.svg" class="close_img"></button>
    </div>
</div>
</template>

<script>
export default {
    props:['TogglePopup']

}
</script>

<style lang="scss" scoped>
.popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.8);

//Posicionamiento del modal (osea pa que quede en el centro
    display: flex;
    align-items: center;
    justify-content: center;
    .popup-inner{
        background: url('https://menugrg.com.mx:7443/menudigital/Comunicados/2408_22_11_POP_UP_DIC_CHOCOAVELLANA.1672343817.jpg');
        background-size: cover;
        width: 23rem;
        height: 30rem;
        transition: all .5s cubic-bezier(.645,.045,.355,1);
        .cerrar{
            background: transparent;
            border: none;
            margin-left: 20.5rem;
            margin-top: -2rem;
            cursor: pointer;
            .close_img{
                width: 3rem;
                height: 3rem;
            }
        }
    }
}

@media (min-width: 320px) and (max-width: 399px){
    .popup{
        .popup-inner{
            width: 15rem;
            height: 20rem;
            .cerrar{
                margin-left: 12rem;
            }
        }
    }

}

@media (min-width: 400px) and (max-width: 480px){
    .popup{
        .popup-inner{
            width: 18rem;
            height: 23rem;
            .cerrar{
                margin-left: 15.5rem;
            }
        }
    }
}

</style>>

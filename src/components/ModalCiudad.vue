<template>
<div class="popup">
    <div class="popup-inner">
        <div class="texto_confirmacion">
            <p>Confirmanos tu ubicacion</p>
        </div>

        <div class="ubicacion">
            <img src="@/assets/ubicacion.png" alt="Map" class="logo_map">
            <p class="estado">Hermanos Serdan</p>
        </div>

        <div class="botones_si_no">
        <button class="popup-close" @click="TogglePopup()">
            Si
        </button>
        <button class="popup-continue">
            No
        </button>
        </div>
    </div>
</div>

</template>

<script>
import font from "@/common/font.css";
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

    display: flex;
    align-items: center;
    justify-content: center;
    .popup-inner{
        background: linear-gradient(180deg,#2f2f30,#262628);
        width: 30rem;
        height: 12.5rem;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transition: all .5s cubic-bezier(.645,.045,.355,1);
    }
    .texto_confirmacion{
        font-family: 'Roboto', sans-serif;
        font-weight:400;
        font-size: 1.5rem;
        width: 20rem;
        color: white;
        transition: all .5s cubic-bezier(.645,.045,.355,1);
    }
    .ubicacion{
        background: linear-gradient(180deg,#2f2f30,#262628);
        box-shadow: 0px .3px 0px  rgba(245,245,245,0.8);
        height: 2.7rem;
        width: 27rem;
        border-radius: 25px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 1rem;
        cursor: pointer;
        transition: all .5s cubic-bezier(.645,.045,.355,1);
        .logo_map{
            width: 38px;
            height: 38px;
        }
        .estado{
            font-family: 'Roboto', sans-serif;
            font-weight:400;
            font-size: 1.3rem;
            width: 23rem;
            color: white;
        }
    }
    .ubicacion:hover{
        background: rgba(114, 109, 109, .5);
        transition: background-color 2s;
    }
    .botones_si_no{
        width: 20rem;
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        transition: all .5s cubic-bezier(.645,.045,.355,1);
        .popup-close{
            width: 9rem;
            height: 2rem;
            border-radius: 25px;
            border: none;
            font-family:cocogoose-pro;
            font-size: 1.1rem;
            background: linear-gradient(rgb(245, 130, 32) 0%, rgb(219, 101, 0) 100%) 0% 0%;
            box-shadow: 0 3px 6px rgba(0,0,0,.69);
            color: white;
            cursor: pointer;
        }
        .popup-close:hover{
            background: linear-gradient(rgb(250, 152, 66) 0%, rgb(219, 116, 26) 100%) 0% 0%;
            transition: background-color 1s;
        }
        .popup-continue{
            width: 9rem;
            height: 2rem;
            border-radius: 25px;
            border: none;
            font-family:cocogoose-pro;
            font-size: 1.1rem;
            background: linear-gradient(rgb(47, 47, 48) 0%, rgb(38, 38, 40) 100%);
            box-shadow: 0 3px 6px rgba(0,0,0,.69);
            color: white;
            cursor: pointer;
        }
        .popup-continue:hover{
            background: rgb(114, 109, 109);
            transition: background-color .5s;
        }
    }
}
@media (min-width: 320px) and (max-width: 399px){
    .popup{
        .popup-inner{

            width: 18rem;
            height: 15rem;
            .texto_confirmacion{

                width: 15rem;
                font-size: 1.2rem;
                
            }
            .ubicacion{

                width: 16rem;
            }
            .botones_si_no{
 
                width: 12rem;
                .popup-close{
                    width: 5rem;
                }
                .popup-continue{
                    width: 5rem;
                }
            }
        }
    }

}
@media (min-width: 400px) and (max-width: 480px){
    .popup{
        .popup-inner{

            width: 18rem;
            height: 15rem;
            .texto_confirmacion{

                width: 15rem;
                font-size: 1.2rem;
                
            }
            .ubicacion{

                width: 16rem;
            }
            .botones_si_no{

                width: 12rem;
                .popup-close{
                    width: 5rem;
                }
                .popup-continue{
                    width: 5rem;
                }
            }
        }
    }

}

</style>

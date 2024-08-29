<template>
    <div class="w-full flex flex-col items-center">
        <AtacarejoComponent  title = "Atacarejo Fernando" job=""  :img = "`/vale.jpeg`" desc = "Acredito que o estágio será extremamente benéfico para a aplicação dos conhecimentos adquiridos, tanto na gestão de suprimentos do meu comércio local familiar quanto no desenvolvimento de aplicações práticas, eficientes, escaláveis e extensíveis." />
        <ProjectComponent name = "Atacarejo Fernando" desc = "Pequena loja de atacado e varejo situada na cidade de Ponte Nova (Minas Gerais), a qual trabalha com uma grande diversidade de produtos, atendendo às demandas locais por mercadorias de qualidade a preços acessíveis." :img = "`/atacarejo.jpg`" data = "2023" url="https://www.instagram.com/atacarejofernando/"
        class="mt-20 max-w-[700px] flex"/>
    </div>

</template>

<script>
import AtacarejoComponent from './common/AtacarejoComponent.vue';
import ProjectComponent from './common/ProjectComponent.vue';

    export default {

        name: "RecomendationaPage",
        components: {
            AtacarejoComponent,
            ProjectComponent
        },
        data(){
            return {
                showModal: false,
                items: [],
                route: 'http://localhost:5173/'
            }
        },

    }
</script>


<style>

</style>
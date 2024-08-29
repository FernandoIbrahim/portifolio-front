<template>
    <div class="w-full flex flex-col items-center">
        <TitleComponent content="Trabalhos"></TitleComponent>
        <ProjectComponent name = "Atacarejo Fernando" desc = "Pequena loja de atacado e varejo situada na cidade de Ponte Nova (Minas Gerais), a qual trabalha com uma grande diversidade de produtos, atendendo às demandas locais por mercadorias de qualidade a preços acessíveis. Durante a implementação da loja, trabalhei em uma série de atividades, incluindo o design do negócio, a implementação do sistema de vendas, suporte técnico, caixa e vendas." :img = "`/atacarejo.jpg`" data = "2023" url="https://www.instagram.com/atacarejofernando/"
        class="mt-20 max-w-[900px] flex"/>
        <ProjectComponent name = "Telus Intenacional" desc = "No início de 2022, trabalhei como freelancer para a Telus International, uma empresa terceirizada que oferece serviços para grandes empresas de tecnologia (BIGTECHs). Na posição de Social Media Evaluator, minhas responsabilidades incluíam fornecer avaliações humanas, em inglês, sobre postagens reportadas em uma grande rede social." :img = "`/telus.jpg`" data = "2023" url="https://www.instagram.com/atacarejofernando/"
        class="mt-8 max-w-[900px] flex"/>
    </div>

</template>

<script>
import TitleComponent from './text/TitleComponent.vue';
import ProjectComponent from './common/ProjectComponent.vue';

    export default {

        name: "RecomendationaPage",
        components: {
            ProjectComponent,
            TitleComponent
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